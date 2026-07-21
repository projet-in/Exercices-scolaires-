/* ============================================================
   EXTENSIONS MATERNELLE / PRIMAIRE / S1-S2 — École+
   Chargé après banques.js : pousse des questions supplémentaires
   et crée quelques nouvelles banques (sons, contraires, vocabulaire).
   ============================================================ */

/* ---------- MATERNELLE ---------- */
BANQUES.mat_lettres.push(
  {q:"Par quelle lettre commence le mot TORTUE 🐢 ?", b:"T", a:["O","R"]},
  {q:"Par quelle lettre commence le mot NUAGE ☁️ ?", b:"N", a:["U","G"]},
  {q:"Par quelle lettre commence le mot ROBOT 🤖 ?", b:"R", a:["B","T"]},
  {q:"Par quelle lettre commence le mot FLEUR 🌸 ?", b:"F", a:["L","E"]},
  {q:"Par quelle lettre commence le mot GÂTEAU 🎂 ?", b:"G", a:["A","C"]},
  {q:"Par quelle lettre commence le mot ZÈBRE 🦓 ?", b:"Z", a:["S","B"]}
);
BANQUES.mat_couleurs.push(
  {q:"De quelle couleur est une banane 🍌 ?", b:"jaune", a:["rouge","bleue"]},
  {q:"De quelle couleur est la nuit 🌃 ?", b:"noire", a:["blanche","rose"]},
  {q:"De quelle couleur est un cochon 🐷 ?", b:"rose", a:["vert","bleu"]},
  {q:"De quelle couleur est un sapin 🎄 ?", b:"vert", a:["jaune","violet"]},
  {q:"De quelle couleur est un citron 🍋 ?", b:"jaune", a:["rouge","noir"]}
);

/* ---------- P1 ---------- */
BANQUES.p1_mots.push(
  {q:"🐶 — Quel est ce mot ?", b:"chien", a:["chat","lion"]},
  {q:"☀️ — Quel est ce mot ?", b:"soleil", a:["sol","oreille"]},
  {q:"🍞 — Quel est ce mot ?", b:"pain", a:["bain","main"]},
  {q:"🐭 — Quel est ce mot ?", b:"souris", a:["sourire","souci"]},
  {q:"🌸 — Quel est ce mot ?", b:"fleur", a:["fleuve","four"]},
  {q:"🚗 — Quel est ce mot ?", b:"voiture", a:["toiture","ceinture"]}
);
BANQUES.p1_sons = [
  {q:"Dans quel mot entend-on le son [ou] ?", b:"loup", a:["lit","lac"]},
  {q:"Dans quel mot entend-on le son [an] ?", b:"maman", a:["mine","mou"]},
  {q:"Dans quel mot entend-on le son [on] ?", b:"ballon", a:["balle","bulle"]},
  {q:"Dans quel mot entend-on le son [in] ?", b:"lapin", a:["lampe","loupe"]},
  {q:"Dans quel mot entend-on le son [oi] ?", b:"roi", a:["rue","riz"]},
  {q:"Dans quel mot entend-on le son [é] ?", b:"vélo", a:["ville","vol"]}
];

/* ---------- P2 ---------- */
BANQUES.p2_ortho.push(
  {q:"Un ___ chante dans l'arbre.", b:"oiseau", a:["oizeau","oisau"]},
  {q:"Un ___ nage dans l'eau.", b:"poisson", a:["poison","poissont"]},
  {q:"Nous montons la ___ .", b:"montagne", a:["montagn","montange"]},
  {q:"J'ouvre la ___ .", b:"fenêtre", a:["fenettre","feneitre"]},
  {q:"J'adore le ___ chaud.", b:"chocolat", a:["chocola","chokolat"]},
  {q:"Le ___ garde les moutons.", b:"berger", a:["bergé","bergier"]}
);
BANQUES.p2_contraires = [
  {q:"Le contraire de « grand » est...", b:"petit", a:["gros","haut"]},
  {q:"Le contraire de « chaud » est...", b:"froid", a:["tiède","mouillé"]},
  {q:"Le contraire de « jour » est...", b:"nuit", a:["soir","matin"]},
  {q:"Le contraire de « ouvert » est...", b:"fermé", a:["cassé","rond"]},
  {q:"Le contraire de « monter » est...", b:"descendre", a:["sauter","courir"]},
  {q:"Le contraire de « propre » est...", b:"sale", a:["mouillé","vieux"]}
];

