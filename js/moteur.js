/* ============================================================
   MOTEUR — École+
   Navigation par hash (#/annee/P6, #/module/P6/Mathématiques/prob),
   moteur QCM commun, épreuves blanches chronométrées,
   points et progression (sauvegarde locale si disponible).
   ============================================================ */

/* ---------- Sauvegarde locale sécurisée ---------- */
const stock = {
  get(cle, defaut){
    try{ const v = localStorage.getItem('ecoleplus_'+cle); return v===null ? defaut : JSON.parse(v); }
    catch(e){ return defaut; }
  },
  set(cle, val){
    try{ localStorage.setItem('ecoleplus_'+cle, JSON.stringify(val)); }catch(e){}
  }
};
let pointsGlobaux = stock.get('points', 0);
let progression = stock.get('progression', {});   /* {moduleCle:{etoiles, essais}} */

function majPointsAffiches(){
  document.getElementById('pointsGlobaux').textContent = `🏆 ${pointsGlobaux} pts`;
}
function gagnerPoints(n){
  pointsGlobaux += n;
  stock.set('points', pointsGlobaux);
  majPointsAffiches();
}

/* ---------- Utilitaires ---------- */
function echap(t){ const d=document.createElement('div'); d.textContent=t; return d.innerHTML; }
function confettis(){
  for(let i=0;i<12;i++){
    const c=document.createElement('div');
    c.className='confetti';
    c.textContent=['🎉','⭐','🌟','🎓','🎊'][i%5];
    c.style.left=Math.random()*100+'vw';
    c.style.animationDelay=(Math.random()*.4)+'s';
    document.body.appendChild(c);
    setTimeout(()=>c.remove(), 2500);
  }
}
function lireVoix(texte, langue){
  try{
    speechSynthesis.cancel();
    const code = LANGUES_TTS[langue||'fr'] || 'fr-FR';
    const u=new SpeechSynthesisUtterance(texte);
    u.lang=code;
    u.rate = langue==='fr'||!langue ? 1 : 0.9;
    const v=speechSynthesis.getVoices().find(x=>x.lang.startsWith(code.slice(0,2)));
    if(v) u.voice=v;
    speechSynthesis.speak(u);
  }catch(e){}
}

/* ---------- Niveaux de difficulté ----------
   Niveau 1 : contenu de base, sans chrono, points ×1
   Niveau 2 : contenu plus dur (si défini), chrono 25 s, points ×2
   Niveau 3 : contenu encore plus dur, chrono 12 s, points ×3 */
let niveauxMod = stock.get('niveauxMod', {});
function nivDe(cle){ return niveauxMod[cle] || 1; }
function choisirNiveau(n){
  niveauxMod[cleActuelle] = n;
  stock.set('niveauxMod', niveauxMod);
  router(); /* recharge le module au nouveau niveau */
}
function barreNiveauxHTML(cle){
  const n = nivDe(cle);
  return `<div class="barre-niveaux">` +
    [1,2,3,4,5].map(i=>`<button class="btn-niv ${i===n?'actif':''}" onclick="choisirNiveau(${i})">Niv ${i}<br><span class="etoiles-niv">${'★'.repeat(i)}</span></button>`).join('') +
    `</div>`;
}
function paramsPourNiveau(mod, cle){
  const n = nivDe(cle);
  if(mod.niveaux && mod.niveaux.length) return mod.niveaux[Math.min(n, mod.niveaux.length)-1];
  return mod.params || {};
}

/* Chrono par question (niveaux 2 et 3) */
let idChronoQ = null, tempsQ = 0;
function arreterChronoQ(){ if(idChronoQ){ clearInterval(idChronoQ); idChronoQ = null; } const e=document.getElementById('chronoQ'); if(e) e.textContent=''; }
function lancerChronoQ(surTimeout, durees){
  arreterChronoQ();
  const n = nivDe(cleActuelle);
  if(n < 2) return;
  tempsQ = (durees || {2:30, 3:20, 4:15, 5:10})[n];
  const aff = ()=>{ const e=document.getElementById('chronoQ'); if(e){ e.textContent = `⏱️ ${tempsQ} s`; e.classList.toggle('urgent', tempsQ<=5); } };
  aff();
  idChronoQ = setInterval(()=>{
    tempsQ--;
    aff();
    if(tempsQ<=0){ arreterChronoQ(); surTimeout(); }
  }, 1000);
}

/* ---------- Tirage sans répétition ----------
   Banques : chaque module a un « paquet » mélangé, consommé sans remise.
   Une question déjà posée ne revient pas avant d'avoir épuisé toute la banque.
   Générateurs : mémoire des 25 derniers énoncés pour éviter les redites. */
