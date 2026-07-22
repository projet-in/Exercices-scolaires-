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

/* ---------- MODE DYS / TDAH ----------
   Police Arial agrandie et aérée, guide de lecture ligné, AUCUN chrono,
   consignes et choix lus à voix haute, barrettes dizaines/unités pour
   les calculs, réponse à l'oral (micro), aide renforcée aux jeux. */
let modeDys = stock.get('modeDys', false);
function appliquerModeDys(){
  document.body.classList.toggle('mode-dys', modeDys);
  const b = document.getElementById('btnDys');
  if(b){ b.textContent = `🧩 Dys/TDAH : ${modeDys?'ON':'OFF'}`; b.classList.toggle('actif', modeDys); }
}
function basculerDys(){
  modeDys = !modeDys;
  stock.set('modeDys', modeDys);
  appliquerModeDys();
  router();
}
/* Lecture vocale d'une option sans la sélectionner */
function ajouterHautParleurOption(btn, texte, langue){
  if(!modeDys) return;
  const sp = document.createElement('span');
  sp.className = 'audio-opt';
  sp.textContent = '🔊';
  sp.onclick = (e)=>{ e.stopPropagation(); lireVoix(texte, langue||'fr'); };
  btn.appendChild(sp);
}
/* Réponse à l'oral (si le navigateur le permet — Chrome/Edge) */
const ReconnaissanceVocale = window.SpeechRecognition || window.webkitSpeechRecognition || null;
function normaliserVoix(t){
  return String(t).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
}
function ecouterReponse(){
  if(!ReconnaissanceVocale){ lireVoix("Désolé, ton navigateur ne permet pas la réponse à l'oral. Essaie avec Chrome ou Edge."); return; }
  const zone = document.getElementById('qChoix') || document.getElementById('qLectChoix');
  if(!zone || enEcoute) return;
  const btnMic = document.getElementById('btnMicro');
  const info = (msg)=>{
    const sc = document.getElementById('qScore');
    if(sc) sc.innerHTML = '🎤 ' + msg;
    lireVoix(msg);
  };
  try{
    speechSynthesis.cancel();          /* couper la voix du site avant d'écouter */
    enEcoute = true;
    let resultatRecu = false, erreurRecue = false;
    const rec = new ReconnaissanceVocale();
    rec.lang = LANGUES_TTS[(modActuel && modActuel.langue) || 'fr'] || 'fr-FR';
    rec.interimResults = false;
    rec.continuous = false;
    rec.maxAlternatives = 5;
    rec.onstart = ()=>{ if(btnMic){ btnMic.textContent = '🔴 Parle maintenant...'; } };
    rec.onresult = (ev)=>{
      resultatRecu = true;
      const dits = [...ev.results[0]].map(r=>normaliserVoix(r.transcript));
      const boutons = [...zone.querySelectorAll('button')];
      let cible = null;
      for(const dit of dits){
        if(!dit) continue;
        cible = boutons.find(b=>{
          const opt = normaliserVoix(b.childNodes[0] ? b.childNodes[0].textContent : b.textContent);
          return opt && (opt===dit || opt.includes(dit) || dit.includes(opt));
        });
        if(cible) break;
      }
      if(cible) cible.click();
      else info("J'ai entendu « " + ev.results[0][0].transcript + " », mais ça ne correspond à aucune réponse. Réessaie !");
    };
    rec.onerror = (ev)=>{
      erreurRecue = true;
      if(ev.error==='not-allowed' || ev.error==='service-not-allowed'){
        info("Le micro est bloqué. Clique sur le cadenas à côté de l'adresse du site, puis autorise le microphone.");
      }else if(ev.error==='no-speech'){
        info("Je n'ai rien entendu. Appuie, attends le point rouge, puis parle bien fort.");
      }else if(ev.error==='audio-capture'){
        info("Aucun micro détecté sur cet appareil.");
      }else if(ev.error==='network'){
        info("Probl\u00e8me de connexion internet vers le service de reconnaissance vocale. V\u00e9rifie ta connexion Wi-Fi et r\u00e9essaie.");
      }else if(ev.error==='language-not-supported'){
        info("Cette langue n'est pas prise en charge par la reconnaissance vocale sur cet appareil.");
      }else if(ev.error!=='aborted'){
        info("Petit souci de micro (" + ev.error + "), réessaie.");
      }
      console.log('Reconnaissance vocale - erreur:', ev.error);
    };
    rec.onend = ()=>{
      enEcoute = false;
      if(btnMic) btnMic.textContent = '🎤 Répondre à l\u2019oral';
      if(!resultatRecu && !erreurRecue) info("Je n'ai rien capté. Réessaie en parlant juste après le point rouge.");
    };
    rec.start();
  }catch(e){
    enEcoute = false;
    if(btnMic) btnMic.textContent = '🎤 Répondre à l\u2019oral';
    info("Impossible de démarrer le micro sur cet appareil.");
  }
}
let enEcoute = false;
/* Barrettes dizaines/unités pour visualiser un calcul (+ ou −) */
function htmlBarrettesNombre(n){
  if(n<0 || n>99) return '';
  const d = Math.floor(n/10), u = n%10;
  let h = '<div><div class="barrettes-nombre">';
  for(let i=0;i<d;i++) h += '<div class="barrette-dix"></div>';
  if(u>0){
    h += '<div class="barrettes-colonne-unites">';
    for(let i=0;i<u;i++) h += '<div class="barrette-un"></div>';
    h += '</div>';
  }
  if(n===0) h += '<div style="width:12px;"></div>';
  h += `</div><div class="barrettes-etiquette">${n}</div></div>`;
  return h;
}
function afficherBarrettes(question){
  const ancienne = document.getElementById('zoneBarrettes');
  if(ancienne) ancienne.remove();
  if(!modeDys) return;
  const m = question.match(/^(\d+)\s*([+−])\s*(\d+)\s*=\s*\?$/);
  if(!m) return;
  const a = parseInt(m[1]), b = parseInt(m[3]);
  if(a>99 || b>99) return;
  const boite = document.getElementById('qBoite');
  if(!boite) return;
  const z = document.createElement('div');
  z.id = 'zoneBarrettes';
  z.className = 'barrettes-zone';
  z.innerHTML = htmlBarrettesNombre(a) + `<div class="barrettes-signe">${m[2]}</div>` + htmlBarrettesNombre(b);
  boite.insertAdjacentElement('afterend', z);
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
  if(modeDys) return;   /* mode dys/TDAH : jamais de limite de temps */
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
  if(parts[0]==='badges') return vueCarnet();
  vueAccueil();
}
window.addEventListener('hashchange', router);

