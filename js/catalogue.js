/* ============================================================
   CATALOGUE — École+
   Structure du site : années → matières → modules.
   Un module = {id, titre, emoji, type, ref, params}
     type 'banque' → ref = clé dans BANQUES
     type 'gen'    → ref = clé dans GENERATEURS, params transmis
   Pour ajouter un module : l'ajouter ici, et créer sa banque
   dans banques.js si nécessaire. C'est tout.
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

const PROGRAMME = {

M1:{
  'Découvertes':[
    {id:'compter3', titre:'Compter jusqu\u00e0 3', emoji:'🐥', type:'gen', ref:'compter', params:{max:3}},
    {id:'couleurs', titre:'Les couleurs', emoji:'🎨', type:'banque', ref:'mat_couleurs'}
  ]
},
M2:{
  'Découvertes':[
    {id:'compter5', titre:'Compter jusqu\u00e0 5', emoji:'🐥', type:'gen', ref:'compter', params:{max:5}},
    {id:'lettres', titre:'Les premi\u00e8res lettres', emoji:'🔤', type:'banque', ref:'mat_lettres'},
    {id:'couleurs', titre:'Les couleurs', emoji:'🎨', type:'banque', ref:'mat_couleurs'}
  ]
},
M3:{
  'Découvertes':[
    {id:'compter10', titre:'Compter jusqu\u00e0 10', emoji:'🔟', type:'gen', ref:'compter', params:{max:10}},
    {id:'lettres', titre:'Les lettres', emoji:'🔤', type:'banque', ref:'mat_lettres'},
    {id:'petitscalculs', titre:'Petites additions', emoji:'➕', type:'gen', ref:'calc', params:{ops:['+'], max:6}}
  ]
},

P1:{
  'Mathématiques':[
    {id:'add20', titre:'Additions jusqu\u00e0 20', emoji:'➕', type:'gen', ref:'calc', params:{ops:['+'], max:20}},
    {id:'sous20', titre:'Soustractions jusqu\u00e0 20', emoji:'➖', type:'gen', ref:'calc', params:{ops:['-'], max:20}},
    {id:'compter', titre:'Compter des objets', emoji:'🐥', type:'gen', ref:'compter', params:{max:12}}
  ],
  'Français':[
    {id:'mots', titre:'Lire les premiers mots', emoji:'📖', type:'banque', ref:'p1_mots'},
    {id:'sons', titre:'Entendre les sons', emoji:'👂', type:'banque', ref:'p1_sons'}
  ]
},
P2:{
  'Mathématiques':[
    {id:'add100', titre:'Additions jusqu\u00e0 100', emoji:'➕', type:'gen', ref:'calc', params:{ops:['+'], max:100}},
    {id:'sous100', titre:'Soustractions jusqu\u00e0 100', emoji:'➖', type:'gen', ref:'calc', params:{ops:['-'], max:100}},
    {id:'tables', titre:'Tables ×2 ×5 ×10', emoji:'✖️', type:'gen', ref:'tables', params:{tables:[2,5,10]}}
  ],
  'Français':[
    {id:'ortho', titre:'Bien \u00e9crire les mots', emoji:'✏️', type:'banque', ref:'p2_ortho'},
    {id:'contraires', titre:'Les contraires', emoji:'🔄', type:'banque', ref:'p2_contraires'}
  ]
},
P3:{
  'Mathématiques':[
    {id:'calc1000', titre:'Calcul jusqu\u00e0 1000', emoji:'🧮', type:'gen', ref:'calc', params:{ops:['+','-'], max:1000}},
    {id:'tables', titre:'Toutes les tables', emoji:'✖️', type:'gen', ref:'tables', params:{tables:[2,3,4,5,6,7,8,9,10]}},
    {id:'divisions', titre:'Premi\u00e8res divisions', emoji:'➗', type:'gen', ref:'calc', params:{ops:['÷'], max:100}},
    {id:'conv', titre:'Conversions simples', emoji:'📏', type:'gen', ref:'conversions', params:{types:['longueur','masse'], simple:true}}
  ],
  'Français':[
    {id:'homo', titre:'Homophones a/\u00e0, et/est, son/sont', emoji:'🔤', type:'banque', ref:'p3_homophones'},
    {id:'conj', titre:'Conjugaison : le pr\u00e9sent', emoji:'✍️', type:'banque', ref:'p3_conjugaison'},
    {id:'voc', titre:'Synonymes et familles de mots', emoji:'💬', type:'banque', ref:'p3_vocabulaire'}
  ]
},
P4:{
  'Mathématiques':[
    {id:'fractions', titre:'Fractions d\u2019un nombre', emoji:'➗', type:'gen', ref:'fractionDe', params:{dens:[2,3,4], mult:8}},
    {id:'conv', titre:'Conversions', emoji:'📏', type:'gen', ref:'conversions', params:{types:['longueur','masse','capacite']}},
    {id:'calcmental', titre:'Calcul mental', emoji:'🧮', type:'gen', ref:'calc', params:{ops:['+','-','×','÷'], max:1000}}
  ],
  'Français':[
    {id:'homo', titre:'Homophones ce/se, ou/o\u00f9', emoji:'🔤', type:'banque', ref:'p4_homophones'},
    {id:'conj', titre:'Imparfait et futur', emoji:'✍️', type:'banque', ref:'p4_conjugaison'}
  ],
  'Éveil':[
    {id:'eveil', titre:'Sciences et g\u00e9ographie', emoji:'🌍', type:'banque', ref:'p4_eveil'}
  ]
},
P5:{
  'Mathématiques':[
    {id:'fractions', titre:'Fractions', emoji:'➗', type:'gen', ref:'fractionDe', params:{dens:[2,3,4,5,8], mult:10}},
    {id:'equiv', titre:'Fractions \u00e9quivalentes', emoji:'🟰', type:'gen', ref:'equivFractions', params:{}},
    {id:'pourcent', titre:'Pourcentages simples', emoji:'💯', type:'gen', ref:'pourcentDe', params:{pcts:[10,25,50]}},
    {id:'perim', titre:'P\u00e9rim\u00e8tres et aires', emoji:'📐', type:'gen', ref:'perimetreAire', params:{mode:'mixte'}},
    {id:'prob', titre:'Probl\u00e8mes', emoji:'🧠', type:'banque', ref:'p5_problemes'}
  ],
  'Français':[
    {id:'gram', titre:'Nature des mots', emoji:'🏷️', type:'banque', ref:'p5_grammaire'}
  ],
  'Éveil':[
    {id:'eveil', titre:'\u00c9veil', emoji:'🌍', type:'banque', ref:'p5_eveil'}
  ]
},
P6:{
  'Mathématiques':[
    {id:'calc', titre:'Calcul mental avanc\u00e9', emoji:'🧮', type:'gen', ref:'priorites', params:{parentheses:true}},
    {id:'fractions', titre:'Fractions et pourcentages', emoji:'➗', type:'gen', ref:'pourcentDe', params:{pcts:[10,20,25,50,75,90], bases:[40,60,80,120,150,200]}},
    {id:'conv', titre:'Grandeurs et conversions', emoji:'📏', type:'gen', ref:'conversions', params:{types:['longueur','masse','capacite','duree']}},
    {id:'geom', titre:'Solides et figures', emoji:'📐', type:'banque', ref:'p6_geometrie'},
    {id:'prob', titre:'Probl\u00e8mes type CEB', emoji:'🧠', type:'banque', ref:'p6_problemes'}
  ],
  'Français':[
    {id:'homo', titre:'Homophones (les pi\u00e8ges du CEB)', emoji:'🔤', type:'banque', ref:'p6_homophones'},
    {id:'conj', titre:'Conjugaison compl\u00e8te', emoji:'✍️', type:'banque', ref:'p6_conjugaison'},
    {id:'fonctions', titre:'Fonctions dans la phrase', emoji:'🏷️', type:'banque', ref:'p6_grammaire_fonctions'}
  ],
  'Éveil':[
    {id:'eveil', titre:'\u00c9veil type CEB', emoji:'🌍', type:'banque', ref:'p6_eveil'}
  ]
},

S1:{
  'Mathématiques':[
    {id:'relatifs', titre:'Nombres relatifs', emoji:'➖', type:'gen', ref:'relatifs', params:{max:12}},
    {id:'priorites', titre:'Priorit\u00e9s des op\u00e9rations', emoji:'🧮', type:'gen', ref:'priorites', params:{parentheses:true}},
    {id:'fractionsop', titre:'Op\u00e9rations sur fractions', emoji:'➗', type:'gen', ref:'addFractions', params:{}},
    {id:'equations', titre:'Premi\u00e8res \u00e9quations', emoji:'❎', type:'gen', ref:'equations', params:{forme:'x+a=b'}}
  ],
  'Français':[
    {id:'fr', titre:'Types de phrases et accords', emoji:'✍️', type:'banque', ref:'s1_francais'}
  ],
  'Sciences':[
    {id:'sci', titre:'Sciences de base', emoji:'🔬', type:'banque', ref:'s1_sciences'}
  ]
},
S2:{
  'Mathématiques':[
    {id:'equations', titre:'\u00c9quations ax + b = c', emoji:'❎', type:'gen', ref:'equations', params:{forme:'ax+b=c'}},
    {id:'puissances', titre:'Puissances', emoji:'🔺', type:'gen', ref:'puissances', params:{bmax:10, emax:3}},
    {id:'pourcent', titre:'Pourcentages', emoji:'💯', type:'gen', ref:'pourcentDe', params:{pcts:[5,10,20,25,30,50,75], bases:[40,60,80,120,150,200,240]}},
    {id:'geo', titre:'G\u00e9om\u00e9trie (Pythagore, angles)', emoji:'📐', type:'banque', ref:'s2_math_qcm'}
  ],
  'Français':[
    {id:'fr', titre:'Accords et connecteurs', emoji:'✍️', type:'banque', ref:'s2_francais'}
  ],
  'Sciences':[
    {id:'sci', titre:'Biologie, chimie, physique', emoji:'🧪', type:'banque', ref:'s2_sciences'}
  ]
},
S3:{
  'Mathématiques':[
    {id:'notsci', titre:'Notation scientifique', emoji:'🔬', type:'gen', ref:'notationSci', params:{}},
    {id:'equations', titre:'\u00c9quations', emoji:'❎', type:'gen', ref:'equations', params:{forme:'ax+b=c'}},
    {id:'fonctions', titre:'Fonctions : calculer f(x)', emoji:'📈', type:'gen', ref:'fonctionEval', params:{}},
    {id:'proportions', titre:'Proportionnalit\u00e9 et puissances', emoji:'🔺', type:'banque', ref:'s3_math_qcm'},
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
    {id:'anglais', titre:'Anglais : temps et comparatifs', emoji:'🇬🇧', type:'banque', ref:'s3_anglais'},
    {id:'neerlandais', titre:'N\u00e9erlandais : bases', emoji:'🇳🇱', type:'banque', ref:'s3_neerlandais'}
  ]
},
S4:{
  'Mathématiques':[
    {id:'identites', titre:'Produits remarquables et droites', emoji:'📈', type:'banque', ref:'s4_math_qcm'},
    {id:'trigo', titre:'Trigonom\u00e9trie', emoji:'📐', type:'banque', ref:'s4_trigo'},
    {id:'fonctions', titre:'Fonctions : calculer f(x)', emoji:'🧮', type:'gen', ref:'fonctionEval', params:{}},
    {id:'seconddeg', titre:'Racines carr\u00e9es', emoji:'√', type:'gen', ref:'secondDegreSimple', params:{}},
    {id:'moyenne', titre:'Statistiques', emoji:'📊', type:'gen', ref:'moyenne', params:{}}
  ],
  'Français':[
    {id:'argu', titre:'Le texte argumentatif', emoji:'🗣️', type:'banque', ref:'s4_francais'},
    {id:'conj', titre:'Concordance et subjonctif', emoji:'✍️', type:'banque', ref:'s4_conjugaison'}
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
    {id:'anglais', titre:'Anglais : passif et conditionnel', emoji:'🇬🇧', type:'banque', ref:'s4_anglais'},
    {id:'neerlandais', titre:'N\u00e9erlandais : perfectum et modaux', emoji:'🇳🇱', type:'banque', ref:'s4_neerlandais'}
  ]
},
S5:{
  'Mathématiques':[
    {id:'seconddegre', titre:'Second degr\u00e9 et d\u00e9riv\u00e9es', emoji:'📈', type:'banque', ref:'s5_math_qcm'},
    {id:'proba', titre:'Probabilit\u00e9s', emoji:'🎲', type:'gen', ref:'probaSimple', params:{}},
    {id:'racines', titre:'Racines carr\u00e9es', emoji:'√', type:'gen', ref:'secondDegreSimple', params:{}}
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
    {id:'geo', titre:'D\u00e9veloppement et \u00e9nergie', emoji:'🗺️', type:'banque', ref:'s5_geo'}
  ],
  'Langues modernes':[
    {id:'anglais', titre:'Anglais : temps avanc\u00e9s', emoji:'🇬🇧', type:'banque', ref:'s5_anglais'},
    {id:'neerlandais', titre:'N\u00e9erlandais : subordonn\u00e9es', emoji:'🇳🇱', type:'banque', ref:'s5_neerlandais'}
  ]
},
S6:{
  'Mathématiques':[
    {id:'analyse', titre:'Analyse : d\u00e9riv\u00e9es, limites, primitives', emoji:'📉', type:'banque', ref:'s6_math_qcm'},
    {id:'proba', titre:'Probabilit\u00e9s', emoji:'🎲', type:'gen', ref:'probaSimple', params:{}},
    {id:'moyenne', titre:'Statistiques', emoji:'📊', type:'gen', ref:'moyenne', params:{}}
  ],
  'Français':[
    {id:'dissert', titre:'Argumentation et dissertation', emoji:'🖋️', type:'banque', ref:'s6_francais'},
    {id:'litt', titre:'Litt\u00e9rature du XX\u1d49 si\u00e8cle', emoji:'📚', type:'banque', ref:'s6_litterature'}
  ],
  'Sciences':[
    {id:'sci', titre:'Physique, chimie et immunologie', emoji:'🔭', type:'banque', ref:'s6_sciences'}
  ],
  'Histoire':[
    {id:'hist', titre:'Histoire contemporaine', emoji:'🌍', type:'banque', ref:'s6_histoire'}
  ],
  'Géographie':[
    {id:'geo', titre:'G\u00e9opolitique et climat', emoji:'🌐', type:'banque', ref:'s6_geo'}
  ],
  'Langues modernes':[
    {id:'neerlandais', titre:'N\u00e9erlandais : niveau CESS', emoji:'🇳🇱', type:'banque', ref:'s6_neerlandais'}
  ]
}
};