const paquets = {};          /* cleModule → indices restants (banques) */
const memoireGen = {};       /* cleModule → derniers énoncés (générateurs) */
function tirerDepuisModule(mod, cleModule){
  cleModule = cleModule || (mod.type + '_' + mod.ref);
  if(mod.type==='gen'){
    if(!memoireGen[cleModule]) memoireGen[cleModule] = [];
    const memoire = memoireGen[cleModule];
    let item, garde = 0;
    const prm = (typeof cleActuelle!=='undefined' && cleModule===cleActuelle) ? paramsPourNiveau(mod, cleModule) : (mod.params||{});
    do{
      garde++;
      item = GENERATEURS[mod.ref](prm);
    }while(memoire.includes(item.q) && garde<30);
    memoire.push(item.q);
    if(memoire.length>25) memoire.shift();
    return item;
  }
  const banque = BANQUES[mod.ref];
  const niv = (typeof cleActuelle!=='undefined' && cleModule===cleActuelle) ? nivDe(cleModule) : 1;
  let vivier;
  if(niv>=5){
    vivier = banque.map((it,i)=>({it,i})).filter(o=>o.it.n===5);
    if(!vivier.length) vivier = banque.map((it,i)=>({it,i})).filter(o=>o.it.n===4);
  }else if(niv===4){
    vivier = banque.map((it,i)=>({it,i})).filter(o=>o.it.n===4);
  }else{
    vivier = banque.map((it,i)=>({it,i})).filter(o=>!o.it.n);
  }
  if(!vivier.length) vivier = banque.map((it,i)=>({it,i})).filter(o=>!o.it.n);
  const clePaquet = cleModule + '|n' + Math.min(niv,5);
  if(!paquets[clePaquet] || !paquets[clePaquet].length){
    paquets[clePaquet] = melanger(vivier.map(o=>o.i));
  }
  const idx = paquets[clePaquet].pop();
  const brut = banque[idx];
  return {q:brut.q, opts:melanger([brut.b, ...brut.a]), bonne:brut.b, fin:paquets[clePaquet].length===0};
}

/* ---------- Routage ---------- */
function router(){
  const hash = location.hash || '#/';
  const parts = hash.slice(2).split('/').filter(Boolean).map(decodeURIComponent);
  speechSynthesis.cancel();
  arreterChrono();
  arreterChronoQ();
  if(parts.length===0) return vueAccueil();
  if(parts[0]==='annee' && parts[1]) return vueAnnee(parts[1]);
  if(parts[0]==='module' && parts[3]) return vueModule(parts[1], parts[2], parts[3]);
  if(parts[0]==='epreuve' && parts[1]) return vueEpreuve(parts[1]);
  vueAccueil();
}
window.addEventListener('hashchange', router);

/* ---------- Vues ---------- */
function vueAccueil(){
  const c = document.getElementById('contenu');
  let html = `<h1>Choisis ton année 🎒</h1>
  <p class="sous">Des exercices interactifs pour toute la scolarité, de la maternelle à la rhéto —
  avec des épreuves blanches pour préparer le CEB, le CE1D, le CE2D et le CESS.</p>`;
  for(const groupe of ['Maternelle','Primaire','Secondaire']){
    html += `<div class="groupe-titre">${groupe}</div><div class="grille-cartes">`;
    ANNEES.filter(a=>a.groupe===groupe).forEach(a=>{
      html += `<a class="carte" href="#/annee/${a.id}">
        <span class="emoji">${a.emoji}</span>
        <span class="titre">${a.nom}</span>
        ${a.epreuve ? `<span class="badge">📜 ${a.epreuve}</span>` : ''}
      </a>`;
    });
    html += `</div>`;
  }
  c.innerHTML = html;
}

function vueAnnee(idAnnee){
  const annee = ANNEES.find(a=>a.id===idAnnee);
  const prog = PROGRAMME[idAnnee];
  const c = document.getElementById('contenu');
  if(!annee || !prog){ c.innerHTML = '<p>Année introuvable. <a href="#/">Retour</a></p>'; return; }
  let html = `<div class="fil"><a href="#/">Accueil</a> › ${annee.nom}</div>
  <h1>${annee.emoji} ${annee.nom}</h1>`;
  if(annee.groupe==='Maternelle'){
    html += `<div class="avertissement">💡 Pour les enfants qui ne lisent pas encore, chaque question
    peut être lue à voix haute avec le bouton 🔊. L'idéal est de jouer avec un adulte à côté.</div>`;
  }
  if(annee.epreuve){
    html += `<div class="grille-modules" style="margin-bottom:6px;">
      <a class="carte epreuve" href="#/epreuve/${annee.id}">
        <span class="emoji">⏱️</span>
        <span class="titre">Épreuve blanche ${annee.epreuve}</span>
        <span class="detail">10 questions · 10 minutes · toutes matières</span>
      </a></div>`;
  }
  for(const matiere in prog){
    html += `<div class="groupe-titre">${matiere}</div><div class="grille-modules">`;
    prog[matiere].forEach(m=>{
      const cle = `${idAnnee}_${matiere}_${m.id}`;
      const p = progression[cle];
      html += `<a class="carte" href="#/module/${idAnnee}/${encodeURIComponent(matiere)}/${m.id}">
        <span class="emoji">${m.emoji}</span>
        <span class="titre">${m.titre}</span>
        <span class="detail">${m.type==='gen' ? 'Questions illimitées' : m.type==='banque' ? (BANQUES[m.ref]?.length || 0)+' questions' : '🎮 Jeu interactif'}</span>
        ${p && p.etoiles>0 ? `<span class="detail">⭐ ${p.etoiles} réussies</span>` : ''}
      </a>`;
    });
    html += `</div>`;
  }
  c.innerHTML = html;
}

