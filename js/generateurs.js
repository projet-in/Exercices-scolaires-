/* ============================================================
   GÉNÉRATEURS D'EXERCICES — École+
   Chaque générateur reçoit des paramètres et renvoie
   {q, opts, bonne} : question, options mélangées, bonne réponse.
   ============================================================ */

function alea(min, max){ return min + Math.floor(Math.random()*(max-min+1)); }
function melanger(a){ return [...a].sort(()=>Math.random()-.5); }
function optionsNum(bon, ecart, fmt){
  fmt = fmt || (x=>String(x));
  const opts = new Set([bon]);
  let garde = 0;
  while(opts.size<3 && garde<400){
    garde++;
    const o = bon + alea(1, Math.max(1,ecart)) * (Math.random()<0.5?-1:1);
    opts.add(o);
  }
  return melanger([...opts].map(fmt));
}
function fmtDecC(centiemes){
  const neg = centiemes<0 ? '−' : '';
  const v = Math.abs(centiemes);
  const e = Math.floor(v/100), c = v%100;
  return c===0 ? neg+e : `${neg}${e},${c<10?'0'+c:c}`;
}

const GENERATEURS = {

  /* Compter des objets (maternelle / P1) */
  compter(p){
    const max = p.max || 8;
    const n = alea(1, max);
    const emoji = ['🐥','🍓','⭐','🐸','🎈','🐟','🦋','🍪'][alea(0,7)];
    return {q:`Combien y en a-t-il ?\n${emoji.repeat(n)}`, opts:optionsNum(n, 2).filter((v,i,a)=>a.indexOf(v)===i), bonne:String(n)};
  },

  /* Calcul : + − × ÷ avec plafond */
  calc(p){
    const ops = p.ops || ['+','-'];
    const max = p.max || 20;
    const op = ops[alea(0, ops.length-1)];
    let a, b, bon, q;
    if(op==='+'){ a=alea(Math.min(2,max-2), max-2); b=alea(1, max-a); bon=a+b; q=`${a} + ${b} = ?`; }
    else if(op==='-'){ a=alea(Math.min(5,max), max); b=alea(1, a-1); bon=a-b; q=`${a} − ${b} = ?`; }
    else if(op==='×'){ const t=alea(2, p.tmax||9), f=alea(2, p.fmax||10); a=t; b=f; bon=t*f; q=`${t} × ${f} = ?`; }
    else { const d=alea(2, p.dmax||9), r=alea(2, p.rmax||9); bon=r; q=`${d*r} ÷ ${d} = ?`; }
    const ecart = op==='×' ? Math.max(3, Math.floor(bon/4)) : Math.max(2, Math.floor(max/12));
    return {q, opts:optionsNum(bon, ecart), bonne:String(bon)};
  },

  /* Tables de multiplication ciblées */
  tables(p){
    const t = p.tables[alea(0, p.tables.length-1)];
    const f = alea(1, p.fmax || 10);
    const bon = t*f;
    return {q:`${t} × ${f} = ?`, opts:optionsNum(bon, Math.max(3, t)), bonne:String(bon)};
  },

  /* Priorités des opérations */
  priorites(p){
    const par = p.parentheses && Math.random()<0.5;
    const a=alea(1,9), b=alea(2,9), c=alea(2,9);
    if(par){
      const bon=(a+b)*c;
      return {q:`(${a} + ${b}) × ${c} = ?`, opts:optionsNum(bon, 10), bonne:String(bon)};
    }
    const bon=a+b*c;
    const opts = new Set([bon]);
    opts.add((a+b)*c);                      /* le piège classique : ignorer la priorité */
    let garde=0;
    while(opts.size<3 && garde<50){ garde++; opts.add(bon + alea(2,8)*(Math.random()<0.5?-1:1)); }
    return {q:`${a} + ${b} × ${c} = ?`, opts:melanger([...opts].map(String)), bonne:String(bon)};
  },

  /* Fraction d'un nombre */
  fractionDe(p){
    const dens = p.dens || [2,3,4];
    const d = dens[alea(0, dens.length-1)];
    const num = alea(1, d-1);
    const x = d * alea(2, p.mult || 8);
    const bon = x/d*num;
    return {q:`${num}/${d} de ${x} = ?`, opts:optionsNum(bon, Math.max(3, Math.floor(bon/3))), bonne:String(bon)};
  },

  /* Fractions équivalentes */
  equivFractions(){
    const a=alea(1,4), b=a+alea(1,4), k=alea(2,4);
    const bon=a*k;
    return {q:`${a}/${b} = ?/${b*k}`, opts:optionsNum(bon,3), bonne:String(bon)};
  },

  /* Addition de fractions (même dénominateur) */
  addFractions(){
    const d=[4,5,6,8,10][alea(0,4)];
    const a=alea(1, d-2), b=alea(1, d-a-1);
    const bon=`${a+b}/${d}`;
    const opts = new Set([bon]);
    opts.add(`${a+b}/${d*2}`);              /* piège : additionner les dénominateurs */
    opts.add(`${a*b===a+b ? a+b+1 : a*b}/${d}`);
    let garde=0;
    while(opts.size<3 && garde<20){ garde++; opts.add(`${a+b+alea(1,3)}/${d}`); }
    return {q:`${a}/${d} + ${b}/${d} = ?`, opts:melanger([...opts].slice(0,3)), bonne:bon};
  },

  /* Pourcentage d'un nombre */
  pourcentDe(p){
    const pcts = p.pcts || [10,25,50];
    const pc = pcts[alea(0, pcts.length-1)];
    const bases = p.bases || [40,60,80,120,200];
    const x = bases[alea(0, bases.length-1)];
    const bon = x*pc/100;
    return {q:`${pc} % de ${x} = ?`, opts:optionsNum(bon, Math.max(3, Math.floor(bon/4))), bonne:String(bon)};
  },

  /* Conversions d'unités */
  conversions(p){
    const types = p.types || ['longueur','masse'];
    const t = types[alea(0, types.length-1)];
    if(t==='longueur'){
      const modes=[['m','cm',100],['km','m',1000],['cm','mm',10]];
      const [u1,u2,f]=modes[alea(0, p.simple?0:modes.length-1)];
      const a=alea(2,9);
      return {q:`${a} ${u1} = ? ${u2}`, opts:optionsNum(a*f, f), bonne:String(a*f)};
    }
    if(t==='masse'){
      const a=alea(2,9);
      return {q:`${a} kg = ? g`, opts:optionsNum(a*1000, 1200), bonne:String(a*1000)};
    }
    if(t==='capacite'){
      const a=alea(2,9);
      return {q:`${a} l = ? ml`, opts:optionsNum(a*1000, 1200), bonne:String(a*1000)};
    }
    /* durées */
    const h=alea(1,3), m=[15,30,45][alea(0,2)];
    const bon=h*60+m;
    return {q:`${h} h ${m} min = ? min`, opts:optionsNum(bon, 20), bonne:String(bon)};
  },

  /* Périmètre / aire */
  perimetreAire(p){
    const a=alea(4,15), b=alea(3,12);
    if((p.mode==='mixte' && Math.random()<0.5) || p.mode==='perimetre'){
      const bon=2*(a+b);
      return {q:`Périmètre d'un rectangle de ${a} m sur ${b} m = ?`, opts:optionsNum(bon,6,v=>v+' m'), bonne:2*(a+b)+' m'};
    }
    const bon=a*b;
    return {q:`Aire d'un rectangle de ${a} m sur ${b} m = ?`, opts:optionsNum(bon,10,v=>v+' m²'), bonne:bon+' m²'};
  },

  /* Nombres relatifs (S1) */
  relatifs(p){
    const max = p.max || 12;
    const a = alea(-max, max), b = alea(-max, max);
    const bon = a+b;
    const fa = a<0?`(${a})`:a, fb = b<0?`(${b})`:b;
    return {q:`${fa} + ${fb} = ?`, opts:optionsNum(bon, 5), bonne:String(bon)};
  },

  /* Équations simples */
  equations(p){
    const forme = p.forme || 'x+a=b';
    if(forme==='x+a=b'){
      const x=alea(2,20), a=alea(2,15);
      return {q:`x + ${a} = ${x+a}   →   x = ?`, opts:optionsNum(x,4), bonne:String(x)};
    }
    if(forme==='ax=b'){
      const x=alea(2,12), a=alea(2,9);
      return {q:`${a}x = ${a*x}   →   x = ?`, opts:optionsNum(x,3), bonne:String(x)};
    }
    /* ax+b=c */
    const x=alea(2,12), a=alea(2,9), b=alea(1,15);
    return {q:`${a}x + ${b} = ${a*x+b}   →   x = ?`, opts:optionsNum(x,3), bonne:String(x)};
  },

  /* Puissances */
  puissances(p){
    const b=alea(2, p.bmax||10), e=alea(2, p.emax||3);
    const bon=Math.pow(b,e);
    return {q:`${b}${e===2?'²':e===3?'³':'^'+e} = ?`, opts:optionsNum(bon, Math.max(4, Math.floor(bon/5))), bonne:String(bon)};
  },

  /* Notation scientifique */
  notationSci(){
    const a=alea(1,9), n=alea(2,5);
    const val=a*Math.pow(10,n);
    const bon=`${a} × 10^${n}`;
    const faux1=`${a} × 10^${n+1}`, faux2=`${a*10} × 10^${n}`;
    return {q:`Écris ${val.toLocaleString('fr-BE')} en notation scientifique :`, opts:melanger([bon,faux1,faux2]), bonne:bon};
  },

  /* Moyenne arithmétique */
  moyenne(){
    const m=alea(8,16);
    const d1=alea(1,4), d2=alea(1,4);
    const vals=[m-d1, m, m+d1, m-d2, m+d2];
    const liste=melanger(vals).slice(0,3);
    /* garantir moyenne entière : reprendre trio symétrique */
    const trio=[m-d1, m, m+d1];
    return {q:`Quelle est la moyenne de ${trio.join(', ')} ?`, opts:optionsNum(m,3), bonne:String(m)};
  },

  /* Racine / second degré simple */
  secondDegreSimple(){
    const x=alea(3,12);
    return {q:`x² = ${x*x} et x > 0   →   x = ?`, opts:optionsNum(x,3), bonne:String(x)};
  },

  /* Évaluer une fonction f(x) = ax + b */
  fonctionEval(){
    const a=alea(2,6), b=alea(-8,8), x=alea(1,9);
    const bon=a*x+b;
    const fb = b===0 ? '' : (b>0 ? ` + ${b}` : ` − ${-b}`);
    return {q:`f(x) = ${a}x${fb}.   Que vaut f(${x}) ?`, opts:optionsNum(bon, 5), bonne:String(bon)};
  },

  /* Probabilités simples (dé, cartes) */
  probaSimple(){
    const modes=[
      {q:"On lance un dé à 6 faces. P(obtenir un 6) = ?", b:"1/6", a:["1/2","6/6"]},
      {q:"On lance un dé à 6 faces. P(obtenir un nombre pair) = ?", b:"1/2", a:["1/3","2/6"]},
      {q:"On lance un dé à 6 faces. P(obtenir plus de 4) = ?", b:"1/3", a:["1/2","2/3"]},
      {q:"On tire une carte dans un jeu de 52 cartes. P(obtenir un cœur) = ?", b:"1/4", a:["1/13","1/52"]},
      {q:"On lance une pièce. P(obtenir face) = ?", b:"1/2", a:["1/4","1"]}
    ];
    const m=modes[alea(0,modes.length-1)];
    return {q:m.q, opts:melanger([m.b, ...m.a]), bonne:m.b};
  }
};
