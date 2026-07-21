/* ============================================================
   CATALOGUE — École+
   années → matières → modules.
   Types : banque | gen | couleurs | cris | mot | phraseordre | lecture
   Les langues (P5 → rhéto) suivent le même gabarit :
   vocabulaire · écris le mot · construis la phrase · lecture-audition,
   en anglais ET en néerlandais.
   ============================================================ */

const ANNEES = [
  {id:'M1', nom:'1re maternelle', groupe:'Maternelle', emoji:'🧸'},
  {id:'M2', nom:'2e maternelle', groupe:'Maternelle', emoji:'🎨'},
  {id:'M3', nom:'3e maternelle', groupe:'Maternelle', emoji:'✂️'},
  {id:'P1', nom:'1re primaire', groupe:'Primaire', emoji:'📗'},
  {id:'P2', nom:'2e primaire', groupe:'Primaire', emoji:'📘'},
  {id:'P3', nom:'3e primaire', groupe:'Primaire', emoji:'📙'},
  {id:'P4', nom:'4e primaire', groupe:'Primaire', emoji:'📕'},
  {id:'P5', nom:'5e primaire', groupe:'Primaire', emoji:'📓'},
  {id:'P6', nom:'6e primaire', groupe:'Primaire', emoji:'🎯', epreuve:'CEB'},
  {id:'S1', nom:'1re secondaire', groupe:'Secondaire', emoji:'🧭'},
  {id:'S2', nom:'2e secondaire', groupe:'Secondaire', emoji:'🧪', epreuve:'CE1D'},
  {id:'S3', nom:'3e secondaire', groupe:'Secondaire', emoji:'⚗️'},
  {id:'S4', nom:'4e secondaire', groupe:'Secondaire', emoji:'📊', epreuve:'CE2D'},
  {id:'S5', nom:'5e secondaire', groupe:'Secondaire', emoji:'📚'},
  {id:'S6', nom:'Rhétorique (6e secondaire)', groupe:'Secondaire', emoji:'🎓', epreuve:'CESS'}
];

/* Gabarit uniforme des langues modernes */
function blocLangues(vE, vN, motE, motN, phrE, phrN, lecE, lecN){
  return [
    {id:'en_vocab', titre:'Anglais : vocabulaire (25 mots)', emoji:'🇬🇧', type:'gen', ref:'vocab', params:{liste:vE}},
    {id:'en_ecrire', titre:'Anglais : \u00e9cris le mot', emoji:'✏️', type:'mot', ref:motE, langue:'en'},
    {id:'en_phrases', titre:'Anglais : construis la phrase', emoji:'🧩', type:'phraseordre', ref:phrE, langue:'en'},
    {id:'en_lecture', titre:'Anglais : lecture et audition', emoji:'📖🎧', type:'lecture', ref:lecE, langue:'en'},
    {id:'nl_vocab', titre:'N\u00e9erlandais : vocabulaire (25 mots)', emoji:'🇳🇱', type:'gen', ref:'vocab', params:{liste:vN}},
    {id:'nl_ecrire', titre:'N\u00e9erlandais : \u00e9cris le mot', emoji:'✏️', type:'mot', ref:motN, langue:'nl'},
    {id:'nl_phrases', titre:'N\u00e9erlandais : construis la phrase', emoji:'🧩', type:'phraseordre', ref:phrN, langue:'nl'},
    {id:'nl_lecture', titre:'N\u00e9erlandais : lecture et audition', emoji:'📖🎧', type:'lecture', ref:lecN, langue:'nl'}
  ];
}