/* ---------- Vue module (exercices en continu) ---------- */
let modActuel = null, cleActuelle = '', bonneActuelle = '', verrou = false, serie = 0;
function vueModule(idAnnee, matiere, idMod){
  const annee = ANNEES.find(a=>a.id===idAnnee);
  const mod = (PROGRAMME[idAnnee]?.[matiere]||[]).find(m=>m.id===idMod);
  const c = document.getElementById('contenu');
  if(!annee || !mod){ c.innerHTML = '<p>Module introuvable. <a href="#/">Retour</a></p>'; return; }
  modActuel = mod;
  cleActuelle = `${idAnnee}_${matiere}_${idMod}`;
  serie = 0;
  const fil = `<div class="fil"><a href="#/">Accueil</a> › <a href="#/annee/${idAnnee}">${annee.nom}</a> › ${mod.titre}</div>
  <h1>${mod.emoji} ${mod.titre}</h1>`;
  if(mod.type==='couleurs') return vueCouleurs(c, fil);
  if(mod.type==='cris') return vueCris(c, fil);
  if(mod.type==='mot') return vueMot(c, fil, mod);
  if(mod.type==='phraseordre') return vuePhraseOrdre(c, fil, mod);
  if(mod.type==='lecture') return vueLectureAct(c, fil, mod);
  c.innerHTML = fil + barreNiveauxHTML(cleActuelle) + `
  <div class="centre"><span class="chrono-question" id="chronoQ"></span></div>
  <div class="question-boite" id="qBoite"></div>
  <div class="choix court" id="qChoix"></div>
  <div class="barre-actions">
    <button class="btn discret" onclick="lireQuestion()">🔊 Lire la question</button>
    <button class="btn violet" onclick="questionSuivante()">🔄 Autre question</button>
  </div>
  <div class="score-ligne" id="qScore"></div>`;
  questionSuivante();
}
/* Réussite commune aux activités ludiques */
function reussiteActivite(message, langue){
  if(!progression[cleActuelle]) progression[cleActuelle] = {etoiles:0, essais:0};
  progression[cleActuelle].etoiles++;
  progression[cleActuelle].essais++;
  stock.set('progression', progression);
  serie++;
  gagnerPoints((serie>=3 ? 20 : 10) * nivDe(cleActuelle));
  confettis();
  if(message) lireVoix(message, langue);
  const sc = document.getElementById('qScore');
  if(sc) sc.innerHTML = `⭐ ${progression[cleActuelle].etoiles} réussites` +
    (serie>=3 ? ` · <span class="serie">🔥 ${serie} d'affilée</span>` : '');
}
function erreurActivite(){
  if(!progression[cleActuelle]) progression[cleActuelle] = {etoiles:0, essais:0};
  progression[cleActuelle].essais++;
  stock.set('progression', progression);
  serie = 0;
}

/* ---------- ACTIVITÉ : LES COULEURS ---------- */
let bonneCouleur = '', modeJeuCouleur = false;
function vueCouleurs(c, fil){
  modeJeuCouleur = false;
  c.innerHTML = fil + `
  <div class="question-boite centre" id="consigneCouleur">Touche une couleur pour l'entendre ! 🔊</div>
  <div class="grille-pastilles" id="grillePastilles"></div>
  <div class="barre-actions">
    <button class="btn or" id="btnJeuCouleur" onclick="demarrerJeuCouleurs()">🎯 Jouer : trouve la couleur !</button>
  </div>
  <div class="score-ligne" id="qScore"></div>`;
  dessinerPastilles();
}
function dessinerPastilles(){
  const g = document.getElementById('grillePastilles');
  g.innerHTML = '';
  COULEURS_JEU.forEach(([nom,hex])=>{
    const b = document.createElement('button');
    b.className = 'pastille';
    b.style.background = hex;
    b.setAttribute('aria-label', nom);
    b.onclick = ()=> modeJeuCouleur ? verifCouleur(b, nom) : lireVoix(nom);
    g.appendChild(b);
  });
}
function demarrerJeuCouleurs(){
  modeJeuCouleur = true;
  document.getElementById('btnJeuCouleur').style.display = 'none';
  questionCouleur();
}
function questionCouleur(){
  verrou = false;
  bonneCouleur = COULEURS_JEU[Math.floor(Math.random()*COULEURS_JEU.length)][0];
  document.getElementById('consigneCouleur').textContent = `Touche le ${bonneCouleur} !`;
  dessinerPastilles();
  setTimeout(()=>lireVoix(`Touche le ${bonneCouleur} !`), 250);
}
function verifCouleur(btn, nom){
  if(verrou) return;
  if(nom===bonneCouleur){
    verrou = true;
    btn.style.transform = 'scale(1.25)';
    reussiteActivite(`Bravo ! C'est le ${nom} !`);
    setTimeout(questionCouleur, 1800);
  }else{
    erreurActivite();
    lireVoix(`Non, ça c'est le ${nom}. Cherche le ${bonneCouleur} !`);
  }
}