/* ---------- P3 ---------- */
BANQUES.p3_homophones.push(
  {q:"Elle ___ dix ans.", b:"a", a:["à","ah"]},
  {q:"Ils ___ très faim.", b:"ont", a:["on","son"]},
  {q:"Le chat ___ le chien dorment ensemble.", b:"et", a:["est","es"]},
  {q:"Mes cousins ___ arrivés ce matin.", b:"sont", a:["son","sons"]},
  {q:"___ frère joue au football.", b:"Son", a:["Sont","Ont"]}
);
BANQUES.p3_conjugaison.push(
  {q:"Nous (manger) ___ à midi. (présent)", b:"mangeons", a:["mangons","mangeont"]},
  {q:"Ils (venir) ___ ce soir. (présent)", b:"viennent", a:["vienent","vient"]},
  {q:"Tu (finir) ___ ton assiette. (présent)", b:"finis", a:["finit","fini"]},
  {q:"Elle (vouloir) ___ un chien. (présent)", b:"veut", a:["veux","veule"]},
  {q:"Je (être) ___ content. (présent)", b:"suis", a:["es","est"]}
);
BANQUES.p3_vocabulaire = [
  {q:"Un synonyme de « maison » est...", b:"habitation", a:["voiture","jardin"]},
  {q:"Un synonyme de « content » est...", b:"joyeux", a:["fâché","fatigué"]},
  {q:"Un synonyme de « joli » est...", b:"beau", a:["laid","grand"]},
  {q:"Quel mot est de la même famille que « dent » ?", b:"dentiste", a:["dans","don"]},
  {q:"Quel mot est de la même famille que « chant » ?", b:"chanteur", a:["champ","chance"]},
  {q:"Quel mot est de la même famille que « laver » ?", b:"lavage", a:["lever","larve"]}
];

/* ---------- P4 ---------- */
BANQUES.p4_homophones.push(
  {q:"___ sont mes meilleurs amis.", b:"Ce", a:["Se","Sceux"]},
  {q:"Il ___ promène chaque matin.", b:"se", a:["ce","ceux"]},
  {q:"Veux-tu du jus ___ de l'eau ?", b:"ou", a:["où","houe"]},
  {q:"Le pays ___ il est né est lointain.", b:"où", a:["ou","houx"]},
  {q:"___ que tu dis est vrai.", b:"Ce", a:["Se","Ceu"]}
);
BANQUES.p4_conjugaison.push(
  {q:"Vous (finir) ___ demain. (futur)", b:"finirez", a:["finissez","finirer"]},
  {q:"Elles (chanter) ___ souvent. (imparfait)", b:"chantaient", a:["chantait","chanteront"]},
  {q:"On (aller) ___ souvent au parc. (imparfait)", b:"allait", a:["allais","ira"]},
  {q:"Je (faire) ___ un dessin. (futur)", b:"ferai", a:["fairai","fais"]},
  {q:"Nous (avoir) ___ un contrôle. (futur)", b:"aurons", a:["avons","auront"]}
);
BANQUES.p4_eveil.push(
  {q:"L'eau existe sous ___ états.", b:"trois", a:["deux","quatre"]},
  {q:"Quel astre éclaire la Terre le jour ?", b:"le Soleil", a:["la Lune","Mars"]},
  {q:"La Terre fait le tour du Soleil en...", b:"un an", a:["un jour","un mois"]},
  {q:"Combien de provinces compte la Belgique ?", b:"10", a:["9","11"]},
  {q:"La langue principalement parlée en Flandre est...", b:"le néerlandais", a:["l'allemand","l'anglais"]},
  {q:"La photosynthèse est réalisée par...", b:"les plantes", a:["les animaux","les pierres"]}
);