const PROGRAMME = {

M1:{
  'Jeux':[
    {id:'couleurs', titre:'Les couleurs', emoji:'🎨', type:'couleurs'},
    {id:'cris', titre:'Le cri des animaux', emoji:'🐮', type:'cris'}
  ],
  'Découvertes':[
    {id:'compter3', titre:'Compter jusqu\u2019\u00e0 3', emoji:'🐥', type:'gen', ref:'compter', params:{max:3}, niveaux:[{max:3},{max:5},{max:8},{max:10},{max:12}]},
    {id:'couleursqcm', titre:'Quiz des couleurs', emoji:'🌈', type:'banque', ref:'mat_couleurs'}
  ]
},
M2:{
  'Jeux':[
    {id:'couleurs', titre:'Les couleurs', emoji:'🎨', type:'couleurs'},
    {id:'cris', titre:'Le cri des animaux', emoji:'🐮', type:'cris'}
  ],
  'Découvertes':[
    {id:'compter5', titre:'Compter jusqu\u2019\u00e0 5', emoji:'🐥', type:'gen', ref:'compter', params:{max:5}, niveaux:[{max:5},{max:8},{max:12},{max:15},{max:18}]},
    {id:'lettres', titre:'Les premi\u00e8res lettres', emoji:'🔤', type:'banque', ref:'mat_lettres'},
    {id:'couleursqcm', titre:'Quiz des couleurs', emoji:'🌈', type:'banque', ref:'mat_couleurs'}
  ]
},
M3:{
  'Jeux':[
    {id:'couleurs', titre:'Les couleurs', emoji:'🎨', type:'couleurs'},
    {id:'cris', titre:'Le cri des animaux', emoji:'🐮', type:'cris'},
    {id:'mots', titre:'\u00c9cris tes premiers mots', emoji:'✏️', type:'mot', ref:'fr1', langue:'fr'}
  ],
  'Découvertes':[
    {id:'compter10', titre:'Compter jusqu\u2019\u00e0 10', emoji:'🔟', type:'gen', ref:'compter', params:{max:10}, niveaux:[{max:6},{max:10},{max:15},{max:18},{max:20}]},
    {id:'lettres', titre:'Les lettres', emoji:'🔤', type:'banque', ref:'mat_lettres'},
    {id:'petitscalculs', titre:'Petites additions', emoji:'➕', type:'gen', ref:'calc', params:{ops:['+'], max:6}, niveaux:[{ops:['+'], max:6},{ops:['+'], max:10},{ops:['+','-'], max:10},{ops:['+','-'], max:20},{ops:['+','-'], max:30}]}
  ]
},

P1:{
  'Mathématiques':[
    {id:'add20', titre:'Additions jusqu\u2019\u00e0 20', emoji:'➕', type:'gen', ref:'calc', params:{ops:['+'], max:20}, niveaux:[{ops:['+'], max:10},{ops:['+'], max:20},{ops:['+'], max:50},{ops:['+'], max:100},{ops:['+'], max:200}]},
    {id:'sous20', titre:'Soustractions jusqu\u2019\u00e0 20', emoji:'➖', type:'gen', ref:'calc', params:{ops:['-'], max:20}, niveaux:[{ops:['-'], max:10},{ops:['-'], max:20},{ops:['-'], max:50},{ops:['-'], max:100},{ops:['-'], max:200}]},
    {id:'compter', titre:'Compter des objets', emoji:'🐥', type:'gen', ref:'compter', params:{max:12}, niveaux:[{max:8},{max:12},{max:18},{max:20},{max:20}]}
  ],
  'Français':[
    {id:'mots', titre:'Lire les premiers mots', emoji:'📖', type:'banque', ref:'p1_mots'},
    {id:'sons', titre:'J\u2019entends les sons', emoji:'👂', type:'banque', ref:'p1_sons'},
    {id:'ecrire', titre:'\u00c9cris le mot', emoji:'✏️', type:'mot', ref:'fr1', langue:'fr'},
    {id:'phrases', titre:'Remets la phrase en ordre', emoji:'🧩', type:'phraseordre', ref:'fr1', langue:'fr'},
    {id:'lecture', titre:'Je lis et j\u2019\u00e9coute', emoji:'📖🎧', type:'lecture', ref:'fr1', langue:'fr'},
    {id:'trous', titre:'Texte \u00e0 trous', emoji:'🧩', type:'trous', ref:'trous_fr1', langue:'fr'}
  ],
  'Éveil':[
    {id:'eveil', titre:'\u00c9veil et d\u00e9couvertes', emoji:'🌍', type:'banque', ref:'p1_eveil'}
  ]
},
P2:{
  'Mathématiques':[
    {id:'add100', titre:'Additions jusqu\u2019\u00e0 100', emoji:'➕', type:'gen', ref:'calc', params:{ops:['+'], max:100}, niveaux:[{ops:['+'], max:50},{ops:['+'], max:100},{ops:['+'], max:200},{ops:['+'], max:500},{ops:['+'], max:1000}]},
    {id:'sous100', titre:'Soustractions jusqu\u2019\u00e0 100', emoji:'➖', type:'gen', ref:'calc', params:{ops:['-'], max:100}, niveaux:[{ops:['-'], max:50},{ops:['-'], max:100},{ops:['-'], max:200},{ops:['-'], max:500},{ops:['-'], max:1000}]},
    {id:'tables', titre:'Tables ×2 ×5 ×10', emoji:'✖️', type:'gen', ref:'tables', params:{tables:[2,5,10]}, niveaux:[{tables:[2,5,10], fmax:5},{tables:[2,5,10]},{tables:[2,3,4,5,10]},{tables:[2,3,4,5,6,10]},{tables:[2,3,4,5,6,7,10], fmax:12}]}
  ],
  'Français':[
    {id:'ortho', titre:'Bien \u00e9crire les mots', emoji:'✏️', type:'banque', ref:'p2_ortho'},
    {id:'contraires', titre:'Les contraires', emoji:'🔄', type:'banque', ref:'p2_contraires'},
    {id:'ecrire', titre:'\u00c9cris le mot', emoji:'✏️', type:'mot', ref:'fr2', langue:'fr'},
    {id:'phrases', titre:'Remets la phrase en ordre', emoji:'🧩', type:'phraseordre', ref:'fr2', langue:'fr'},
    {id:'lecture', titre:'Lecture et audition', emoji:'📖🎧', type:'lecture', ref:'fr2', langue:'fr'},
    {id:'trous', titre:'Texte \u00e0 trous', emoji:'🧩', type:'trous', ref:'trous_fr2', langue:'fr'}
  ],
  'Éveil':[
    {id:'eveil', titre:'\u00c9veil et d\u00e9couvertes', emoji:'🌍', type:'banque', ref:'p2_eveil'}
  ]
},
P3:{
  'Mathématiques':[
    {id:'calc1000', titre:'Calcul jusqu\u2019\u00e0 1000', emoji:'🧮', type:'gen', ref:'calc', params:{ops:['+','-'], max:1000}, niveaux:[{ops:['+','-'], max:200},{ops:['+','-'], max:1000},{ops:['+','-','×'], max:1000},{ops:['+','-','×'], max:1000, tmax:12, fmax:12},{ops:['+','-','×','÷'], max:1000, tmax:12, fmax:12, dmax:12, rmax:12}]},
    {id:'tables', titre:'Toutes les tables', emoji:'✖️', type:'gen', ref:'tables', params:{tables:[2,3,4,5,6,7,8,9,10]}, niveaux:[{tables:[2,3,4,5]},{tables:[2,3,4,5,6,7,8,9,10]},{tables:[6,7,8,9,12], fmax:12},{tables:[7,8,9,11,12], fmax:12},{tables:[11,12,13,14,15], fmax:12}]},
    {id:'divisions', titre:'Premi\u00e8res divisions', emoji:'➗', type:'gen', ref:'calc', params:{ops:['÷'], max:100}, niveaux:[{ops:['÷'], dmax:5, rmax:5},{ops:['÷'], dmax:9, rmax:9},{ops:['÷'], dmax:12, rmax:12},{ops:['÷'], dmax:12, rmax:15},{ops:['÷'], dmax:15, rmax:15}]},
    {id:'conv', titre:'Conversions simples', emoji:'📏', type:'gen', ref:'conversions', params:{types:['longueur','masse'], simple:true}, niveaux:[{types:['longueur'], simple:true},{types:['longueur','masse'], simple:true},{types:['longueur','masse']},{types:['longueur','masse','capacite']},{types:['longueur','masse','capacite','duree']}]}
  ],
  'Français':[
    {id:'homo', titre:'Homophones a/\u00e0, et/est, son/sont', emoji:'🔤', type:'banque', ref:'p3_homophones'},
    {id:'conj', titre:'Conjugaison : le pr\u00e9sent', emoji:'✍️', type:'banque', ref:'p3_conjugaison'},
    {id:'vocab', titre:'Vocabulaire et familles de mots', emoji:'📚', type:'banque', ref:'p3_vocabulaire'},
    {id:'phrases', titre:'Remets la phrase en ordre', emoji:'🧩', type:'phraseordre', ref:'fr2', langue:'fr'},
    {id:'lecture', titre:'Lecture et audition', emoji:'📖🎧', type:'lecture', ref:'fr3', langue:'fr'},
    {id:'trous', titre:'Texte \u00e0 trous', emoji:'🧩', type:'trous', ref:'trous_fr3', langue:'fr'},
    {id:'trous', titre:'Texte \u00e0 trous', emoji:'🧩', type:'trous', ref:'trous_fr2', langue:'fr'}
  ],
  'Éveil':[
    {id:'eveil', titre:'\u00c9veil et d\u00e9couvertes', emoji:'🌍', type:'banque', ref:'p3_eveil'}
  ]
},
P4:{
  'Mathématiques':[
    {id:'fractions', titre:'Fractions d\u2019un nombre', emoji:'➗', type:'gen', ref:'fractionDe', params:{dens:[2,3,4], mult:8}, niveaux:[{dens:[2,4], mult:5},{dens:[2,3,4], mult:8},{dens:[2,3,4,5,8], mult:12},{dens:[3,5,6,8], mult:15},{dens:[6,8,10,12], mult:20}]},
    {id:'conv', titre:'Conversions', emoji:'📏', type:'gen', ref:'conversions', params:{types:['longueur','masse','capacite']}},
    {id:'calcmental', titre:'Calcul mental', emoji:'🧮', type:'gen', ref:'calc', params:{ops:['+','-','×','÷'], max:1000}, niveaux:[{ops:['+','-'], max:100},{ops:['+','-','×','÷'], max:1000},{ops:['+','-','×','÷'], max:1000, tmax:12, fmax:12, dmax:12, rmax:12},{ops:['+','-','×','÷'], max:2000, tmax:12, fmax:12, dmax:12, rmax:12},{ops:['+','-','×','÷'], max:5000, tmax:15, fmax:12, dmax:15, rmax:12}]}
  ],
  'Français':[
    {id:'homo', titre:'Homophones ce/se, ou/o\u00f9', emoji:'🔤', type:'banque', ref:'p4_homophones'},
    {id:'conj', titre:'Imparfait et futur', emoji:'✍️', type:'banque', ref:'p4_conjugaison'},
    {id:'phrases', titre:'Construis la phrase', emoji:'🧩', type:'phraseordre', ref:'fr3', langue:'fr'},
    {id:'lecture', titre:'Lecture et audition', emoji:'📖🎧', type:'lecture', ref:'fr3', langue:'fr'}
  ],
  'Éveil':[
    {id:'eveil', titre:'Sciences et g\u00e9ographie', emoji:'🌍', type:'banque', ref:'p4_eveil'}
  ]
},
P5:{
  'Mathématiques':[
    {id:'fractions', titre:'Fractions', emoji:'➗', type:'gen', ref:'fractionDe', params:{dens:[2,3,4,5,8], mult:10}, niveaux:[{dens:[2,3,4], mult:6},{dens:[2,3,4,5,8], mult:10},{dens:[3,5,6,8,10], mult:12},{dens:[5,6,8,10,12], mult:15},{dens:[6,8,10,12], mult:20}]},
    {id:'equiv', titre:'Fractions \u00e9quivalentes', emoji:'🟰', type:'gen', ref:'equivFractions', params:{}},
    {id:'pourcent', titre:'Pourcentages simples', emoji:'💯', type:'gen', ref:'pourcentDe', params:{pcts:[10,25,50]}, niveaux:[{pcts:[50]},{pcts:[10,25,50]},{pcts:[10,20,25,50,75]},{pcts:[5,15,30,75], bases:[40,60,80,120,200]},{pcts:[15,35,45,65,85], bases:[120,160,240,320]}]},
    {id:'perim', titre:'P\u00e9rim\u00e8tres et aires', emoji:'📐', type:'gen', ref:'perimetreAire', params:{mode:'mixte'}, niveaux:[{mode:'perimetre'},{mode:'aire'},{mode:'mixte'},{mode:'mixte'},{mode:'mixte'}]},
    {id:'prob', titre:'Probl\u00e8mes', emoji:'🧠', type:'banque', ref:'p5_problemes'}
  ],
  'Français':[
    {id:'gram', titre:'Nature des mots', emoji:'🏷️', type:'banque', ref:'p5_grammaire'},
    {id:'lecture', titre:'Lecture et audition', emoji:'📖🎧', type:'lecture', ref:'fr4', langue:'fr'},
    {id:'trous', titre:'Texte \u00e0 trous', emoji:'🧩', type:'trous', ref:'trous_fr3', langue:'fr'}
  ],
  'Éveil':[
    {id:'eveil', titre:'\u00c9veil', emoji:'🌍', type:'banque', ref:'p5_eveil'}
  ],
  'Langues modernes':[
    ...blocLangues('en_P5','nl_P5','en1','nl1','en1','nl1','en1','nl1'),
    {id:'nl_intro', titre:'N\u00e9erlandais : premiers mots (QCM)', emoji:'🗣️', type:'banque', ref:'p5_neerlandais'}
  ]
},
P6:{
  'Mathématiques':[
    {id:'calc', titre:'Calcul mental avanc\u00e9', emoji:'🧮', type:'gen', ref:'priorites', params:{parentheses:true}, niveaux:[{parentheses:false},{parentheses:true},{parentheses:true},{parentheses:true},{parentheses:true}]},
    {id:'fractions', titre:'Fractions et pourcentages', emoji:'➗', type:'gen', ref:'pourcentDe', params:{pcts:[10,20,25,50,75,90], bases:[40,60,80,120,150,200]}, niveaux:[{pcts:[10,25,50], bases:[40,60,80,120]},{pcts:[10,20,25,50,75,90], bases:[40,60,80,120,150,200]},{pcts:[5,15,30,60,85], bases:[120,150,200,240,320]},{pcts:[5,15,35,65,95], bases:[200,240,320,400]},{pcts:[15,45,85], bases:[240,360,480,520]}]},
    {id:'conv', titre:'Grandeurs et conversions', emoji:'📏', type:'gen', ref:'conversions', params:{types:['longueur','masse','capacite','duree']}, niveaux:[{types:['longueur','masse']},{types:['longueur','masse','capacite']},{types:['longueur','masse','capacite','duree']},{types:['longueur','masse','capacite','duree']},{types:['longueur','masse','capacite','duree']}]},
    {id:'geom', titre:'Solides et figures', emoji:'📐', type:'banque', ref:'p6_geometrie'},
    {id:'prob', titre:'Probl\u00e8mes type CEB', emoji:'🧠', type:'banque', ref:'p6_problemes'}
  ],
  'Français':[
    {id:'homo', titre:'Homophones (les pi\u00e8ges du CEB)', emoji:'🔤', type:'banque', ref:'p6_homophones'},
    {id:'conj', titre:'Conjugaison compl\u00e8te', emoji:'✍️', type:'banque', ref:'p6_conjugaison'},
    {id:'fonctions', titre:'Fonctions dans la phrase', emoji:'🏷️', type:'banque', ref:'p6_grammaire_fonctions'},
    {id:'lecture', titre:'Lecture et audition (type CEB)', emoji:'📖🎧', type:'lecture', ref:'fr4', langue:'fr'},
    {id:'trous', titre:'Texte \u00e0 trous', emoji:'🧩', type:'trous', ref:'trous_fr4', langue:'fr'}
  ],
  'Éveil':[
    {id:'eveil', titre:'\u00c9veil type CEB', emoji:'🌍', type:'banque', ref:'p6_eveil'}
  ],
  'Langues modernes':[
    ...blocLangues('en_P6','nl_P6','en1','nl1','en1','nl1','en2','nl1'),
    {id:'nl_intro', titre:'N\u00e9erlandais : se pr\u00e9senter (QCM)', emoji:'🗣️', type:'banque', ref:'p6_neerlandais'},
    {id:'en_trous', titre:'Anglais : texte \u00e0 trous', emoji:'🧩', type:'trous', ref:'trous_en1', langue:'en'},
    {id:'nl_trous', titre:'N\u00e9erlandais : texte \u00e0 trous', emoji:'🧩', type:'trous', ref:'trous_nl1', langue:'nl'}
  ]
},

S1:{
  'Mathématiques':[
    {id:'relatifs', titre:'Nombres relatifs', emoji:'➖', type:'gen', ref:'relatifs', params:{max:12}, niveaux:[{max:6},{max:12},{max:20},{max:30},{max:50}]},
    {id:'priorites', titre:'Priorit\u00e9s des op\u00e9rations', emoji:'🧮', type:'gen', ref:'priorites', params:{parentheses:true}},
    {id:'fractionsop', titre:'Op\u00e9rations sur fractions', emoji:'➗', type:'gen', ref:'addFractions', params:{}},
    {id:'equations', titre:'Premi\u00e8res \u00e9quations', emoji:'❎', type:'gen', ref:'equations', params:{forme:'x+a=b'}, niveaux:[{forme:'x+a=b'},{forme:'ax=b'},{forme:'ax+b=c'},{forme:'ax+b=c'},{forme:'ax+b=c'}]}
  ],
  'Français':[
    {id:'fr', titre:'Types de phrases et accords', emoji:'✍️', type:'banque', ref:'s1_francais'}
  ],
  'Sciences':[
    {id:'sci', titre:'Sciences de base', emoji:'🔬', type:'banque', ref:'s1_sciences'}
  ],
  'Langues modernes':[
    ...blocLangues('en_S1','nl_S1','en2','nl2','en2','nl2','en3','nl2'),
    {id:'en_trous', titre:'Anglais : texte \u00e0 trous', emoji:'🧩', type:'trous', ref:'trous_en1', langue:'en'},
    {id:'nl_trous', titre:'N\u00e9erlandais : texte \u00e0 trous', emoji:'🧩', type:'trous', ref:'trous_nl1', langue:'nl'}
  ]
},
S2:{
  'Mathématiques':[
    {id:'equations', titre:'\u00c9quations ax + b = c', emoji:'❎', type:'gen', ref:'equations', params:{forme:'ax+b=c'}},
    {id:'puissances', titre:'Puissances', emoji:'🔺', type:'gen', ref:'puissances', params:{bmax:10, emax:3}, niveaux:[{bmax:6, emax:2},{bmax:10, emax:3},{bmax:12, emax:3},{bmax:12, emax:4},{bmax:15, emax:4}]},
    {id:'pourcent', titre:'Pourcentages', emoji:'💯', type:'gen', ref:'pourcentDe', params:{pcts:[5,10,20,25,30,50,75], bases:[40,60,80,120,150,200,240]}},
    {id:'geo', titre:'G\u00e9om\u00e9trie (Pythagore, angles)', emoji:'📐', type:'banque', ref:'s2_math_qcm'}
  ],
  'Français':[
    {id:'fr', titre:'Accords et connecteurs', emoji:'✍️', type:'banque', ref:'s2_francais'}
  ],
  'Sciences':[
    {id:'sci', titre:'Biologie, chimie, physique', emoji:'🧪', type:'banque', ref:'s2_sciences'}
  ],
  'Langues modernes': blocLangues('en_S2','nl_S2','en2','nl2','en2','nl2','en3','nl2')
},
S3:{
  'Mathématiques':[
    {id:'notsci', titre:'Notation scientifique', emoji:'🔬', type:'gen', ref:'notationSci', params:{}},
    {id:'equations', titre:'\u00c9quations', emoji:'❎', type:'gen', ref:'equations', params:{forme:'ax+b=c'}},
    {id:'fonctions', titre:'Fonctions : calculer f(x)', emoji:'📈', type:'gen', ref:'fonctionEval', params:{}},
    {id:'proportion', titre:'Proportionnalit\u00e9 et puissances', emoji:'🧮', type:'banque', ref:'s3_math_qcm'},
    {id:'moyenne', titre:'Statistiques : la moyenne', emoji:'📊', type:'gen', ref:'moyenne', params:{}}
  ],
  'Français':[
    {id:'figures', titre:'Figures de style', emoji:'🎭', type:'banque', ref:'s3_francais'},
    {id:'conj', titre:'Pass\u00e9 simple et subjonctif', emoji:'✍️', type:'banque', ref:'s3_conjugaison'},
    {id:'gram', titre:'Les propositions', emoji:'🏷️', type:'banque', ref:'s3_grammaire'}
  ],
  'Sciences':[
    {id:'sci', titre:'Atomes et mati\u00e8re', emoji:'⚗️', type:'banque', ref:'s3_sciences'},
    {id:'bio', titre:'Le corps humain', emoji:'🫀', type:'banque', ref:'s3_bio'}
  ],
  'Histoire':[
    {id:'hist', titre:'Les Temps modernes', emoji:'⛵', type:'banque', ref:'s3_histoire'}
  ],
  'Géographie':[
    {id:'geo', titre:'Europe, cartes et climats', emoji:'🗺️', type:'banque', ref:'s3_geo'}
  ],
  'Langues modernes':[
    ...blocLangues('en_S3','nl_S3','en2','nl2','en2','nl2','en3','nl3'),
    {id:'en_gram', titre:'Anglais : grammaire (QCM)', emoji:'🗣️', type:'banque', ref:'s3_anglais'},
    {id:'nl_gram', titre:'N\u00e9erlandais : grammaire (QCM)', emoji:'🗣️', type:'banque', ref:'s3_neerlandais'}
  ]
},
S4:{
  'Mathématiques':[
    {id:'identites', titre:'Produits remarquables et droites', emoji:'📈', type:'banque', ref:'s4_math_qcm'},
    {id:'trigo', titre:'Trigonom\u00e9trie', emoji:'📐', type:'banque', ref:'s4_trigo'},
    {id:'seconddeg', titre:'Racines carr\u00e9es', emoji:'√', type:'gen', ref:'secondDegreSimple', params:{}},
    {id:'moyenne', titre:'Statistiques', emoji:'📊', type:'gen', ref:'moyenne', params:{}}
  ],
  'Français':[
    {id:'argu', titre:'Le texte argumentatif', emoji:'🗣️', type:'banque', ref:'s4_francais'},
    {id:'conj', titre:'Subjonctif et concordance', emoji:'✍️', type:'banque', ref:'s4_conjugaison'}
  ],
  'Sciences':[
    {id:'sci', titre:'\u00c9lectricit\u00e9 et chimie', emoji:'⚡', type:'banque', ref:'s4_sciences'}
  ],
  'Histoire':[
    {id:'hist', titre:'XIX\u1d49 si\u00e8cle et r\u00e9volutions', emoji:'🏛️', type:'banque', ref:'s4_histoire'}
  ],
  'Géographie':[
    {id:'geo', titre:'La mondialisation', emoji:'🌐', type:'banque', ref:'s4_geo'}
  ],
  'Langues modernes':[
    ...blocLangues('en_S4','nl_S4','en2','nl2','en2','nl2','en4','nl3'),
    {id:'en_gram', titre:'Anglais : grammaire (QCM)', emoji:'🗣️', type:'banque', ref:'s4_anglais'},
    {id:'nl_gram', titre:'N\u00e9erlandais : grammaire (QCM)', emoji:'🗣️', type:'banque', ref:'s4_neerlandais'}
  ]
},
S5:{
  'Mathématiques':[
    {id:'analyse', titre:'Second degr\u00e9 et d\u00e9riv\u00e9es', emoji:'📈', type:'banque', ref:'s5_math_qcm'},
    {id:'proba', titre:'Probabilit\u00e9s', emoji:'🎲', type:'gen', ref:'probaSimple', params:{}},
    {id:'seconddeg', titre:'Racines', emoji:'√', type:'gen', ref:'secondDegreSimple', params:{}}
  ],
  'Français':[
    {id:'courants', titre:'Courants litt\u00e9raires', emoji:'📚', type:'banque', ref:'s5_francais'},
    {id:'oeuvres', titre:'Auteurs et \u0153uvres', emoji:'🖋️', type:'banque', ref:'s5_litterature'}
  ],
  'Sciences':[
    {id:'sci', titre:'Moles, m\u00e9canique et ADN', emoji:'🧬', type:'banque', ref:'s5_sciences'}
  ],
  'Histoire':[
    {id:'hist', titre:'Le XX\u1d49 si\u00e8cle', emoji:'🌐', type:'banque', ref:'s5_histoire'}
  ],
  'Géographie':[
    {id:'geo', titre:'D\u00e9veloppement et population', emoji:'🗺️', type:'banque', ref:'s5_geo'}
  ],
  'Langues modernes':[
    ...blocLangues('en_S5','nl_S5','en2','nl2','en2','nl2','en5','nl4'),
    {id:'en_gram', titre:'Anglais : grammaire (QCM)', emoji:'🗣️', type:'banque', ref:'s5_anglais'},
    {id:'nl_gram', titre:'N\u00e9erlandais : grammaire (QCM)', emoji:'🗣️', type:'banque', ref:'s5_neerlandais'}
  ]
},
S6:{
  'Mathématiques':[
    {id:'analyse', titre:'Analyse : d\u00e9riv\u00e9es, limites, ln', emoji:'📈', type:'banque', ref:'s6_math_qcm'},
    {id:'proba', titre:'Probabilit\u00e9s', emoji:'🎲', type:'gen', ref:'probaSimple', params:{}},
    {id:'moyenne', titre:'Statistiques', emoji:'📊', type:'gen', ref:'moyenne', params:{}}
  ],
  'Français':[
    {id:'dissert', titre:'Argumentation et dissertation', emoji:'🖋️', type:'banque', ref:'s6_francais'},
    {id:'oeuvres', titre:'Litt\u00e9rature du XX\u1d49', emoji:'📚', type:'banque', ref:'s6_litterature'}
  ],
  'Sciences':[
    {id:'sci', titre:'Chimie, physique, immunologie', emoji:'🔬', type:'banque', ref:'s6_sciences'}
  ],
  'Histoire':[
    {id:'hist', titre:'Histoire contemporaine', emoji:'🌍', type:'banque', ref:'s6_histoire'}
  ],
  'Géographie':[
    {id:'geo', titre:'G\u00e9opolitique et climat', emoji:'🌐', type:'banque', ref:'s6_geo'}
  ],
  'Langues modernes':[
    ...blocLangues('en_S6','nl_S6','en2','nl2','en2','nl2','en5','nl4'),
    {id:'nl_gram', titre:'N\u00e9erlandais : niveau CESS (QCM)', emoji:'🗣️', type:'banque', ref:'s6_neerlandais'}
  ]
}
};