/* ---------- ACTIVITÉ : LE CRI DES ANIMAUX ---------- */
let bonAnimal = null, lecteurCri = null;
function vueCris(c, fil){
  c.innerHTML = fil + `
  <div class="question-boite centre">Qui fait ce cri ? 👂</div>
  <div class="barre-actions">
    <button class="btn" onclick="rejouerCri()">🔊 Réécouter le cri</button>
  </div>
  <div class="choix court" id="choixCris" style="grid-template-columns:1fr 1fr;"></div>
  <div class="score-ligne" id="qScore"></div>
  <div class="avertissement">💡 Les cris sont de vrais enregistrements — il faut être connecté à internet. Sans connexion, la voix imite le cri.</div>`;
  questionCri();
}
function jouerSon(url, secours){
  try{
    speechSynthesis.cancel();
    if(lecteurCri) lecteurCri.pause();
    lecteurCri = new Audio(url);
    lecteurCri.onerror = ()=>{ if(secours) lireVoix(secours); };
    lecteurCri.play().catch(()=>{ if(secours) lireVoix(secours); });
  }catch(e){ if(secours) lireVoix(secours); }
}
function questionCri(){
  verrou = false;
  const tirage = melanger(CRIS_ANIMAUX).slice(0,4);
  bonAnimal = tirage[Math.floor(Math.random()*tirage.length)];
  const z = document.getElementById('choixCris');
  z.innerHTML = '';
  tirage.forEach(a=>{
    const b = document.createElement('button');
    b.className = 'emoji-choix';
    b.textContent = a[0];
    b.onclick = ()=>verifCri(b, a);
    z.appendChild(b);
  });
  setTimeout(rejouerCri, 350);
}
function rejouerCri(){
  if(bonAnimal) jouerSon(bonAnimal[2], `Qui fait... ${bonAnimal[3]}`);
}
function verifCri(btn, a){
  if(verrou) return;
  if(a===bonAnimal){
    verrou = true;
    btn.classList.add('bon');
    reussiteActivite(`Bravo ! C'est ${a[1]} !`);
    setTimeout(questionCri, 2200);
  }else{
    btn.classList.add('mauvais');
    erreurActivite();
    lireVoix(`Non, ce n'est pas ${a[1]}. Réécoute le cri !`);
    setTimeout(()=>{ btn.classList.remove('mauvais'); rejouerCri(); }, 900);
  }
}