/* ---------- P5 ---------- */
BANQUES.p5_grammaire.push(
  {q:"« très » dans « très grand » est...", b:"un adverbe", a:["un adjectif","un déterminant"]},
  {q:"« et » est...", b:"une conjonction", a:["une préposition","un pronom"]},
  {q:"Le chat dort « sous » la table. — Nature ?", b:"une préposition", a:["un adverbe","un article"]},
  {q:"« manger » est un verbe du...", b:"1er groupe", a:["2e groupe","3e groupe"]},
  {q:"« finir » est un verbe du...", b:"2e groupe", a:["1er groupe","3e groupe"]},
  {q:"Le féminin de « acteur » est...", b:"actrice", a:["acteure","actrise"]}
);
BANQUES.p5_problemes.push(
  {q:"Un pack de 6 bouteilles coûte 4,20 €. Prix d'une bouteille ?", b:"0,70 €", a:["0,60 €","0,80 €"]},
  {q:"Léo économise 12 € par mois pendant 5 mois. Combien a-t-il ?", b:"60 €", a:["50 €","72 €"]},
  {q:"Un rectangle a un périmètre de 20 cm et une longueur de 6 cm. Sa largeur ?", b:"4 cm", a:["5 cm","8 cm"]},
  {q:"Il est 15 h 20. Le bus passe dans 25 minutes. À quelle heure ?", b:"15 h 45", a:["15 h 55","16 h 05"]},
  {q:"Une pizza est coupée en 8 parts ; on en mange 3. Quelle fraction reste-t-il ?", b:"5/8", a:["3/8","5/3"]}
);
BANQUES.p5_eveil = [
  {q:"La capitale de la Wallonie est...", b:"Namur", a:["Liège","Charleroi"]},
  {q:"Les trois régions de la Belgique sont...", b:"Bruxelles, la Flandre et la Wallonie", a:["le Nord, le Sud et l'Est","Liège, Namur et Gand"]},
  {q:"La fête nationale belge est le...", b:"21 juillet", a:["14 juillet","11 novembre"]},
  {q:"Jules César était un général...", b:"romain", a:["grec","égyptien"]},
  {q:"Quel peuple a construit les grandes pyramides ?", b:"les Égyptiens", a:["les Romains","les Gaulois"]},
  {q:"L'eau de mer est...", b:"salée", a:["sucrée","toujours chaude"]},
  {q:"Un animal carnivore mange...", b:"de la viande", a:["uniquement des plantes","des pierres"]},
  {q:"Charlemagne a été couronné empereur en...", b:"800", a:["1000","1515"]}
];

/* ---------- P6 ---------- */
BANQUES.p6_homophones.push(
  {q:"Tu ___ trompé de porte.", b:"t'es", a:["tes","t'ai"]},
  {q:"___ affaires sont bien rangées.", b:"Tes", a:["T'es","Taie"]},
  {q:"Lève-toi ___ demain matin.", b:"plus tôt", a:["plutôt","plu tôt"]},
  {q:"Je préfère le thé ___ que le café.", b:"plutôt", a:["plus tôt","plu tot"]},
  {q:"___ est ton avis sur la question ?", b:"Quel", a:["Qu'elle","Quelle"]}
);
BANQUES.p6_conjugaison.push(
  {q:"Nous (prendre) ___ le train hier. (passé composé)", b:"avons pris", a:["avons prit","prenions"]},
  {q:"Ils (finir) ___ avant midi. (futur)", b:"finiront", a:["finirons","finissent"]},
  {q:"Elle (courir) ___ très vite. (présent)", b:"court", a:["coure","cours"]},
  {q:"Il faut que je (partir) ___ tôt. (subjonctif)", b:"parte", a:["pars","partirai"]},
  {q:"Vous (voir) ___ un arc-en-ciel. (passé composé)", b:"avez vu", a:["avez vue","voyiez"]}
);
BANQUES.p6_grammaire_fonctions.push(
  {q:"Le chien dort « dans sa niche ». — Fonction du groupe ?", b:"complément de lieu", a:["complément de temps","sujet"]},
  {q:"« Rapidement », il sortit de la pièce. — Fonction ?", b:"complément de manière", a:["sujet","attribut"]},
  {q:"Marie est « médecin ». — Fonction ?", b:"attribut du sujet", a:["complément direct","apposition"]},
  {q:"« Pierre et Paul » chantent en chœur. — Fonction du groupe ?", b:"sujet", a:["verbe","complément"]}
);
BANQUES.p6_problemes.push(
  {q:"Un vélo coûte 240 €. Avec une remise de 15 %, quel est le nouveau prix ?", b:"204 €", a:["225 €","210 €"]},
  {q:"Une voiture roule à 90 km/h. Quelle distance en 20 minutes ?", b:"30 km", a:["45 km","20 km"]},
  {q:"Quel est le périmètre d'un carré de 7,5 cm de côté ?", b:"30 cm", a:["22,5 cm","56,25 cm"]},
  {q:"3/5 des 35 élèves sont des filles. Combien y a-t-il de garçons ?", b:"14", a:["21","12"]}
);
BANQUES.p6_geometrie.push(
  {q:"Combien d'axes de symétrie possède un carré ?", b:"4", a:["2","1"]},
  {q:"Un losange possède...", b:"4 côtés égaux", a:["4 angles droits obligatoirement","3 côtés"]},
  {q:"Le rayon d'un cercle vaut...", b:"la moitié du diamètre", a:["le double du diamètre","le tiers du diamètre"]},
  {q:"Un trapèze possède...", b:"deux côtés parallèles (les bases)", a:["4 angles droits","3 sommets"]}
);
BANQUES.p6_eveil.push(
  {q:"La Semois et l'Ourthe sont des...", b:"rivières", a:["montagnes","provinces"]},
  {q:"L'Ardenne se situe...", b:"au sud-est de la Belgique", a:["à la côte","en Flandre"]},
  {q:"Le squelette sert à...", b:"soutenir le corps", a:["digérer","respirer"]},
  {q:"Les poumons servent à...", b:"respirer", a:["pomper le sang","filtrer l'urine"]},
  {q:"Le 11 novembre, on commémore...", b:"l'armistice de 1918", a:["Noël","l'indépendance belge"]}
);