/* ---------- Vues ---------- */
function vueAccueil(){
  const c = document.getElementById('contenu');
  let html = `<h1>Choisis ton année 🎒</h1>
  <p class="sous">Des exercices interactifs pour toute la scolarité, de la maternelle à la rhéto —
  avec des épreuves blanches pour préparer le CEB, le CE1D, le CE2D et le CESS.</p>
  ${carteDefiDuJourHTML()}
  <div class="centre" style="margin-bottom:18px;"><a class="btn or" href="#/badges">🏅 Mon carnet de progression</a></div>`;
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
  if(mod.type==='trous') return vueTrous(c, fil, mod);
  if(mod.type==='chrono') return vueChrono(c, fil, mod);
  if(mod.type==='memory') return vueMemory(c, fil, mod);
  if(mod.type==='vfblitz') return vueVfBlitz(c, fil, mod);
  if(mod.type==='crypto') return vueCrypto(c, fil, mod);
  if(mod.type==='motsmeles') return vueMotsMeles(c, fil, mod);
  if(mod.type==='carte') return vueCarte(c, fil, mod);
  duelActif = false;
  c.innerHTML = fil + barreNiveauxHTML(cleActuelle) + `
  <div class="centre"><span class="chrono-question" id="chronoQ"></span></div>
  <div id="duelZone"></div>
  <div class="question-boite" id="qBoite"></div>
  <div class="choix court" id="qChoix"></div>
  <div class="barre-actions">
    <button class="btn discret" onclick="lireQuestion()">🔊 Lire la question</button>
    ${modeDys && ReconnaissanceVocale ? '<button class="btn or" id="btnMicro" onclick="ecouterReponse()">🎤 Répondre \u00e0 l\u2019oral</button>' : ''}
    <button class="btn discret" onclick="toggleDuel()">🤺 Mode duel : ${duelActif?'ON':'OFF'}</button>
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
  majMeilleureSerie(serie);
  gagnerPoints((serie>=3 ? 20 : 10) * nivDe(cleActuelle));
  confettis();
  verifierBonusDefiDuJour();
  verifierBadges();
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
  aideMot = modeDys || nivDe(cleActuelle)===1;
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
  let nbDecoys = [0,3,5,7,9][nivDe(cleActuelle)-1] ?? 3;
  if(modeDys) nbDecoys = Math.min(nbDecoys, 3);
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

/* ---------- ACTIVITÉ : TEXTE À TROUS (fr/en/nl) ---------- */
let trousTexte = null, trousSegments = [], trousChoisis = [], posTrou = 0, trousMots = [];
const paquetsTrous = {};
function vueTrous(c, fil, mod){
  c.innerHTML = fil + barreNiveauxHTML(cleActuelle) + `
  <div class="texte-lecture" id="trousZone" style="text-align:left;"></div>
  <div class="zone-lettres" id="trousTuiles" style="gap:6px;"></div>
  <div class="barre-actions">
    <button class="btn" onclick="lireTexteTrous()">🔊 Écouter le texte complet</button>
    <button class="btn violet" onclick="questionTrous()">🔄 Un autre texte</button>
  </div>
  <div class="score-ligne" id="qScore"></div>`;
  questionTrous();
}
function questionTrous(){
  verrou = false;
  const niv = nivDe(cleActuelle);
  const pool = TEXTES_TROUS[modActuel.ref];
  const clePaquet = cleActuelle + '|trous|' + pool.length;
  if(!paquetsTrous[clePaquet] || !paquetsTrous[clePaquet].length){
    paquetsTrous[clePaquet] = melanger(pool.map((_,k)=>k));
  }
  trousTexte = pool[paquetsTrous[clePaquet].pop()];
  /* découper : segments de texte et mots marqués {ainsi} */
  trousSegments = [];
  const re = /\{([^}]+)\}/g;
  let dernier = 0, m, marqueurs = [];
  while((m = re.exec(trousTexte.t)) !== null){
    trousSegments.push({txt: trousTexte.t.slice(dernier, m.index)});
    marqueurs.push(trousSegments.length);
    trousSegments.push({mot: m[1]});
    dernier = m.index + m[0].length;
  }
  trousSegments.push({txt: trousTexte.t.slice(dernier)});
  /* choisir les trous selon le niveau */
  const nbTrous = Math.min([3,4,5,6,7][niv-1], marqueurs.length);
  const indices = melanger(marqueurs).slice(0, nbTrous).sort((x,y)=>x-y);
  trousChoisis = indices;
  posTrou = 0;
  /* tuiles : mots des trous + intrus selon le niveau */
  let nbIntrus = [0,0,1,2,3][niv-1];
  if(modeDys) nbIntrus = 0;
  const intrus = melanger(trousTexte.intrus||[]).slice(0, nbIntrus);
  trousMots = melanger([...indices.map(i=>trousSegments[i].mot), ...intrus]);
  dessinerTrous();
  const z = document.getElementById('trousTuiles');
  z.innerHTML = '';
  trousMots.forEach(mot=>{
    const b = document.createElement('button');
    b.className = 'mot-tuile';
    b.textContent = mot;
    b.onclick = ()=>tapeTrou(b, mot);
    z.appendChild(b);
  });
  if(modeDys) setTimeout(lireTexteTrous, 400);
}
function dessinerTrous(){
  const zone = document.getElementById('trousZone');
  let html = '', rang = 0;
  trousSegments.forEach((seg, i)=>{
    if(seg.txt !== undefined){ html += echap(seg.txt); return; }
    const idxChoisi = trousChoisis.indexOf(i);
    if(idxChoisi === -1){ html += echap(seg.mot); return; }
    if(idxChoisi < posTrou){
      html += `<strong style="color:var(--vert);">${echap(seg.mot)}</strong>`;
    }else if(idxChoisi === posTrou){
      html += `<span style="display:inline-block; min-width:70px; border-bottom:3px solid var(--violet); background:#F3EFFF; border-radius:6px; text-align:center;">&nbsp;?&nbsp;</span>`;
    }else{
      html += `<span style="display:inline-block; min-width:70px; border-bottom:3px dashed #C9C2E8;">&nbsp;</span>`;
    }
  });
  zone.innerHTML = html;
}
function lireTexteTrous(){
  if(trousTexte) lireVoix(trousTexte.t.replace(/[{}]/g,''), modActuel.langue||'fr');
}
function tapeTrou(btn, mot){
  if(verrou) return;
  const attendu = trousSegments[trousChoisis[posTrou]].mot;
  if(mot === attendu){
    btn.classList.add('usee');
    posTrou++;
    dessinerTrous();
    if(posTrou >= trousChoisis.length){
      verrou = true;
      reussiteActivite('Bravo, texte complet !');
      setTimeout(()=>lireVoix(trousTexte.t.replace(/[{}]/g,''), modActuel.langue||'fr'), 900);
      setTimeout(questionTrous, 3200);
    }
  }else{
    btn.classList.add('mauvais');
    erreurActivite();
    setTimeout(()=>btn.classList.remove('mauvais'), 450);
  }
}

/* ---------- ACTIVITÉ : CHRONOLOGIE (glisser dans l'ordre) ---------- */
let chronoListe = null, chronoOrdre = [], chronoPos = 0;
const paquetsChrono = {};
function vueChrono(c, fil, mod){
  c.innerHTML = fil + `
  <p class="sous" id="chronoConsigne">Touche les événements dans l'ordre chronologique (du plus ancien au plus récent).</p>
  <div class="phrase-construite" id="chronoRangee" style="flex-direction:column; align-items:stretch; gap:6px;"></div>
  <div class="zone-lettres" id="chronoTuiles" style="gap:8px;"></div>
  <div class="barre-actions">
    <button class="btn violet" onclick="questionChrono()">🔄 Une autre chronologie</button>
  </div>
  <div class="score-ligne" id="qScore"></div>`;
  questionChrono();
}
function questionChrono(){
  verrou = false;
  const pool = CHRONOLOGIES[modActuel.ref];
  const cle = cleActuelle + '|chrono|' + pool.length;
  if(!paquetsChrono[cle] || !paquetsChrono[cle].length) paquetsChrono[cle] = melanger(pool.map((_,k)=>k));
  chronoListe = pool[paquetsChrono[cle].pop()];
  document.getElementById('chronoConsigne').textContent = chronoListe.titre + ' — touche les événements du plus ancien au plus récent.';
  chronoOrdre = [...chronoListe.evenements].sort((a,b)=>a[1]-b[1]);
  chronoPos = 0;
  document.getElementById('chronoRangee').innerHTML = '';
  const z = document.getElementById('chronoTuiles');
  z.innerHTML = '';
  melanger(chronoListe.evenements.map((e,i)=>i)).forEach(i=>{
    const b = document.createElement('button');
    b.className = 'mot-tuile';
    b.style.display = 'block';
    b.style.width = '100%';
    b.textContent = chronoListe.evenements[i][0];
    b.onclick = ()=>tapeChrono(b, i);
    z.appendChild(b);
  });
}
function tapeChrono(btn, idx){
  if(verrou) return;
  const evt = chronoListe.evenements[idx];
  if(evt === chronoOrdre[chronoPos]){
    btn.classList.add('usee');
    const rangee = document.getElementById('chronoRangee');
    const ligne = document.createElement('div');
    ligne.style.cssText = 'text-align:left; padding:8px 12px; background:#E4F5EC; border-radius:10px; font-weight:600;';
    ligne.textContent = `${chronoPos+1}. ${evt[0]}`;
    rangee.appendChild(ligne);
    chronoPos++;
    if(chronoPos >= chronoOrdre.length){
      verrou = true;
      reussiteActivite('Chronologie complète, bravo !');
      setTimeout(questionChrono, 2600);
    }
  }else{
    btn.classList.add('mauvais');
    erreurActivite();
    setTimeout(()=>btn.classList.remove('mauvais'), 450);
  }
}

/* ---------- ACTIVITÉ : MEMORY GÉNÉRALISÉ ---------- */
let memoryPremiere = null, memoryVerrouMem = false, memoryPaires = 0, memoryTotal = 0;
function vueMemory(c, fil, mod){
  c.innerHTML = fil + `
  <p class="sous" id="memoryStatut">Retourne deux cartes pour trouver une paire.</p>
  <div class="grille-memory" id="grilleMemory"></div>
  <div class="barre-actions">
    <button class="btn violet" onclick="demarrerMemory()">🔄 Nouvelle grille</button>
  </div>
  <div class="score-ligne" id="qScore"></div>`;
  demarrerMemory();
}
function demarrerMemory(){
  verrou = false; memoryPremiere = null; memoryVerrouMem = false;
  const paires = melanger(MEMORY_PAIRES[modActuel.ref]).slice(0, 6);
  memoryTotal = paires.length; memoryPaires = 0;
  const cartes = melanger(paires.flatMap((p,i)=>[{id:i, texte:p[0]}, {id:i, texte:p[1]}]));
  const g = document.getElementById('grilleMemory');
  g.innerHTML = '';
  cartes.forEach((carte, pos)=>{
    const b = document.createElement('button');
    b.className = 'carte-memory';
    b.dataset.id = carte.id;
    b.dataset.pos = pos;
    b.textContent = '❓';
    b.onclick = ()=>retourneCarte(b, carte);
    g.appendChild(b);
  });
  document.getElementById('memoryStatut').textContent = `0 / ${memoryTotal} paires trouvées`;
}
function retourneCarte(btn, carte){
  if(memoryVerrouMem || btn.classList.contains('trouvee') || btn===memoryPremiere) return;
  btn.textContent = carte.texte;
  btn.classList.add('retournee');
  if(!memoryPremiere){ memoryPremiere = btn; memoryPremiere._id = carte.id; return; }
  memoryVerrouMem = true;
  if(memoryPremiere._id === carte.id){
    btn.classList.add('trouvee'); memoryPremiere.classList.add('trouvee');
    memoryPaires++;
    document.getElementById('memoryStatut').textContent = `${memoryPaires} / ${memoryTotal} paires trouvées`;
    reussiteActivite();
    if(modActuel && modActuel.langue){
      const texteLangue = /^[a-zA-Z' ]+$/.test(memoryPremiere.textContent) ? memoryPremiere.textContent : carte.texte;
      lireVoix(texteLangue, modActuel.langue);
    }
    memoryPremiere = null; memoryVerrouMem = false;
    if(memoryPaires >= memoryTotal){
      lireVoix('Bravo, grille terminée !');
      setTimeout(demarrerMemory, 1800);
    }
  }else{
    erreurActivite();
    setTimeout(()=>{
      btn.textContent = '❓'; btn.classList.remove('retournee');
      memoryPremiere.textContent = '❓'; memoryPremiere.classList.remove('retournee');
      memoryPremiere = null; memoryVerrouMem = false;
    }, 850);
  }
}

/* ---------- ACTIVITÉ : VRAI/FAUX BLITZ ---------- */
let vfListe = [], vfIdx = 0, vfBonnes = 0, vfDejaVues = new Set();
function vueVfBlitz(c, fil, mod){
  c.innerHTML = fil + `
  <p class="sous">10 affirmations en rafale. Vrai ou faux ?</p>
  <div class="centre"><button class="btn or" style="font-size:18px; padding:14px 28px;" onclick="demarrerVfBlitz()">⚡ Démarrer le blitz</button></div>
  <div id="zoneVf"></div>`;
}
function demarrerVfBlitz(){
  vfIdx = 0; vfBonnes = 0; vfDejaVues = new Set();
  vfListe = melanger(VF_BLITZ[modActuel.ref]).slice(0, 10);
  const z = document.getElementById('zoneVf');
  z.innerHTML = `<div class="score-ligne" id="progVf">Affirmation 1/10</div>
  <div class="question-boite" id="vfBoite"></div>
  <div class="choix" id="vfChoix" style="grid-template-columns:1fr 1fr;"></div>`;
  afficherVf();
}
function afficherVf(){
  verrou = false;
  document.getElementById('progVf').textContent = `Affirmation ${vfIdx+1}/10`;
  const item = vfListe[vfIdx];
  document.getElementById('vfBoite').textContent = item.q;
  const z = document.getElementById('vfChoix');
  z.innerHTML = '';
  [['✅ Vrai', true], ['❌ Faux', false]].forEach(([label, val])=>{
    const b = document.createElement('button');
    b.textContent = label;
    b.onclick = ()=>verifVf(b, val===item.vrai);
    z.appendChild(b);
  });
  if(modeDys) setTimeout(()=>lireVoix(item.q), 300);
}
function verifVf(btn, juste){
  if(verrou) return;
  verrou = true;
  btn.classList.add(juste?'bon':'mauvais');
  if(juste){ vfBonnes++; gagnerPoints(15); verifierBadges(); }
  vfIdx++;
  setTimeout(()=> vfIdx>=10 ? finVfBlitz() : afficherVf(), 900);
}
function finVfBlitz(){
  const z = document.getElementById('zoneVf');
  let msg = vfBonnes>=9 ? '🏆 Excellent blitz !' : vfBonnes>=7 ? '🌟 Très bon score !' : vfBonnes>=5 ? '✅ Pas mal du tout !' : '💪 Entraîne-toi encore un peu !';
  if(vfBonnes>=7) confettis();
  z.innerHTML = `<div class="resultat">${msg}<span class="note-geante">${vfBonnes}/10</span>
    <button class="btn or" onclick="demarrerVfBlitz()">🔄 Refaire un blitz</button></div>`;
}

/* ---------- ACTIVITÉ : CRYPTOGRAPHIE (chiffre de César) ---------- */
function decalerTexte(txt, d){
  d = ((d % 26) + 26) % 26;
  return txt.split('').map(c=>{
    const code = c.charCodeAt(0);
    if(code>=65 && code<=90) return String.fromCharCode(((code-65+d)%26)+65);
    return c;
  }).join('');
}
let cryptoItem = null, cryptoEssai = 0;
function vueCrypto(c, fil, mod){
  c.innerHTML = fil + `
  <p class="sous">Ce message est codé avec un « chiffre de César » : chaque lettre est décalée dans l'alphabet.
  Décale jusqu'à retrouver le message d'origine !</p>
  <div class="question-boite" id="cryptoCode" style="letter-spacing:.15em; font-family:monospace;"></div>
  <div class="centre" style="margin:10px 0;">
    <button class="btn" onclick="decalerCrypto(-1)">◀ Décaler</button>
    <span style="font-weight:700; font-size:18px; margin:0 12px;" id="cryptoEssaiTxt">Décalage : 0</span>
    <button class="btn" onclick="decalerCrypto(1)">Décaler ▶</button>
  </div>
  <div class="texte-boite" id="cryptoApercu" style="font-family:monospace; letter-spacing:.1em;"></div>
  <div class="barre-actions">
    <button class="btn or" onclick="validerCrypto()">✅ C'est décodé !</button>
    <button class="btn violet" onclick="questionCrypto()">🔄 Un autre message</button>
  </div>
  <div class="score-ligne" id="qScore"></div>`;
  questionCrypto();
}
function questionCrypto(){
  verrou = false;
  const pool = CRYPTO_PHRASES[modActuel.ref];
  cryptoItem = pool[Math.floor(Math.random()*pool.length)];
  cryptoEssai = 0;
  document.getElementById('cryptoCode').textContent = decalerTexte(cryptoItem.phrase, cryptoItem.shift);
  majApercuCrypto();
}
function decalerCrypto(sens){
  cryptoEssai = ((cryptoEssai + sens) % 26 + 26) % 26;
  majApercuCrypto();
}
function majApercuCrypto(){
  document.getElementById('cryptoEssaiTxt').textContent = `Décalage : ${cryptoEssai}`;
  const code = decalerTexte(cryptoItem.phrase, cryptoItem.shift);
  document.getElementById('cryptoApercu').textContent = decalerTexte(code, -cryptoEssai);
}
function validerCrypto(){
  if(verrou) return;
  if(cryptoEssai === cryptoItem.shift){
    verrou = true;
    reussiteActivite('Message décodé : ' + cryptoItem.phrase.toLowerCase());
    setTimeout(questionCrypto, 2400);
  }else{
    erreurActivite();
    lireVoix("Ce n'est pas encore le bon décalage, continue \u00e0 chercher.");
  }
}

/* ---------- ACTIVITÉ : MOTS MÊLÉS ---------- */
let mmGrille = [], mmTaille = 0, mmMotsRestants = [], mmSelection = [];
function genererGrilleMots(mots, taille){
  const grille = Array.from({length:taille}, ()=>Array(taille).fill(null));
  const places = [];
  for(const mot of mots){
    let ok = false, tentative = 0;
    while(!ok && tentative<300){
      tentative++;
      const horizontal = Math.random()<0.5;
      const longueur = mot.length;
      if(longueur > taille) break;
      const ligne = Math.floor(Math.random()*taille);
      const colMax = horizontal ? taille-longueur : taille-1;
      const ligneMax = horizontal ? taille-1 : taille-longueur;
      const l0 = horizontal ? ligne : Math.floor(Math.random()*(ligneMax+1));
      const c0 = horizontal ? Math.floor(Math.random()*(colMax+1)) : ligne;
      let conflit = false;
      for(let i=0;i<longueur;i++){
        const li = horizontal ? l0 : l0+i, ci = horizontal ? c0+i : c0;
        const existant = grille[li][ci];
        if(existant && existant !== mot[i]){ conflit = true; break; }
      }
      if(conflit) continue;
      for(let i=0;i<longueur;i++){
        const li = horizontal ? l0 : l0+i, ci = horizontal ? c0+i : c0;
        grille[li][ci] = mot[i];
      }
      places.push(mot);
      ok = true;
    }
  }
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for(let i=0;i<taille;i++) for(let j=0;j<taille;j++)
    if(!grille[i][j]) grille[i][j] = alphabet[Math.floor(Math.random()*alphabet.length)];
  return {grille, places};
}
function vueMotsMeles(c, fil, mod){
  c.innerHTML = fil + `
  <p class="sous">Touche la première puis la dernière lettre d'un mot caché (en ligne ou en colonne).</p>
  <div id="mmMotsListe" style="text-align:center; margin-bottom:10px; font-weight:700;"></div>
  <div class="grille-mm" id="grilleMM"></div>
  <div class="barre-actions">
    <button class="btn discret" onclick="effacerSelectionMM()">✋ Annuler la sélection</button>
    <button class="btn violet" onclick="questionMotsMeles()">🔄 Une autre grille</button>
  </div>
  <div class="score-ligne" id="qScore"></div>`;
  questionMotsMeles();
}
function questionMotsMeles(){
  verrou = false;
  const pool = MOTSMELES[modActuel.ref];
  const choix = pool[Math.floor(Math.random()*pool.length)];
  const plusLong = Math.max(...choix.mots.map(m=>m.length));
  mmTaille = Math.max(9, plusLong+2);
  let res = genererGrilleMots(choix.mots, mmTaille);
  let garde=0;
  while(res.places.length < choix.mots.length && garde<5){ res = genererGrilleMots(choix.mots, mmTaille); garde++; }
  mmGrille = res.grille;
  mmMotsRestants = [...res.places];
  mmSelection = [];
  dessinerMM();
  majListeMM();
}
function majListeMM(){
  document.getElementById('mmMotsListe').innerHTML = mmMotsRestants.map(m=>`<span style="margin:0 6px;">${m}</span>`).join('') || '🎉 Tous les mots trouvés !';
}
function dessinerMM(){
  const g = document.getElementById('grilleMM');
  g.innerHTML = '';
  g.style.gridTemplateColumns = `repeat(${mmTaille}, 1fr)`;
  for(let i=0;i<mmTaille;i++) for(let j=0;j<mmTaille;j++){
    const b = document.createElement('button');
    b.className = 'case-mm';
    b.textContent = mmGrille[i][j];
    b.dataset.l = i; b.dataset.c = j;
    b.onclick = ()=>clicMM(b, i, j);
    g.appendChild(b);
  }
}
function clicMM(btn, l, c){
  if(mmSelection.length===0){
    mmSelection = [{l,c,btn}];
    btn.classList.add('selectionnee');
    return;
  }
  const premiere = mmSelection[0];
  mmSelection = [premiere, {l,c,btn}];
  document.querySelectorAll('.case-mm.selectionnee').forEach(e=>e.classList.remove('selectionnee'));
  let cellules = [];
  if(premiere.l === l){
    const [cMin,cMax] = [Math.min(premiere.c,c), Math.max(premiere.c,c)];
    for(let x=cMin;x<=cMax;x++) cellules.push({l, c:x});
  }else if(premiere.c === c){
    const [lMin,lMax] = [Math.min(premiere.l,l), Math.max(premiere.l,l)];
    for(let x=lMin;x<=lMax;x++) cellules.push({l:x, c});
  }else{
    mmSelection = [{l,c,btn}];
    btn.classList.add('selectionnee');
    return;
  }
  const mot = cellules.map(p=>mmGrille[p.l][p.c]).join('');
  const motInverse = mot.split('').reverse().join('');
  const trouve = mmMotsRestants.find(m=>m===mot || m===motInverse);
  if(trouve){
    cellules.forEach(p=>{
      const el = document.querySelector(`.case-mm[data-l='${p.l}'][data-c='${p.c}']`);
      if(el){ el.classList.add('trouvee'); el.classList.remove('selectionnee'); }
    });
    mmMotsRestants = mmMotsRestants.filter(m=>m!==trouve);
    majListeMM();
    reussiteActivite();
    lireVoix(trouve.toLowerCase(), (modActuel && modActuel.langue) || 'fr');
    if(mmMotsRestants.length===0){
      lireVoix('Bravo, tous les mots sont trouvés !');
      setTimeout(questionMotsMeles, 2200);
    }
  }else{
    cellules.forEach(p=>{
      const el = document.querySelector(`.case-mm[data-l='${p.l}'][data-c='${p.c}']`);
      if(el) el.classList.add('selectionnee');
    });
    setTimeout(()=>{
      document.querySelectorAll('.case-mm.selectionnee').forEach(e=>e.classList.remove('selectionnee'));
    }, 500);
  }
  mmSelection = [];
}
function effacerSelectionMM(){
  document.querySelectorAll('.case-mm.selectionnee').forEach(e=>e.classList.remove('selectionnee'));
  mmSelection = [];
}

/* ---------- ACTIVITÉ : CARTE INTERACTIVE ---------- */
let carteActuelle = null, carteCible = null, carteRestants = [];
function vueCarte(c, fil, mod){
  const carte = CARTES[mod.ref];
  carteActuelle = carte;
  c.innerHTML = fil + `
  <p class="sous">${carte.note}</p>
  <div class="question-boite centre" id="carteConsigne"></div>
  <div class="grille-carte" id="grilleCarte"></div>
  <div class="score-ligne" id="qScore"></div>`;
  carteRestants = melanger(carte.lieux.map((_,i)=>i));
  dessinerCarte();
  questionCarte();
}
function dessinerCarte(){
  const g = document.getElementById('grilleCarte');
  g.innerHTML = '';
  carteActuelle.lieux.forEach((lieu, i)=>{
    const b = document.createElement('button');
    b.className = 'zone-carte';
    b.style.gridArea = lieu.zone;
    b.textContent = lieu.nom;
    b.onclick = ()=>verifCarte(b, i);
    g.appendChild(b);
  });
}
function questionCarte(){
  verrou = false;
  if(!carteRestants.length) carteRestants = melanger(carteActuelle.lieux.map((_,i)=>i));
  carteCible = carteRestants.pop();
  document.getElementById('carteConsigne').textContent = `Touche : ${carteActuelle.lieux[carteCible].nom}`;
  document.querySelectorAll('.zone-carte').forEach(e=>e.classList.remove('bon','mauvais'));
}
function verifCarte(btn, i){
  if(verrou) return;
  if(i === carteCible){
    verrou = true;
    btn.classList.add('bon');
    reussiteActivite();
    setTimeout(questionCarte, 1000);
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
    ${modeDys ? '<button class="btn discret" id="btnPhrase" onclick="basculerPhraseParPhrase()">📑 Phrase par phrase : OFF</button>' : ''}
    ${modeDys && ReconnaissanceVocale ? '<button class="btn or" id="btnMicro" onclick="ecouterReponse()">🎤 Répondre \u00e0 l\u2019oral</button>' : ''}
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
  }else if(phraseParPhrase){
    const ph = phrasesDuTexte();
    el.innerHTML = `<div>${echap(ph[idxPhrase])}</div>
      <div class="barre-actions" style="margin-top:10px;">
        <button class="btn discret" onclick="phraseSuivante(-1)">⏮️</button>
        <span style="align-self:center; font-weight:700;">${idxPhrase+1} / ${ph.length}</span>
        <button class="btn discret" onclick="phraseSuivante(1)">⏭️</button>
      </div>`;
    el.classList.remove('texte-audition');
    btn.style.display = 'none';
  }else{
    el.textContent = texteAssemble || lectureAct.t;
    el.classList.remove('texte-audition');
    btn.style.display = 'none';
  }
}
function revelerTexteAct(){ texteRevele = true; afficherTexteAct(); }
let phraseParPhrase = false, idxPhrase = 0;
function phrasesDuTexte(){ return (texteAssemble || lectureAct.t).split(/(?<=[.!?])\s+/).filter(p=>p.trim()); }
function basculerPhraseParPhrase(){
  phraseParPhrase = !phraseParPhrase;
  idxPhrase = 0;
  const b = document.getElementById('btnPhrase');
  if(b) b.textContent = `📑 Phrase par phrase : ${phraseParPhrase?'ON':'OFF'}`;
  afficherTexteAct();
}
function phraseSuivante(sens){
  const ph = phrasesDuTexte();
  idxPhrase = Math.max(0, Math.min(ph.length-1, idxPhrase + sens));
  afficherTexteAct();
  lireVoix(ph[idxPhrase], modActuel.langue||'fr');
}
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
    ajouterHautParleurOption(b, rep);
    z.appendChild(b);
  });
  if(modeDys) setTimeout(()=>lireVoix(Q.q), 350);
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
    ajouterHautParleurOption(b, o);
    zone.appendChild(b);
  });
  afficherBarrettes(item.q);
  if(modeDys) setTimeout(()=>lireVoix(item.q), 350);
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
  if(duelActif){
    verrou = true;
    arreterChronoQ();
    btn.classList.add(juste?'bon':'mauvais');
    if(juste) duelScores[duelTour]++;
    duelTour = 1 - duelTour;
    majAffichageDuel();
    setTimeout(questionSuivante, 1100);
    return;
  }
  if(juste){
    verrou = true;
    arreterChronoQ();
    btn.classList.add('bon');
    p.etoiles++;
    serie++;
    majMeilleureSerie(serie);
    const niv = nivDe(cleActuelle);
    gagnerPoints((serie>=3 ? 20 : 10) * niv);
    if(serie>0 && serie%5===0) confettis();
    stock.set('progression', progression);
    verifierBonusDefiDuJour();
    verifierBadges();
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
  if(modeDys){
    const el = document.getElementById('chronoExam');
    if(el) el.textContent = '∞';
  }else{
    idChrono = setInterval(()=>{
      tempsRestant--;
      majChrono();
      if(tempsRestant<=0) finEpreuve();
    }, 1000);
    majChrono();
  }
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
    ajouterHautParleurOption(b, o);
    zone.appendChild(b);
  });
  afficherBarrettes(item.q);
  if(modeDys) setTimeout(()=>lireVoix(item.q), 350);
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
  const texteTemps = modeDys ? 'sans chrono (mode dys/TDAH)' : `${m} min ${s<10?'0'+s:s} s`;
  let msg, emoji;
  if(examBonnes>=9){ msg = `Brillant ! Le ${examAnnee.epreuve} n'a qu'à bien se tenir !`; emoji='🏆'; confettis(); }
  else if(examBonnes>=7){ msg = 'Très bon travail, continue comme ça !'; emoji='🌟'; confettis(); }
  else if(examBonnes>=5){ msg = 'Réussi ! Encore un peu d\u2019entraînement pour viser plus haut.'; emoji='✅'; }
  else{ msg = 'Pas encore réussi... mais chaque essai te rapproche du but !'; emoji='💪'; }
  const meilleures = stock.get('epreuves', {});
  const record = Math.max(examBonnes, meilleures[examAnnee.id]||0);
  meilleures[examAnnee.id] = record;
  stock.set('epreuves', meilleures);
  if(examBonnes===10) stock.set('parfait10', true);
  verifierBadges();
  z.innerHTML = `<div class="resultat">${emoji}
    <span class="note-geante">${examBonnes}/10</span>
    ${msg}<br>
    <span style="font-size:14px; color:var(--encre2);">Temps : ${texteTemps} · Record personnel : ${record}/10</span><br><br>
    <button class="btn or" onclick="demarrerEpreuve()">🔄 Refaire une épreuve</button>
  </div>`;
}

/* ========================================================================
   GAMIFICATION TRANSVERSALE : badges, défi du jour, carnet de progression
   ======================================================================== */

/* ---------- Badges ---------- */
const BADGES = [
  {id:'premier_pas', titre:'Premier pas', emoji:'👣', desc:'Réussir sa première question',
   cond:(e)=> e.totalEtoiles>=1},
  {id:'etoiles10', titre:'Petite étoile', emoji:'⭐', desc:'Atteindre 10 bonnes réponses',
   cond:(e)=> e.totalEtoiles>=10},
  {id:'etoiles50', titre:'Étoile montante', emoji:'🌟', desc:'Atteindre 50 bonnes réponses',
   cond:(e)=> e.totalEtoiles>=50},
  {id:'etoiles150', titre:'Grande étoile', emoji:'✨', desc:'Atteindre 150 bonnes réponses',
   cond:(e)=> e.totalEtoiles>=150},
  {id:'etoiles400', titre:'Constellation', emoji:'🌌', desc:'Atteindre 400 bonnes réponses',
   cond:(e)=> e.totalEtoiles>=400},
  {id:'points1000', titre:'Millier', emoji:'🏆', desc:'Atteindre 1000 points',
   cond:(e)=> e.points>=1000},
  {id:'points5000', titre:'Champion', emoji:'🏆', desc:'Atteindre 5000 points',
   cond:(e)=> e.points>=5000},
  {id:'points15000', titre:'Légende', emoji:'👑', desc:'Atteindre 15000 points',
   cond:(e)=> e.points>=15000},
  {id:'collectionneur', titre:'Collectionneur', emoji:'🗂️', desc:'Réussir au moins 1 question dans 10 modules différents',
   cond:(e)=> e.modulesDistincts>=10},
  {id:'explorateur', titre:'Explorateur', emoji:'🧭', desc:'Réussir au moins 1 question dans 30 modules différents',
   cond:(e)=> e.modulesDistincts>=30},
  {id:'polyvalent', titre:'Polyvalent', emoji:'🎓', desc:'Réussir au moins 1 question dans 6 matières différentes',
   cond:(e)=> e.matieresDistinctes>=6},
  {id:'epreuve_ok', titre:'Épreuve réussie', emoji:'📜', desc:'Réussir une épreuve blanche (5/10 ou plus)',
   cond:(e)=> e.meilleureEpreuve>=5},
  {id:'sans_faute', titre:'Sans-faute', emoji:'💯', desc:'Obtenir 10/10 à une épreuve blanche',
   cond:(e)=> e.aUnParfait},
  {id:'assidu', titre:'Assidu', emoji:'📅', desc:'Relever le défi du jour 7 fois',
   cond:(e)=> e.defisFaits>=7},
  {id:'serie5', titre:'Sur une lancée', emoji:'🔥', desc:'Enchaîner 5 bonnes réponses d\u2019affilée',
   cond:(e)=> e.meilleureSerie>=5}
];
function etatGamification(){
  let totalEtoiles=0, modulesDistincts=0, matieresSet=new Set();
  for(const cle in progression){
    const p = progression[cle];
    if(p.etoiles>0){
      totalEtoiles += p.etoiles;
      modulesDistincts++;
      const parts = cle.split('_');
      if(parts.length>=2) matieresSet.add(parts[1]);
    }
  }
  const epreuves = stock.get('epreuves', {});
  const meilleureEpreuve = Object.values(epreuves).reduce((m,v)=>Math.max(m,v),0);
  return {
    points: pointsGlobaux,
    totalEtoiles,
    modulesDistincts,
    matieresDistinctes: matieresSet.size,
    meilleureEpreuve,
    aUnParfait: stock.get('parfait10', false),
    defisFaits: stock.get('defisFaits', 0),
    meilleureSerie: stock.get('meilleureSerie', 0)
  };
}
function verifierBadges(){
  const etat = etatGamification();
  const debloques = stock.get('badges', []);
  let nouveau = null;
  BADGES.forEach(b=>{
    if(!debloques.includes(b.id) && b.cond(etat)){
      debloques.push(b.id);
      nouveau = b;
    }
  });
  if(nouveau){
    stock.set('badges', debloques);
    afficherToastBadge(nouveau);
  }
}
function afficherToastBadge(badge){
  const t = document.createElement('div');
  t.className = 'toast-badge';
  t.innerHTML = `<span style="font-size:28px;">${badge.emoji}</span><div><strong>Nouveau badge !</strong><br>${badge.titre}</div>`;
  document.body.appendChild(t);
  confettis();
  lireVoix('Nouveau badge débloqué : ' + badge.titre);
  setTimeout(()=>t.classList.add('sortie'), 3200);
  setTimeout(()=>t.remove(), 3800);
}
function majMeilleureSerie(s){
  if(s > stock.get('meilleureSerie', 0)) stock.set('meilleureSerie', s);
}

/* ---------- Vue : Mon carnet (badges + progression) ---------- */
function vueCarnet(){
  const c = document.getElementById('contenu');
  const etat = etatGamification();
  const debloques = stock.get('badges', []);
  let html = `<div class="fil"><a href="#/">Accueil</a> › Mon carnet</div>
  <h1>🏅 Mon carnet de progression</h1>
  <div class="resultat" style="text-align:left;">
    <div style="display:flex; justify-content:space-around; text-align:center; flex-wrap:wrap; gap:10px;">
      <div><span class="note-geante" style="font-size:28px;">${etat.points}</span><br>points</div>
      <div><span class="note-geante" style="font-size:28px;">${etat.totalEtoiles}</span><br>bonnes réponses</div>
      <div><span class="note-geante" style="font-size:28px;">${debloques.length}/${BADGES.length}</span><br>badges</div>
    </div>
  </div>
  <div class="groupe-titre">Progression par cycle</div>`;
  ['Maternelle','Primaire','Secondaire'].forEach(groupe=>{
    const anneesGroupe = ANNEES.filter(a=>a.groupe===groupe).map(a=>a.id);
    let etoiles=0;
    for(const cle in progression){
      const an = cle.split('_')[0];
      if(anneesGroupe.includes(an)) etoiles += progression[cle].etoiles;
    }
    const pct = Math.min(100, Math.round(etoiles/2));
    html += `<div style="margin:10px 0;">
      <div style="display:flex; justify-content:space-between; font-weight:700; margin-bottom:4px;"><span>${groupe}</span><span>${etoiles} ⭐</span></div>
      <div style="background:#E9E4D8; border-radius:999px; height:14px; overflow:hidden;">
        <div style="background:var(--accent2); height:100%; width:${pct}%; border-radius:999px;"></div>
      </div>
    </div>`;
  });
  html += `<div class="groupe-titre">Badges</div><div class="grille-cartes">`;
  BADGES.forEach(b=>{
    const ok = debloques.includes(b.id);
    html += `<div class="carte" style="cursor:default; ${ok?'':'opacity:.35; filter:grayscale(1);'}">
      <span class="emoji">${b.emoji}</span>
      <span class="titre">${b.titre}</span>
      <span class="detail">${b.desc}</span>
    </div>`;
  });
  html += `</div>`;
  c.innerHTML = html;
}

/* ---------- Défi du jour ---------- */
function cleJourDefi(){
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
}
function moduleDuJour(){
  const tousLesModules = [];
  for(const annee in PROGRAMME) for(const matiere in PROGRAMME[annee]) for(const mod of PROGRAMME[annee][matiere]){
    if(mod.type==='banque' || mod.type==='gen') tousLesModules.push({annee, matiere, mod});
  }
  if(!tousLesModules.length) return null;
  const seed = cleJourDefi().split('').reduce((h,c)=>h + c.charCodeAt(0), 0);
  return tousLesModules[seed % tousLesModules.length];
}
function carteDefiDuJourHTML(){
  const d = moduleDuJour();
  if(!d) return '';
  const fait = stock.get('defiBonusDate', '') === cleJourDefi();
  return `<a class="carte epreuve" href="#/module/${d.annee}/${encodeURIComponent(d.matiere)}/${d.mod.id}" style="display:block; margin-bottom:16px;">
    <span class="emoji">${d.mod.emoji}</span>
    <span class="titre">🎯 Défi du jour : ${d.mod.titre}</span>
    <span class="detail">${d.annee} · ${d.matiere}${fait ? ' · ✅ déjà relevé aujourd\u2019hui' : ' · +50 points bonus'}</span>
  </a>`;
}
function verifierBonusDefiDuJour(){
  const d = moduleDuJour();
  if(!d) return;
  const cleModule = `${d.annee}_${d.matiere}_${d.mod.id}`;
  if(cleModule !== cleActuelle) return;
  if(stock.get('defiBonusDate','') === cleJourDefi()) return;
  stock.set('defiBonusDate', cleJourDefi());
  stock.set('defisFaits', stock.get('defisFaits',0)+1);
  gagnerPoints(50);
  lireVoix('Bravo, défi du jour relevé ! Cinquante points bonus.');
}

/* ---------- Duel généralisé (2 joueurs, même appareil) ---------- */
let duelActif = false, duelScores = [0,0], duelTour = 0;
function toggleDuel(){
  duelActif = !duelActif;
  duelScores = [0,0]; duelTour = 0;
  majAffichageDuel();
  questionSuivante();
}
function majAffichageDuel(){
  const z = document.getElementById('duelZone');
  if(!z) return;
  if(!duelActif){ z.innerHTML=''; return; }
  z.innerHTML = `<div class="score-ligne">🤺 Joueur 1 : ${duelScores[0]} ⭐ &nbsp;|&nbsp; Joueur 2 : ${duelScores[1]} ⭐ &nbsp;—&nbsp; Au tour du <strong>Joueur ${duelTour+1}</strong></div>`;
}

/* ---------- Démarrage ---------- */
majPointsAffiches();
appliquerModeDys();
router();