/* ---------- ACTIVITÉ : ÉCRIRE DES MOTS (fr/en/nl) ---------- */
let motActuel = null, posMot = 0, aideMot = true;
function vueMot(c, fil, mod){
  aideMot = nivDe(cleActuelle)===1;
  c.innerHTML = fil + barreNiveauxHTML(cleActuelle) + `
  <div class="grand-emoji" id="motEmoji">🐱</div>
  <div class="indice-langue" id="motIndice"></div>
  <div class="zone-cases" id="motCases"></div>
  <div class="zone-lettres" id="motLettres"></div>
  <div class="barre-actions">
    <button class="btn" onclick="direMotActuel()">🔊 Écouter</button>
    <button class="btn discret" id="btnAideMot" onclick="basculerAideMot()"></button>
    <button class="btn violet" onclick="questionMot()">🔄 Autre mot</button>
  </div>
  <div class="score-ligne" id="qScore"></div>`;
  questionMot();
}
function questionMot(){
  verrou = false;
  const liste = MOTS_ECRIRE[modActuel.ref];
  motActuel = liste[Math.floor(Math.random()*liste.length)];
  posMot = 0;
  document.getElementById('motEmoji').textContent = motActuel[0];
  document.getElementById('motIndice').textContent = motActuel[2] ? `🇫🇷 ${motActuel[2]} → écris-le en ${modActuel.langue==='en'?'anglais':'néerlandais'} !` : '';
  const btnAide = document.getElementById('btnAideMot');
  btnAide.textContent = aideMot ? "🙈 Cacher l'aide" : "👀 Montrer l'aide";
  dessinerCasesMot();
  const lettres = motActuel[1].split('');
  const alphabet = 'ABCDEFGHIJKLMNOPRSTUVW';
  const decoys = [];
  const nbDecoys = [0,3,5,7,9][nivDe(cleActuelle)-1] ?? 3;
  let garde = 0;
  while(decoys.length<nbDecoys && garde<60){
    garde++;
    const l = alphabet[Math.floor(Math.random()*alphabet.length)];
    if(!motActuel[1].includes(l) && !decoys.includes(l)) decoys.push(l);
  }
  const z = document.getElementById('motLettres');
  z.innerHTML = '';
  melanger([...lettres, ...decoys]).forEach(l=>{
    const b = document.createElement('button');
    b.className = 'lettre-jeu';
    b.textContent = l;
    b.onclick = ()=>tapeMot(b, l);
    z.appendChild(b);
  });
  setTimeout(direMotActuel, 300);
}
function dessinerCasesMot(){
  const cases = document.getElementById('motCases');
  cases.innerHTML = '';
  motActuel[1].split('').forEach((l,i)=>{
    const d = document.createElement('div');
    d.className = 'case-mot' + (i<posMot ? ' remplie' : '');
    d.innerHTML = i<posMot ? l : (aideMot ? `<span class="fantome">${l}</span>` : '');
    cases.appendChild(d);
  });
}
function basculerAideMot(){
  aideMot = !aideMot;
  document.getElementById('btnAideMot').textContent = aideMot ? "🙈 Cacher l'aide" : "👀 Montrer l'aide";
  dessinerCasesMot();
}
function direMotActuel(){
  lireVoix(motActuel[1].toLowerCase(), modActuel.langue||'fr');
}
function tapeMot(btn, l){
  if(verrou) return;
  if(l===motActuel[1][posMot]){
    btn.classList.add('usee');
    posMot++;
    dessinerCasesMot();
    if(posMot>=motActuel[1].length){
      verrou = true;
      reussiteActivite(motActuel[1].toLowerCase() + ' !', modActuel.langue||'fr');
      setTimeout(questionMot, 2000);
    }
  }else{
    btn.classList.add('mauvais');
    erreurActivite();
    setTimeout(()=>btn.classList.remove('mauvais'), 450);
  }
}

/* ---------- ACTIVITÉ : PHRASES DANS L'ORDRE (fr/en/nl) ---------- */
let phraseAct = null, posPhrase = 0;
function vuePhraseOrdre(c, fil, mod){
  c.innerHTML = fil + barreNiveauxHTML(cleActuelle) + `
  <div class="centre"><span class="chrono-question" id="chronoQ"></span></div>
  <div class="phrase-construite" id="phraseZone"></div>
  <div class="indice-langue" id="phraseTrad"></div>
  <div class="zone-lettres" id="phraseMots" style="gap:4px;"></div>
  <div class="barre-actions">
    <button class="btn" onclick="direPhraseAct()">🔊 Écouter la phrase</button>
    <button class="btn violet" onclick="questionPhraseOrdre()">🔄 Autre phrase</button>
  </div>
  <div class="score-ligne" id="qScore"></div>`;
  questionPhraseOrdre();
}
function questionPhraseOrdre(){
  verrou = false;
  const liste = PHRASES_ORDRE[modActuel.ref];
  phraseAct = liste[Math.floor(Math.random()*liste.length)];
  posPhrase = 0;
  document.getElementById('phraseZone').innerHTML = '<span style="opacity:.4;">Remets les mots dans l\u2019ordre...</span>';
  document.getElementById('phraseTrad').textContent = phraseAct[1] ? `🇫🇷 ${phraseAct[1]}` : '';
  const z = document.getElementById('phraseMots');
  z.innerHTML = '';
  melanger(phraseAct[0].map((m,i)=>({m,i}))).forEach(o=>{
    const b = document.createElement('button');
    b.className = 'mot-tuile';
    b.textContent = o.m;
    b.onclick = ()=>tapePhraseMot(b, o.i);
    z.appendChild(b);
  });
  setTimeout(direPhraseAct, 300);
  lancerChronoQ(()=>{
    erreurActivite();
    lireVoix('Temps écoulé, on recommence !');
    questionPhraseOrdre();
  }, {2:45, 3:35, 4:25, 5:20});
}
function direPhraseAct(){
  lireVoix(phraseAct[0].join(' '), modActuel.langue||'fr');
}
function tapePhraseMot(btn, idx){
  if(verrou) return;
  if(idx===posPhrase){
    btn.classList.add('usee');
    const p = document.getElementById('phraseZone');
    if(posPhrase===0) p.innerHTML = '';
    const s = document.createElement('span');
    s.textContent = phraseAct[0][posPhrase];
    p.appendChild(s);
    posPhrase++;
    if(posPhrase>=phraseAct[0].length){
      verrou = true;
      arreterChronoQ();
      reussiteActivite(phraseAct[0].join(' '), modActuel.langue||'fr');
      setTimeout(questionPhraseOrdre, 2400);
    }
  }else{
    btn.classList.add('mauvais');
    erreurActivite();
    setTimeout(()=>btn.classList.remove('mauvais'), 450);
  }
}