/* ---------- S1 ---------- */
BANQUES.s1_francais.push(
  {q:"Une phrase sans verbe conjugué est une phrase...", b:"non verbale", a:["complexe","passive"]},
  {q:"Une phrase avec plusieurs verbes conjugués est...", b:"complexe", a:["simple","nominale"]},
  {q:"Les paroles rapportées directement se placent entre...", b:"guillemets", a:["parenthèses","crochets"]},
  {q:"« Est-ce que tu viens ? » — Type de phrase ?", b:"interrogative", a:["exclamative","impérative"]},
  {q:"Un narrateur qui dit « je » et participe à l'histoire est...", b:"interne", a:["externe","omniscient"]},
  {q:"Le schéma narratif commence par...", b:"la situation initiale", a:["le dénouement","les péripéties"]}
);
BANQUES.s1_sciences.push(
  {q:"Un mélange eau + sel bien dissous est...", b:"homogène", a:["hétérogène","gazeux"]},
  {q:"Au niveau de la mer, l'eau pure bout à...", b:"100 °C", a:["90 °C","50 °C"]},
  {q:"La glace fond à...", b:"0 °C", a:["10 °C","−10 °C"]},
  {q:"Un herbivore se nourrit de...", b:"végétaux", a:["viande","insectes uniquement"]},
  {q:"La masse se mesure avec...", b:"une balance", a:["un thermomètre","une règle"]},
  {q:"Le Soleil est...", b:"une étoile", a:["une planète","une comète"]}
);

/* ---------- S2 ---------- */
BANQUES.s2_francais.push(
  {q:"« afin de » exprime...", b:"le but", a:["la cause","l'opposition"]},
  {q:"« à condition que » exprime...", b:"la condition", a:["la conséquence","le temps"]},
  {q:"Les pommes que j'ai (manger) ___ étaient mûres.", b:"mangées", a:["mangé","mangés"]},
  {q:"Ils se sont (parler) ___ longtemps.", b:"parlé", a:["parlés","parler"]},
  {q:"Dans « Ils sont arrivés », l'auxiliaire est...", b:"être", a:["avoir","aller"]}
);
BANQUES.s2_math_qcm.push(
  {q:"Pythagore : hypoténuse 13, un côté 5. L'autre côté = ?", b:"12", a:["8","9"]},
  {q:"(−2)³ = ?", b:"−8", a:["8","−6"]},
  {q:"La médiatrice d'un segment est...", b:"la perpendiculaire en son milieu", a:["la parallèle au segment","la bissectrice"]},
  {q:"La bissectrice partage...", b:"un angle en deux angles égaux", a:["un segment en deux","un cercle en quatre"]},
  {q:"x/3 = 5   →   x = ?", b:"15", a:["8","5/3"]},
  {q:"20 % de réduction sur 50 €, c'est une remise de...", b:"10 €", a:["20 €","5 €"]}
);
BANQUES.s2_sciences.push(
  {q:"L'appareil qui mesure la tension est...", b:"le voltmètre", a:["l'ampèremètre","le baromètre"]},
  {q:"L'ampèremètre mesure...", b:"l'intensité du courant", a:["la tension","la résistance"]},
  {q:"Les végétaux absorbent l'eau principalement par...", b:"les racines", a:["les fleurs","les fruits"]},
  {q:"La respiration consomme du dioxygène et rejette...", b:"du dioxyde de carbone", a:["de l'azote","de l'oxygène"]},
  {q:"La fécondation est la rencontre...", b:"d'un spermatozoïde et d'un ovule", a:["de deux ovules","de deux globules"]},
  {q:"Un levier permet de...", b:"réduire l'effort à fournir", a:["créer de l'énergie","supprimer le poids"]}
);
