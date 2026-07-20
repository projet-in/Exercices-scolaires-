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
function lireVoix(texte){
  try{
    speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(texte);
    u.lang='fr-FR';
    const v=speechSynthesis.getVoices().find(x=>x.lang.startsWith('fr'));
    if(v) u.voice=v;
    speechSynthesis.speak(u);
  }catch(e){}
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
    do{
      garde++;
      item = GENERATEURS[mod.ref](mod.params||{});
    }while(memoire.includes(item.q) && garde<30);
    memoire.push(item.q);
    if(memoire.length>25) memoire.shift();
    return item;
  }
  const banque = BANQUES[mod.ref];
  if(!paquets[cleModule] || !paquets[cleModule].length){
    paquets[cleModule] = melanger(banque.map((_,i)=>i));
  }
  const idx = paquets[cleModule].pop();
  const brut = banque[idx];
  return {q:brut.q, opts:melanger([brut.b, ...brut.a]), bonne:brut.b, fin:paquets[cleModule].length===0};
}

/* ---------- Routage ---------- */
function router(){
  const hash = location.hash || '#/';
  const parts = hash.slice(2).split('/').filter(Boolean).map(decodeURIComponent);
  speechSynthesis.cancel();
  arreterChrono();
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
        <span class="detail">${m.type==='gen' ? 'Questions illimitées' : (BANQUES[m.ref]?.length || 0)+' questions'}</span>
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
  c.innerHTML = `<div class="fil"><a href="#/">Accueil</a> › <a href="#/annee/${idAnnee}">${annee.nom}</a> › ${mod.titre}</div>
  <h1>${mod.emoji} ${mod.titre}</h1>
  <div class="question-boite" id="qBoite"></div>
  <div class="choix court" id="qChoix"></div>
  <div class="barre-actions">
    <button class="btn discret" onclick="lireQuestion()">🔊 Lire la question</button>
    <button class="btn violet" onclick="questionSuivante()">🔄 Autre question</button>
  </div>
  <div class="score-ligne" id="qScore"></div>`;
  questionSuivante();
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
    btn.classList.add('bon');
    p.etoiles++;
    serie++;
    gagnerPoints(serie>=3 ? 20 : 10);
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
  for(const matiere in prog) prog[matiere].forEach(m=>examModules.push(m));
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