/* ---------- ACTIVITÉ : LECTURE & AUDITION (fr/en/nl) ---------- */
let lectureAct = null, indexQLect = 0, modeAudition = false, texteRevele = false, dernierIdxLecture = -1;
/* Fusion des textes progressifs (lectures-riches.js) */
try{
  if(typeof LECTURES_RICHES !== 'undefined'){
    for(const r in LECTURES_RICHES){
      if(!LECTURES[r]) LECTURES[r] = [];
      LECTURES_RICHES[r].forEach(t=>{ if(!LECTURES[r].includes(t)) LECTURES[r].push(t); });
    }
  }
}catch(e){}

function vueLectureAct(c, fil, mod){
  modeAudition = false;
  c.innerHTML = fil + barreNiveauxHTML(cleActuelle) + `
  <div class="barre-actions" style="margin-top:0;">
    <button class="btn discret" id="btnModeAudition" onclick="basculerAudition()">🎧 Mode audition : OFF</button>
  </div>
  <div class="texte-lecture" id="texteAct"></div>
  <div class="barre-actions">
    <button class="btn" onclick="lireTexteAct()">🔊 Écouter le texte</button>
    <button class="btn or" id="btnVoirTexte" onclick="revelerTexteAct()" style="display:none;">👀 Voir le texte</button>
    <button class="btn violet" onclick="autreTexteAct()">🔄 Un autre texte</button>
  </div>
  <div class="question-boite" id="qLectBoite" style="font-size:clamp(16px,4.4vw,21px);"></div>
  <div class="choix" id="qLectChoix"></div>
  <div class="score-ligne" id="qScore"></div>`;
  autreTexteAct();
}
function basculerAudition(){
  modeAudition = !modeAudition;
  const b = document.getElementById('btnModeAudition');
  b.textContent = `🎧 Mode audition : ${modeAudition?'ON':'OFF'}`;
  autreTexteAct();
}
let texteAssemble = '', qsLectSelection = [];
const paquetsLectures = {};   /* cle+niv → indices restants : chaque texte passe avant qu'un revienne */
function autreTexteAct(){
  speechSynthesis.cancel();
  const niv = nivDe(cleActuelle);
  let pool = LECTURES[modActuel.ref];
  /* dès le niveau 2, privilégier les textes progressifs (avec t2) */
  if(niv >= 2){
    const riches = pool.filter(t=>t.t2);
    if(riches.length) pool = riches;
  }
  const clePaquet = cleActuelle + '|lect' + Math.min(niv,5) + '|' + pool.length;
  if(!paquetsLectures[clePaquet] || !paquetsLectures[clePaquet].length){
    paquetsLectures[clePaquet] = melanger(pool.map((_,k)=>k));
  }
  const i = paquetsLectures[clePaquet].pop();
  lectureAct = pool[i];
  /* texte : s'allonge avec le niveau */
  texteAssemble = lectureAct.t
    + (niv>=2 && lectureAct.t2 ? ' ' + lectureAct.t2 : '')
    + (niv>=4 && lectureAct.t3 ? ' ' + lectureAct.t3 : '');
  /* questions : 3/4/5/5/6 selon le niveau, difficulté adaptée */
  const nbQ = [3,4,5,5,6][niv-1];
  if(lectureAct.t2){
    let elig = lectureAct.q.filter(Q=>(Q.n||1) <= niv);
    if(niv>=4){
      const durs = elig.filter(Q=>(Q.n||1) >= 2);
      if(durs.length >= nbQ) elig = durs;
    }
    if(niv===5){
      const tresDurs = elig.filter(Q=>(Q.n||1) >= 3);
      if(tresDurs.length >= nbQ) elig = tresDurs;
    }
    qsLectSelection = melanger(elig).slice(0, nbQ)
      .sort((A,B)=>lectureAct.q.indexOf(A) - lectureAct.q.indexOf(B));
  }else{
    qsLectSelection = lectureAct.q;
  }
  indexQLect = 0;
  texteRevele = false;
  afficherTexteAct();
  if(modeAudition) setTimeout(lireTexteAct, 450);
  afficherQuestionLect();
}
function afficherTexteAct(){
  const el = document.getElementById('texteAct');
  const btn = document.getElementById('btnVoirTexte');
  if(modeAudition && !texteRevele){
    el.textContent = '🎧 Écoute bien le texte... Tu peux le réécouter autant de fois que tu veux !';
    el.classList.add('texte-audition');
    btn.style.display = 'inline-block';
  }else{
    el.textContent = texteAssemble || lectureAct.t;
    el.classList.remove('texte-audition');
    btn.style.display = 'none';
  }
}
function revelerTexteAct(){ texteRevele = true; afficherTexteAct(); }
function lireTexteAct(){ if(lectureAct) lireVoix(texteAssemble || lectureAct.t, modActuel.langue||'fr'); }
function afficherQuestionLect(){
  verrou = false;
  const qs = qsLectSelection.length ? qsLectSelection : lectureAct.q;
  if(indexQLect >= qs.length){
    lireVoix('Texte terminé, bravo !');
    setTimeout(autreTexteAct, 1400);
    return;
  }
  const Q = qs[indexQLect];
  document.getElementById('qLectBoite').textContent = `Question ${indexQLect+1}/${qs.length} — ${Q.q}`;
  const z = document.getElementById('qLectChoix');
  z.innerHTML = '';
  melanger([Q.b, ...Q.a]).forEach(rep=>{
    const b = document.createElement('button');
    b.style.fontSize = 'clamp(15px,4.3vw,20px)';
    b.textContent = rep;
    b.onclick = ()=>verifQuestionLect(b, rep===Q.b);
    z.appendChild(b);
  });
}
function verifQuestionLect(btn, juste){
  if(verrou) return;
  if(juste){
    verrou = true;
    btn.classList.add('bon');
    reussiteActivite();
    indexQLect++;
    setTimeout(afficherQuestionLect, 1200);
  }else{
    btn.classList.add('mauvais');
    erreurActivite();
    setTimeout(()=>btn.classList.remove('mauvais'), 450);
  }
}
function questionSuivante(){
  if(!modActuel) return;
  verrou = false;
  const item = tirerDepuisModule(modActuel, cleActuelle);
  bonneActuelle = item.bonne;
  document.getElementById('qBoite').textContent = item.q;
  const zone = document.getElementById('qChoix');
  zone.innerHTML = '';
  zone.classList.toggle('court', item.opts.every(o=>String(o).length<8));
  item.opts.forEach(o=>{
    const b=document.createElement('button');
    b.textContent = o;
    b.onclick = ()=>verifModule(b, o===bonneActuelle);
    zone.appendChild(b);
  });
  if(item.fin){
    document.getElementById('qScore').innerHTML +=
      ' <span style="color:var(--accent2);">🔁 Tu as vu toutes les questions de ce module — on remélange !</span>';
  }
  lancerChronoQ(()=>{
    if(verrou) return;
    verrou = true;
    serie = 0;
    [...document.getElementById('qChoix').children].forEach(b=>{
      if(b.textContent===bonneActuelle) b.classList.add('bon'); else b.disabled = true;
    });
    document.getElementById('qScore').innerHTML = '⏱️ Temps écoulé ! La bonne réponse était affichée en vert.';
    setTimeout(questionSuivante, 1600);
  });
}
function lireQuestion(){
  const q = document.getElementById('qBoite');
  if(q) lireVoix(q.textContent);
}
function verifModule(btn, juste){
  if(verrou) return;
  if(!progression[cleActuelle]) progression[cleActuelle] = {etoiles:0, essais:0};
  const p = progression[cleActuelle];
  p.essais++;
  if(juste){
    verrou = true;
    arreterChronoQ();
    btn.classList.add('bon');
    p.etoiles++;
    serie++;
    const niv = nivDe(cleActuelle);
    gagnerPoints((serie>=3 ? 20 : 10) * niv);
    if(serie>0 && serie%5===0) confettis();
    stock.set('progression', progression);
    document.getElementById('qScore').innerHTML =
      `⭐ ${p.etoiles} bonnes réponses` + (serie>=3 ? ` · <span class="serie">🔥 ${serie} d'affilée</span>` : '');
    setTimeout(questionSuivante, 1100);
  }else{
    serie = 0;
    btn.classList.add('mauvais');
    stock.set('progression', progression);
    document.getElementById('qScore').innerHTML = `⭐ ${p.etoiles} bonnes réponses`;
    setTimeout(()=>btn.classList.remove('mauvais'), 500);
  }
}

/* ---------- Épreuve blanche ---------- */
let examModules = [], examIdx = 0, examBonnes = 0, examBonne = '', tempsRestant = 600, idChrono = null, examAnnee = null;
function arreterChrono(){ if(idChrono){ clearInterval(idChrono); idChrono=null; } }
function vueEpreuve(idAnnee){
  const annee = ANNEES.find(a=>a.id===idAnnee);
  const prog = PROGRAMME[idAnnee];
  const c = document.getElementById('contenu');
  if(!annee || !annee.epreuve || !prog){ c.innerHTML='<p>Épreuve introuvable. <a href="#/">Retour</a></p>'; return; }
  examAnnee = annee;
  examModules = [];
  for(const matiere in prog) prog[matiere].forEach(m=>{ if(m.type==='banque'||m.type==='gen') examModules.push(m); });
  c.innerHTML = `<div class="fil"><a href="#/">Accueil</a> › <a href="#/annee/${idAnnee}">${annee.nom}</a> › Épreuve blanche</div>
  <h1>⏱️ Épreuve blanche ${annee.epreuve}</h1>
  <p class="sous">10 questions tirées de toutes les matières de ${annee.nom}.<br>
  Tu as 10 minutes. Réussite à partir de 5/10 — vise plus haut !</p>
  <div class="centre"><button class="btn or" style="font-size:18px; padding:14px 28px;" onclick="demarrerEpreuve()">🚀 Commencer l'épreuve</button></div>
  <div id="zoneEpreuve"></div>`;
}
function demarrerEpreuve(){
  examIdx = 0; examBonnes = 0; tempsRestant = 600;
  dejaPoseesExam = new Set();
  const z = document.getElementById('zoneEpreuve');
  z.innerHTML = `<div class="centre" style="margin-top:14px;">
    <span class="chrono" id="chronoExam">10:00</span>
    <div class="score-ligne" id="progExam">Question 1/10</div>
  </div>
  <div class="question-boite" id="qBoite"></div>
  <div class="choix" id="qChoix"></div>`;
  idChrono = setInterval(()=>{
    tempsRestant--;
    majChrono();
    if(tempsRestant<=0) finEpreuve();
  }, 1000);
  majChrono();
  questionEpreuve();
}
function majChrono(){
  const el = document.getElementById('chronoExam');
  if(!el) return;
  const m=Math.floor(tempsRestant/60), s=tempsRestant%60;
  el.textContent = `${m}:${s<10?'0'+s:s}`;
  el.classList.toggle('rouge', tempsRestant<=60);
}
let dejaPoseesExam = new Set();
function questionEpreuve(){
  verrou = false;
  const prog = document.getElementById('progExam');
  if(prog) prog.textContent = `Question ${examIdx+1}/10`;
  let item, garde = 0;
  do{
    garde++;
    const mod = examModules[Math.floor(Math.random()*examModules.length)];
    item = tirerDepuisModule(mod, 'exam_' + examAnnee.id + '_' + mod.ref);
  }while(dejaPoseesExam.has(item.q) && garde<40);
  dejaPoseesExam.add(item.q);
  examBonne = item.bonne;
  document.getElementById('qBoite').textContent = item.q;
  const zone = document.getElementById('qChoix');
  zone.innerHTML = '';
  item.opts.forEach(o=>{
    const b=document.createElement('button');
    b.textContent = o;
    b.onclick = ()=>verifEpreuve(b, o===examBonne);
    zone.appendChild(b);
  });
}
function verifEpreuve(btn, juste){
  if(verrou) return;
  verrou = true;
  btn.classList.add(juste?'bon':'mauvais');
  if(juste){ examBonnes++; gagnerPoints(20); }
  else{
    [...document.getElementById('qChoix').children].forEach(b=>{
      if(b.textContent===examBonne) b.classList.add('bon');
    });
  }
  examIdx++;
  setTimeout(()=> examIdx>=10 ? finEpreuve() : questionEpreuve(), 1200);
}
function finEpreuve(){
  arreterChrono();
  const z = document.getElementById('zoneEpreuve');
  if(!z) return;
  const tempsUtilise = 600 - tempsRestant;
  const m=Math.floor(tempsUtilise/60), s=tempsUtilise%60;
  let msg, emoji;
  if(examBonnes>=9){ msg = `Brillant ! Le ${examAnnee.epreuve} n'a qu'à bien se tenir !`; emoji='🏆'; confettis(); }
  else if(examBonnes>=7){ msg = 'Très bon travail, continue comme ça !'; emoji='🌟'; confettis(); }
  else if(examBonnes>=5){ msg = 'Réussi ! Encore un peu d\u2019entraînement pour viser plus haut.'; emoji='✅'; }
  else{ msg = 'Pas encore réussi... mais chaque essai te rapproche du but !'; emoji='💪'; }
  const meilleures = stock.get('epreuves', {});
  const record = Math.max(examBonnes, meilleures[examAnnee.id]||0);
  meilleures[examAnnee.id] = record;
  stock.set('epreuves', meilleures);
  z.innerHTML = `<div class="resultat">${emoji}
    <span class="note-geante">${examBonnes}/10</span>
    ${msg}<br>
    <span style="font-size:14px; color:var(--encre2);">Temps : ${m} min ${s<10?'0'+s:s} s · Record personnel : ${record}/10</span><br><br>
    <button class="btn or" onclick="demarrerEpreuve()">🔄 Refaire une épreuve</button>
  </div>`;
}

/* ---------- Démarrage ---------- */
majPointsAffiches();
router();
