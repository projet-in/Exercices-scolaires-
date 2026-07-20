/* ============================================================
   BANQUES DE QUESTIONS — École+
   Format : liste de {q, b, a} (question, bonne réponse, [2 mauvaises]).
   Pour ajouter du contenu : ajouter des objets dans la bonne banque,
   ou créer une nouvelle banque et la référencer dans catalogue.js.
   ============================================================ */

const BANQUES = {

/* ---------- MATERNELLE ---------- */
mat_lettres: [
  {q:"Par quelle lettre commence le mot CHAT 🐱 ?", b:"C", a:["A","T"]},
  {q:"Par quelle lettre commence le mot AVION 🛩️ ?", b:"A", a:["V","O"]},
  {q:"Par quelle lettre commence le mot MAISON 🏠 ?", b:"M", a:["N","S"]},
  {q:"Par quelle lettre commence le mot SOLEIL ☀️ ?", b:"S", a:["O","L"]},
  {q:"Par quelle lettre commence le mot BALLON 🎈 ?", b:"B", a:["L","N"]},
  {q:"Par quelle lettre commence le mot LION 🦁 ?", b:"L", a:["I","N"]}
],
mat_couleurs: [
  {q:"De quelle couleur est le soleil ☀️ ?", b:"jaune", a:["bleu","vert"]},
  {q:"De quelle couleur est une fraise 🍓 ?", b:"rouge", a:["jaune","violet"]},
  {q:"De quelle couleur est le ciel ☁️ quand il fait beau ?", b:"bleu", a:["rouge","noir"]},
  {q:"De quelle couleur est l'herbe 🌿 ?", b:"verte", a:["orange","rose"]},
  {q:"De quelle couleur est une orange 🍊 ?", b:"orange", a:["bleue","grise"]}
],

/* ---------- P1-P2 ---------- */
p1_mots: [
  {q:"🐱 — Quel est ce mot ?", b:"chat", a:["chien","rat"]},
  {q:"🏠 — Quel est ce mot ?", b:"maison", a:["magasin","moulin"]},
  {q:"🌙 — Quel est ce mot ?", b:"lune", a:["lame","laine"]},
  {q:"🐟 — Quel est ce mot ?", b:"poisson", a:["poussin","boisson"]},
  {q:"🎂 — Quel est ce mot ?", b:"gâteau", a:["bateau","château"]},
  {q:"🚲 — Quel est ce mot ?", b:"vélo", a:["stylo","dodo"]}
],
p2_ortho: [
  {q:"Le ___ dort sur le canapé.", b:"chat", a:["cha","chas"]},
  {q:"Je mange une ___ rouge.", b:"pomme", a:["pome","pomme s"]},
  {q:"Il joue au ___ dans le jardin.", b:"ballon", a:["balon","ballont"]},
  {q:"Ma ___ est très grande.", b:"maison", a:["maizon","méson"]},
  {q:"Le ___ brille dans le ciel.", b:"soleil", a:["solei","solail"]},
  {q:"J'écris avec un ___ .", b:"crayon", a:["créon","craiyon"]}
],

/* ---------- P3-P4 FRANÇAIS ---------- */
p3_homophones: [
  {q:"Il ___ un vélo rouge.", b:"a", a:["à","as"]},
  {q:"Nous allons ___ la mer.", b:"à", a:["a","as"]},
  {q:"Mon frère ___ très grand.", b:"est", a:["et","es"]},
  {q:"Papa ___ maman arrivent bientôt.", b:"et", a:["est","es"]},
  {q:"Ils ___ partis en vacances.", b:"sont", a:["son","sons"]},
  {q:"Il a perdu ___ cartable.", b:"son", a:["sont","sons"]},
  {q:"Les élèves ___ fini leurs devoirs.", b:"ont", a:["on","onts"]},
  {q:"___ va au cinéma ce soir.", b:"On", a:["Ont","Ons"]}
],
p3_conjugaison: [
  {q:"Nous (finir) ___ nos devoirs. (présent)", b:"finissons", a:["finisson","finissent"]},
  {q:"Tu (aller) ___ à l'école. (présent)", b:"vas", a:["va","vais"]},
  {q:"Ils (prendre) ___ le bus. (présent)", b:"prennent", a:["prenent","prend"]},
  {q:"Elle (faire) ___ un gâteau. (présent)", b:"fait", a:["fais","font"]},
  {q:"Vous (dire) ___ la vérité. (présent)", b:"dites", a:["disez","disent"]},
  {q:"Je (pouvoir) ___ venir demain. (présent)", b:"peux", a:["peut","peus"]}
],
p4_homophones: [
  {q:"___ chien aboie très fort.", b:"Ce", a:["Se","Ceux"]},
  {q:"Il ___ lave les mains avant de manger.", b:"se", a:["ce","seu"]},
  {q:"Tu veux du thé ___ du café ?", b:"ou", a:["où","houx"]},
  {q:"La ville ___ j'habite est très belle.", b:"où", a:["ou","hou"]},
  {q:"___ soir, nous mangeons des frites.", b:"Ce", a:["Se","Ceu"]}
],
p4_conjugaison: [
  {q:"Quand j'étais petit, je (jouer) ___ au parc. (imparfait)", b:"jouais", a:["jouait","jouer"]},
  {q:"Nous (être) ___ très contents. (imparfait)", b:"étions", a:["étaient","êtions"]},
  {q:"Ils (avoir) ___ un grand chien. (imparfait)", b:"avaient", a:["avait","avais"]},
  {q:"Demain, je (venir) ___ chez toi. (futur)", b:"viendrai", a:["viendrais","venirai"]},
  {q:"Nous (voir) ___ la mer cet été. (futur)", b:"verrons", a:["voirons","verons"]},
  {q:"Tu (être) ___ content du résultat. (futur)", b:"seras", a:["sera","serais"]}
],

/* ---------- P5-P6 FRANÇAIS ---------- */
p5_grammaire: [
  {q:"Le « chien » aboie. — Nature du mot entre guillemets ?", b:"un nom", a:["un verbe","un adjectif"]},
  {q:"Marie « chante » une chanson. — Nature du mot ?", b:"un verbe", a:["un nom","un adjectif"]},
  {q:"Le ciel « bleu » me plaît. — Nature du mot ?", b:"un adjectif", a:["un nom","un verbe"]},
  {q:"« Les » enfants jouent dehors. — Nature du mot ?", b:"un déterminant", a:["un pronom","un nom"]},
  {q:"« Nous » partons demain matin. — Nature du mot ?", b:"un pronom", a:["un déterminant","un nom"]},
  {q:"Il court « rapidement ». — Nature du mot ?", b:"un adverbe", a:["un adjectif","un verbe"]}
],
p6_homophones: [
  {q:"Il range ___ jouets dans sa chambre.", b:"ses", a:["ces","c'est"]},
  {q:"Regarde ___ montagnes, elles sont magnifiques !", b:"ces", a:["ses","s'est"]},
  {q:"Pose le livre ___, sur la table.", b:"là", a:["la","l'a"]},
  {q:"Il ___ vue hier au marché.", b:"l'a", a:["là","la"]},
  {q:"Ils promènent ___ chiens tous les matins.", b:"leurs", a:["leur","leures"]},
  {q:"Je ___ donne un bon conseil.", b:"leur", a:["leurs","leure"]},
  {q:"Il ___ trompé de chemin.", b:"s'est", a:["c'est","ses"]},
  {q:"___ une très bonne idée !", b:"C'est", a:["S'est","Ces"]}
],
p6_conjugaison: [
  {q:"Elles sont (partir) ___ très tôt. (passé composé)", b:"parties", a:["partis","partie"]},
  {q:"Nous avons (finir) ___ le travail. (passé composé)", b:"fini", a:["finit","finis"]},
  {q:"Elle est (venir) ___ hier soir. (passé composé)", b:"venue", a:["venu","venus"]},
  {q:"Si j'avais le temps, je (venir) ___ t'aider. (conditionnel)", b:"viendrais", a:["viendrai","venais"]},
  {q:"Demain, il (falloir) ___ partir tôt. (futur)", b:"faudra", a:["faudrait","falloira"]},
  {q:"Hier, vous êtes (aller) ___ au marché.", b:"allés", a:["allé","aller"]}
],
p6_grammaire_fonctions: [
  {q:"« Le petit chat » boit du lait. — Fonction du groupe ?", b:"sujet", a:["verbe","complément"]},
  {q:"Marie « mange » une pomme. — Fonction du mot ?", b:"verbe", a:["sujet","complément"]},
  {q:"Papa lit « un journal ». — Fonction du groupe ?", b:"complément direct", a:["sujet","verbe"]},
  {q:"« Demain », nous partirons en voyage. — Fonction ?", b:"complément de temps", a:["sujet","verbe"]}
],

/* ---------- PRIMAIRE : PROBLÈMES / GÉOMÉTRIE / ÉVEIL ---------- */
p5_problemes: [
  {q:"Un film commence à 14 h 40 et dure 1 h 35. À quelle heure finit-il ?", b:"16 h 15", a:["15 h 75","16 h 05"]},
  {q:"Marc court 2,5 km le matin et 1,8 km le soir. Distance totale ?", b:"4,3 km", a:["3,3 km","4,13 km"]},
  {q:"Une bouteille de 1,5 l remplit des verres de 25 cl. Combien de verres ?", b:"6", a:["5","8"]},
  {q:"3 kg de pommes coûtent 7,50 €. Quel est le prix d'1 kg ?", b:"2,50 €", a:["2,25 €","3,50 €"]}
],
p6_problemes: [
  {q:"Un réservoir de 60 l est rempli aux 3/4. Combien de litres contient-il ?", b:"45 l", a:["40 l","48 l"]},
  {q:"Tom dépense 1/3 de ses 45 €, puis encore 10 €. Combien lui reste-t-il ?", b:"20 €", a:["25 €","15 €"]},
  {q:"Une salle de 180 places est remplie à 90 %. Combien de spectateurs ?", b:"162", a:["171","144"]},
  {q:"Un train part à 8 h 45 et arrive à 11 h 20. Durée du trajet ?", b:"2 h 35", a:["3 h 25","2 h 45"]},
  {q:"Un magasin fait −25 % sur un jeu à 40 €. Quel est le nouveau prix ?", b:"30 €", a:["35 €","15 €"]}
],
p6_geometrie: [
  {q:"Un triangle avec 3 côtés égaux est un triangle...", b:"équilatéral", a:["isocèle","rectangle"]},
  {q:"Combien de faces a un cube ?", b:"6", a:["8","12"]},
  {q:"Combien d'arêtes a un cube ?", b:"12", a:["8","6"]},
  {q:"La somme des angles d'un triangle vaut toujours...", b:"180°", a:["90°","360°"]},
  {q:"Une pyramide à base carrée a combien de faces ?", b:"5", a:["4","6"]},
  {q:"Un angle plus petit qu'un angle droit est un angle...", b:"aigu", a:["obtus","plat"]}
],
p4_eveil: [
  {q:"L'eau qui bout se transforme en...", b:"vapeur", a:["glace","neige"]},
  {q:"Quel organe pompe le sang dans le corps ?", b:"le cœur", a:["le cerveau","l'estomac"]},
  {q:"Combien de régions compte la Belgique ?", b:"3", a:["2","4"]},
  {q:"Quelle est la capitale de la Belgique ?", b:"Bruxelles", a:["Liège","Anvers"]},
  {q:"Quelle mer borde la Belgique ?", b:"la mer du Nord", a:["la Méditerranée","la Baltique"]}
],
p6_eveil: [
  {q:"Quel fleuve passe par Liège et Namur ?", b:"la Meuse", a:["l'Escaut","la Sambre"]},
  {q:"Quelle période vient juste après le Moyen Âge ?", b:"les Temps modernes", a:["l'Antiquité","la Préhistoire"]},
  {q:"L'invention de l'écriture marque la fin de...", b:"la Préhistoire", a:["l'Antiquité","du Moyen Âge"]},
  {q:"La Belgique est devenue indépendante en...", b:"1830", a:["1815","1945"]},
  {q:"Quel est le point culminant de la Belgique ?", b:"le Signal de Botrange", a:["le Mont Blanc","la Citadelle de Namur"]},
  {q:"Dans une chaîne alimentaire, les plantes sont des...", b:"producteurs", a:["consommateurs","décomposeurs"]},
  {q:"Le courant électrique passe dans les matériaux...", b:"conducteurs", a:["isolants","transparents"]}
],

/* ---------- S1-S2 (vers le CE1D) ---------- */
s1_francais: [
  {q:"« Quelle belle journée ! » — Quel est le type de cette phrase ?", b:"exclamative", a:["interrogative","déclarative"]},
  {q:"« Viens ici tout de suite. » — Type de phrase ?", b:"impérative", a:["déclarative","exclamative"]},
  {q:"Les fleurs que j'ai (cueillir) ___ sont belles.", b:"cueillies", a:["cueilli","cueillis"]},
  {q:"Elles se sont (laver) ___ les mains.", b:"lavé", a:["lavées","lavés"]},
  {q:"« bien que » introduit une idée de...", b:"concession", a:["cause","conséquence"]}
],
s1_sciences: [
  {q:"L'unité de mesure de la masse dans le SI est...", b:"le kilogramme", a:["le gramme","le litre"]},
  {q:"La plus petite unité du vivant est...", b:"la cellule", a:["l'atome","l'organe"]},
  {q:"Le passage de l'état liquide à l'état gazeux s'appelle...", b:"la vaporisation", a:["la fusion","la condensation"]},
  {q:"Le passage de l'état solide à l'état liquide s'appelle...", b:"la fusion", a:["la solidification","la sublimation"]},
  {q:"Quel instrument mesure un volume de liquide ?", b:"le cylindre gradué", a:["la balance","le thermomètre"]}
],
s2_francais: [
  {q:"Les lettres qu'il a (écrire) ___ sont longues.", b:"écrites", a:["écrit","écrits"]},
  {q:"« car » exprime une relation de...", b:"cause", a:["conséquence","opposition"]},
  {q:"« donc » exprime une relation de...", b:"conséquence", a:["cause","condition"]},
  {q:"Dans « Le chat, affamé, miaulait », « affamé » est...", b:"une apposition (adjectif détaché)", a:["un sujet","un complément direct"]},
  {q:"« Il pleut, cependant nous sortons. » — « cependant » marque...", b:"l'opposition", a:["la cause","le but"]}
],
s2_math_qcm: [
  {q:"Dans un triangle rectangle, le côté le plus long s'appelle...", b:"l'hypoténuse", a:["la médiane","la hauteur"]},
  {q:"Théorème de Pythagore : côtés 3 et 4, hypoténuse = ?", b:"5", a:["7","6"]},
  {q:"Deux angles opposés par le sommet sont...", b:"égaux", a:["supplémentaires","complémentaires"]},
  {q:"La somme de deux angles supplémentaires vaut...", b:"180°", a:["90°","360°"]},
  {q:"(−3) × (−4) = ?", b:"12", a:["−12","−7"]}
],
s2_sciences: [
  {q:"La photosynthèse produit du glucose et...", b:"du dioxygène (O₂)", a:["du CO₂","de l'azote"]},
  {q:"Le sang riche en O₂ circule dans...", b:"les artères", a:["les veines caves","les alvéoles seules"]},
  {q:"L'unité de la force est...", b:"le newton (N)", a:["le joule (J)","le watt (W)"]},
  {q:"Un mélange dont on distingue les constituants est...", b:"hétérogène", a:["homogène","pur"]}
],

/* ---------- S3-S4 (vers le CE2D) — banques de démarrage ---------- */
s3_francais: [
  {q:"« Cet homme est un lion. » — Quelle figure de style ?", b:"une métaphore", a:["une comparaison","une hyperbole"]},
  {q:"« Il est fort comme un bœuf. » — Figure de style ?", b:"une comparaison", a:["une métaphore","une litote"]},
  {q:"« Je meurs de faim ! » — Figure de style ?", b:"une hyperbole", a:["un euphémisme","une métonymie"]},
  {q:"« Boire un verre » — Figure de style ?", b:"une métonymie", a:["une métaphore","une périphrase"]},
  {q:"« Ce n'est pas mauvais » pour dire « c'est bon » — Figure ?", b:"une litote", a:["une hyperbole","une anaphore"]}
],
s3_sciences: [
  {q:"Le noyau d'un atome contient des protons et des...", b:"neutrons", a:["électrons","photons"]},
  {q:"La charge de l'électron est...", b:"négative", a:["positive","neutre"]},
  {q:"Le symbole chimique de l'oxygène est...", b:"O", a:["Ox","G"]},
  {q:"H₂O est la formule de...", b:"l'eau", a:["l'oxygène","l'hydrogène pur"]},
  {q:"La vitesse se calcule par...", b:"distance ÷ temps", a:["temps ÷ distance","distance × temps"]}
],
s4_francais: [
  {q:"Un texte qui cherche à convaincre est un texte...", b:"argumentatif", a:["narratif","descriptif"]},
  {q:"La thèse d'un texte argumentatif est...", b:"l'idée défendue par l'auteur", a:["un exemple","la conclusion seule"]},
  {q:"« D'abord... ensuite... enfin » sont des connecteurs...", b:"d'organisation (énumération)", a:["d'opposition","de cause"]},
  {q:"Un argument s'appuie souvent sur...", b:"un exemple", a:["une rime","une métaphore obligatoire"]}
],
s4_math_qcm: [
  {q:"(a + b)² = ?", b:"a² + 2ab + b²", a:["a² + b²","a² − 2ab + b²"]},
  {q:"(a − b)(a + b) = ?", b:"a² − b²", a:["a² + b²","a² − 2ab + b²"]},
  {q:"La pente de la droite y = 3x − 2 est...", b:"3", a:["−2","x"]},
  {q:"La droite y = 3x − 2 coupe l'axe des y en...", b:"−2", a:["3","0"]},
  {q:"√144 = ?", b:"12", a:["14","11"]}
],
s4_histoire: [
  {q:"La Révolution française a commencé en...", b:"1789", a:["1815","1848"]},
  {q:"La Première Guerre mondiale s'est déroulée de...", b:"1914 à 1918", a:["1939 à 1945","1900 à 1905"]},
  {q:"La révolution industrielle a commencé grâce à...", b:"la machine à vapeur", a:["l'électricité","l'ordinateur"]},
  {q:"En 1830, la Belgique s'est séparée...", b:"des Pays-Bas", a:["de la France","de l'Allemagne"]}
],

/* ---------- S5-S6 (vers le CESS) — banques de démarrage ---------- */
s5_francais: [
  {q:"Quel courant littéraire valorise les sentiments et la nature (XIXᵉ) ?", b:"le romantisme", a:["le classicisme","le surréalisme"]},
  {q:"Zola et Maupassant appartiennent au courant...", b:"réaliste / naturaliste", a:["romantique","symboliste"]},
  {q:"Le surréalisme explore surtout...", b:"le rêve et l'inconscient", a:["la mythologie grecque","les règles classiques"]},
  {q:"Un alexandrin est un vers de...", b:"12 syllabes", a:["10 syllabes","8 syllabes"]}
],
s5_histoire: [
  {q:"Le krach boursier de Wall Street a eu lieu en...", b:"1929", a:["1914","1945"]},
  {q:"La Seconde Guerre mondiale s'est terminée en Europe en...", b:"1945", a:["1944","1946"]},
  {q:"La guerre froide opposait principalement...", b:"les États-Unis et l'URSS", a:["la France et l'Allemagne","la Chine et le Japon"]},
  {q:"Le mur de Berlin est tombé en...", b:"1989", a:["1991","1979"]}
],
s6_francais: [
  {q:"Dans une dissertation, la problématique est...", b:"la question centrale à laquelle on répond", a:["le premier exemple","la citation d'ouverture"]},
  {q:"Un raisonnement qui part du général vers le particulier est...", b:"déductif", a:["inductif","analogique"]},
  {q:"« Concéder » un argument adverse, c'est...", b:"en reconnaître une part de validité avant de le dépasser", a:["l'ignorer","le répéter"]},
  {q:"Camus et Sartre sont associés au courant...", b:"existentialiste", a:["romantique","parnassien"]}
],
s6_histoire: [
  {q:"Le traité de Rome (1957) crée...", b:"la Communauté économique européenne", a:["l'ONU","l'OTAN"]},
  {q:"La décolonisation du Congo belge a eu lieu en...", b:"1960", a:["1945","1975"]},
  {q:"Mai 68 est d'abord un mouvement...", b:"étudiant et social", a:["militaire","religieux"]},
  {q:"L'euro a été mis en circulation en...", b:"2002", a:["1999","2005"]}
],

/* ---------- S3 : enrichissement ---------- */
s3_math_qcm: [
  {q:"Une fonction du type y = ax représente...", b:"une proportionnalité directe", a:["une proportionnalité inverse","une constante"]},
  {q:"Le graphique de y = ax est...", b:"une droite passant par l'origine", a:["une parabole","une droite horizontale"]},
  {q:"Si y = 3x, quand x double, y...", b:"double", a:["triple","reste identique"]},
  {q:"Dans y = ax, le nombre a s'appelle...", b:"le coefficient de proportionnalité (la pente)", a:["l'ordonnée à l'origine","le discriminant"]},
  {q:"Un tableau est proportionnel si...", b:"les quotients y/x sont constants", a:["les différences sont constantes","x + y est constant"]},
  {q:"√81 = ?", b:"9", a:["8","18"]},
  {q:"2⁵ = ?", b:"32", a:["25","10"]},
  {q:"10⁻² = ?", b:"0,01", a:["−100","0,2"]},
  {q:"a³ × a² = ?", b:"a⁵", a:["a⁶","a"]},
  {q:"(a²)³ = ?", b:"a⁶", a:["a⁵","a⁸"]}
],
s3_conjugaison: [
  {q:"Il (finir) ___ son travail et sortit. (passé simple)", b:"finit", a:["finissait","finira"]},
  {q:"Ils (venir) ___ nous voir. (passé simple)", b:"vinrent", a:["venèrent","viennent"]},
  {q:"Elle (prendre) ___ son manteau et partit. (passé simple)", b:"prit", a:["prenait","prendra"]},
  {q:"Nous (voir) ___ soudain la mer. (passé simple)", b:"vîmes", a:["voyions","verrons"]},
  {q:"Il faut que tu (être) ___ à l'heure. (subjonctif)", b:"sois", a:["es","seras"]},
  {q:"Je veux qu'il (faire) ___ ses devoirs. (subjonctif)", b:"fasse", a:["fait","fera"]},
  {q:"Bien qu'elle (avoir) ___ raison, elle se tait. (subjonctif)", b:"ait", a:["a","aura"]},
  {q:"Il faut que nous (aller) ___ au magasin. (subjonctif)", b:"allions", a:["allons","irons"]}
],
s3_grammaire: [
  {q:"« Je pense que tu as raison. » — « que tu as raison » est...", b:"une proposition complétive", a:["une relative","une circonstancielle"]},
  {q:"« Le livre que je lis est passionnant. » — « que je lis » est...", b:"une proposition relative", a:["une complétive","une indépendante"]},
  {q:"« Quand il pleut, je reste chez moi. » — « Quand il pleut » est...", b:"une circonstancielle de temps", a:["une relative","une complétive"]},
  {q:"« Parce qu'il était fatigué » exprime...", b:"la cause", a:["le but","la conséquence"]},
  {q:"« pour que tu réussisses » exprime...", b:"le but", a:["la cause","la concession"]},
  {q:"« si bien qu'il a gagné » exprime...", b:"la conséquence", a:["la cause","la condition"]},
  {q:"Dans « la ville dont je rêve », le pronom relatif est...", b:"dont", a:["que","où"]},
  {q:"« dont » remplace un complément introduit par...", b:"de", a:["à","avec"]}
],
s3_bio: [
  {q:"La digestion transforme les aliments en...", b:"nutriments", a:["déchets uniquement","os"]},
  {q:"L'absorption des nutriments se fait surtout dans...", b:"l'intestin grêle", a:["l'estomac","le gros intestin"]},
  {q:"Les échanges gazeux se font dans les...", b:"alvéoles pulmonaires", a:["bronches","la trachée"]},
  {q:"Le sang retourne au cœur par...", b:"les veines", a:["les artères","les nerfs"]},
  {q:"L'organe qui filtre le sang et produit l'urine est...", b:"le rein", a:["le foie","la rate"]},
  {q:"Les muscles sont reliés aux os par...", b:"les tendons", a:["les ligaments","les cartilages"]},
  {q:"Les globules rouges transportent...", b:"le dioxygène", a:["les microbes","l'urine"]},
  {q:"Les globules blancs servent à...", b:"défendre l'organisme", a:["transporter l'O₂","digérer les aliments"]}
],
s3_histoire: [
  {q:"Christophe Colomb atteint l'Amérique en...", b:"1492", a:["1515","1453"]},
  {q:"La Renaissance est d'abord née en...", b:"Italie", a:["France","Angleterre"]},
  {q:"L'imprimerie moderne a été développée par...", b:"Gutenberg", a:["Colomb","Luther"]},
  {q:"Martin Luther est à l'origine de...", b:"la Réforme protestante", a:["la Renaissance","la Révolution française"]},
  {q:"Louis XIV est surnommé...", b:"le Roi-Soleil", a:["le Roi de fer","le Bien-Aimé"]},
  {q:"Le régime politique de Louis XIV est...", b:"la monarchie absolue", a:["la république","la démocratie"]},
  {q:"La prise de Constantinople par les Ottomans date de...", b:"1453", a:["1492","1517"]},
  {q:"Les philosophes des Lumières (XVIIIᵉ) défendent...", b:"la raison et la liberté", a:["l'absolutisme","le retour au Moyen Âge"]}
],
s3_geo: [
  {q:"Le plus long fleuve d'Europe est...", b:"la Volga", a:["le Danube","le Rhin"]},
  {q:"Le climat de la Belgique est...", b:"tempéré océanique", a:["méditerranéen","continental sec"]},
  {q:"La capitale de l'Allemagne est...", b:"Berlin", a:["Munich","Francfort"]},
  {q:"L'Union européenne compte...", b:"27 États membres", a:["15 États membres","40 États membres"]},
  {q:"Les courbes de niveau sur une carte indiquent...", b:"l'altitude", a:["la température","la population"]},
  {q:"À l'échelle 1/25 000, 1 cm sur la carte représente...", b:"250 m", a:["25 m","2,5 km"]},
  {q:"La densité de population se mesure en...", b:"habitants par km²", a:["habitants par pays","km² par habitant"]},
  {q:"Le détroit qui sépare l'Europe de l'Afrique est...", b:"Gibraltar", a:["le Bosphore","la Manche"]}
],
s3_anglais: [
  {q:"Yesterday, she ___ to London. (go)", b:"went", a:["goes","gone"]},
  {q:"I have ___ this film twice. (see)", b:"seen", a:["saw","sees"]},
  {q:"This exercise is ___ than the first one.", b:"easier", a:["more easy","easyer"]},
  {q:"It's the ___ day of my life!", b:"best", a:["most good","better"]},
  {q:"They ___ TV when I arrived. (watch)", b:"were watching", a:["watch","are watching"]},
  {q:"She has lived here ___ 2010.", b:"since", a:["for","during"]},
  {q:"I have known him ___ ten years.", b:"for", a:["since","ago"]},
  {q:"___ you ever been to Spain?", b:"Have", a:["Did","Are"]}
],

/* ---------- S4 : enrichissement ---------- */
s4_trigo: [
  {q:"Dans un triangle rectangle, sin d'un angle = ...", b:"côté opposé / hypoténuse", a:["côté adjacent / hypoténuse","opposé / adjacent"]},
  {q:"Dans un triangle rectangle, cos d'un angle = ...", b:"côté adjacent / hypoténuse", a:["opposé / hypoténuse","adjacent / opposé"]},
  {q:"Dans un triangle rectangle, tan d'un angle = ...", b:"côté opposé / côté adjacent", a:["adjacent / opposé","opposé / hypoténuse"]},
  {q:"sin 30° = ?", b:"1/2", a:["√3/2","√2/2"]},
  {q:"cos 60° = ?", b:"1/2", a:["√3/2","1"]},
  {q:"tan 45° = ?", b:"1", a:["0","√3"]},
  {q:"sin² x + cos² x = ?", b:"1", a:["0","2"]}
],
s4_sciences: [
  {q:"La loi d'Ohm s'écrit...", b:"U = R × I", a:["U = R / I","I = U × R"]},
  {q:"L'unité de la résistance électrique est...", b:"l'ohm (Ω)", a:["le volt (V)","l'ampère (A)"]},
  {q:"L'unité de la tension électrique est...", b:"le volt (V)", a:["l'ohm (Ω)","le watt (W)"]},
  {q:"La puissance électrique se calcule par...", b:"P = U × I", a:["P = U / I","P = R + I"]},
  {q:"Le symbole chimique du sodium est...", b:"Na", a:["So","S"]},
  {q:"Le symbole chimique du fer est...", b:"Fe", a:["F","Ir"]},
  {q:"Une réaction chimique conserve toujours...", b:"la masse (loi de Lavoisier)", a:["le volume","la couleur"]},
  {q:"Un pH égal à 7 correspond à une solution...", b:"neutre", a:["acide","basique"]},
  {q:"Un pH inférieur à 7 indique une solution...", b:"acide", a:["basique","neutre"]},
  {q:"La formule du dioxyde de carbone est...", b:"CO₂", a:["CO","C₂O"]}
],
s4_conjugaison: [
  {q:"Il faudrait que vous (venir) ___ demain. (subjonctif)", b:"veniez", a:["venez","viendrez"]},
  {q:"Je doute qu'il (pouvoir) ___ réussir. (subjonctif)", b:"puisse", a:["peut","pourra"]},
  {q:"Si j'étais riche, j'(acheter) ___ une maison.", b:"achèterais", a:["achèterai","achetais"]},
  {q:"Si tu viens demain, nous (aller) ___ au cinéma.", b:"irons", a:["irions","allions"]},
  {q:"Il a dit qu'il (venir) ___ le lendemain.", b:"viendrait", a:["viendra","vienne"]},
  {q:"Quoiqu'il (être) ___ jeune, il est très sage. (subjonctif)", b:"soit", a:["est","sera"]}
],
s4_geo: [
  {q:"La mondialisation désigne...", b:"l'intensification des échanges à l'échelle mondiale", a:["la disparition des frontières naturelles","l'isolement des économies"]},
  {q:"Une multinationale est...", b:"une entreprise implantée dans plusieurs pays", a:["un pays très peuplé","une organisation humanitaire"]},
  {q:"Le principal mode de transport du commerce mondial de marchandises est...", b:"le transport maritime par conteneurs", a:["l'avion","le train"]},
  {q:"Les trois grands pôles économiques mondiaux sont...", b:"l'Amérique du Nord, l'Europe et l'Asie de l'Est", a:["l'Afrique, l'Océanie et l'Antarctique","uniquement les États-Unis"]},
  {q:"Un exemple de pays émergent est...", b:"le Brésil", a:["la Belgique","le Luxembourg"]},
  {q:"L'exode rural désigne...", b:"le départ des campagnes vers les villes", a:["le retour vers les campagnes","les vacances à la mer"]}
],
s4_anglais: [
  {q:"If I ___ rich, I would travel the world. (be)", b:"were", a:["am","will be"]},
  {q:"This house ___ in 1900. (build, passive)", b:"was built", a:["built","is building"]},
  {q:"The book ___ by millions of people. (read, passive)", b:"is read", a:["reads","is reading"]},
  {q:"She said she ___ tired.", b:"was", a:["is","be"]},
  {q:"I look forward to ___ you soon.", b:"seeing", a:["see","saw"]},
  {q:"He asked me where I ___ .", b:"lived", a:["live","do live"]}
],

/* ---------- S5 : enrichissement ---------- */
s5_math_qcm: [
  {q:"Le discriminant de ax² + bx + c est...", b:"Δ = b² − 4ac", a:["Δ = b² + 4ac","Δ = 2ab − c"]},
  {q:"Si Δ > 0, l'équation du second degré a...", b:"deux solutions réelles distinctes", a:["aucune solution réelle","une seule solution"]},
  {q:"Si Δ = 0, l'équation du second degré a...", b:"une solution (racine double)", a:["deux solutions distinctes","aucune solution"]},
  {q:"La dérivée de x² est...", b:"2x", a:["x","x³/3"]},
  {q:"La dérivée de 3x est...", b:"3", a:["3x","0"]},
  {q:"La dérivée d'une constante est...", b:"0", a:["1","la constante elle-même"]},
  {q:"La dérivée de x³ est...", b:"3x²", a:["x²","3x"]},
  {q:"Une fonction est croissante là où sa dérivée est...", b:"positive", a:["négative","nulle partout"]},
  {q:"Le graphique de y = x² est...", b:"une parabole", a:["une droite","un cercle"]},
  {q:"L'abscisse du sommet de la parabole y = ax² + bx + c est...", b:"−b / 2a", a:["b / 2a","−c / a"]}
],
s5_sciences: [
  {q:"Une mole contient environ...", b:"6,02 × 10²³ entités", a:["1 000 entités","6,02 × 10¹⁰ entités"]},
  {q:"La masse molaire de l'eau (H₂O) vaut environ...", b:"18 g/mol", a:["10 g/mol","34 g/mol"]},
  {q:"Dans un MRU (mouvement rectiligne uniforme), la vitesse est...", b:"constante", a:["croissante","nulle"]},
  {q:"L'accélération se mesure en...", b:"m/s²", a:["m/s","km/h"]},
  {q:"La deuxième loi de Newton s'écrit...", b:"F = m × a", a:["F = m / a","F = v × t"]},
  {q:"L'ADN se trouve principalement dans...", b:"le noyau de la cellule", a:["la membrane","les muscles uniquement"]},
  {q:"Les 4 bases de l'ADN sont A, T, G et...", b:"C", a:["B","D"]},
  {q:"Un gène est...", b:"un fragment d'ADN codant un caractère", a:["une cellule","une protéine entière"]}
],
s5_litterature: [
  {q:"Victor Hugo a écrit...", b:"Les Misérables", a:["Madame Bovary","Germinal"]},
  {q:"Germinal est un roman de...", b:"Émile Zola", a:["Victor Hugo","Balzac"]},
  {q:"Madame Bovary est l'œuvre de...", b:"Gustave Flaubert", a:["Stendhal","Maupassant"]},
  {q:"Baudelaire est l'auteur de...", b:"Les Fleurs du mal", a:["Le Rouge et le Noir","Candide"]},
  {q:"« Le Dormeur du val » est un poème de...", b:"Arthur Rimbaud", a:["Paul Verlaine","Victor Hugo"]},
  {q:"Un sonnet comporte...", b:"14 vers", a:["12 vers","16 vers"]}
],
s5_geo: [
  {q:"L'IDH (indice de développement humain) mesure...", b:"la santé, l'éducation et le revenu", a:["uniquement la richesse","la superficie du pays"]},
  {q:"La transition démographique correspond à...", b:"la baisse de la mortalité puis de la natalité", a:["la hausse continue des deux","uniquement l'immigration"]},
  {q:"La principale source d'énergie fossile utilisée dans le monde est...", b:"le pétrole", a:["le solaire","l'uranium"]},
  {q:"Les énergies renouvelables incluent...", b:"le solaire et l'éolien", a:["le charbon","le gaz naturel"]},
  {q:"Un pays dit « en développement » se caractérise souvent par...", b:"un IDH plus faible", a:["une position dans l'hémisphère sud obligatoirement","l'absence totale de villes"]}
],
s5_anglais: [
  {q:"By next year, I ___ my studies. (finish)", b:"will have finished", a:["finished","have finished"]},
  {q:"I wish I ___ taller.", b:"were", a:["am","will be"]},
  {q:"The man ___ car was stolen called the police.", b:"whose", a:["who","which"]},
  {q:"She ___ be at home; the lights are on.", b:"must", a:["mustn't","can't"]},
  {q:"If I had known, I ___ earlier. (come)", b:"would have come", a:["came","will come"]}
],

/* ---------- S6 : enrichissement ---------- */
s6_math_qcm: [
  {q:"La dérivée de eˣ est...", b:"eˣ", a:["x·eˣ⁻¹","1"]},
  {q:"ln(1) = ?", b:"0", a:["1","e"]},
  {q:"ln(e) = ?", b:"1", a:["0","e"]},
  {q:"Une primitive de 2x est...", b:"x² + c", a:["2","2x²"]},
  {q:"La dérivée de sin x est...", b:"cos x", a:["−cos x","−sin x"]},
  {q:"Une probabilité est toujours comprise entre...", b:"0 et 1", a:["−1 et 1","1 et 100"]},
  {q:"Deux événements incompatibles vérifient...", b:"P(A ∩ B) = 0", a:["P(A ∪ B) = 0","P(A) = P(B)"]},
  {q:"La limite de 1/x quand x → +∞ vaut...", b:"0", a:["+∞","1"]},
  {q:"Une asymptote horizontale traduit...", b:"une limite finie à l'infini", a:["une racine de la fonction","un maximum"]}
],
s6_sciences: [
  {q:"Le pH d'un acide fort concentré est...", b:"proche de 0 à 2", a:["proche de 7","supérieur à 10"]},
  {q:"Une base libère en solution aqueuse des ions...", b:"OH⁻", a:["H⁺","toujours Na⁺"]},
  {q:"L'unité de l'énergie est...", b:"le joule (J)", a:["le watt (W)","le newton (N)"]},
  {q:"La théorie de l'évolution est associée à...", b:"Charles Darwin", a:["Isaac Newton","Louis Pasteur"]},
  {q:"Les anticorps sont produits par...", b:"les lymphocytes B", a:["les globules rouges","les neurones"]},
  {q:"Un vaccin stimule...", b:"la mémoire immunitaire", a:["la digestion","la croissance osseuse"]},
  {q:"E = mc² relie...", b:"l'énergie et la masse", a:["la force et la vitesse","le temps et l'espace"]},
  {q:"La vitesse de la lumière vaut environ...", b:"300 000 km/s", a:["150 000 km/s","3 000 km/s"]}
],
s6_litterature: [
  {q:"L'Étranger est un roman de...", b:"Albert Camus", a:["Jean-Paul Sartre","André Gide"]},
  {q:"« L'enfer, c'est les autres » est une réplique de...", b:"Jean-Paul Sartre", a:["Albert Camus","Samuel Beckett"]},
  {q:"En attendant Godot est une pièce de...", b:"Samuel Beckett", a:["Eugène Ionesco","Jean Anouilh"]},
  {q:"Le théâtre de l'absurde est représenté par...", b:"Ionesco et Beckett", a:["Hugo et Lamartine","Molière et Racine"]},
  {q:"Le registre qui fait rire pour critiquer est...", b:"la satire", a:["le lyrisme","le tragique"]}
],
s6_geo: [
  {q:"L'ONU a été créée en...", b:"1945", a:["1919","1957"]},
  {q:"Le Conseil de sécurité de l'ONU compte ___ membres permanents.", b:"5", a:["10","15"]},
  {q:"L'OTAN est une alliance...", b:"militaire", a:["commerciale","sportive"]},
  {q:"Les BRICS regroupent notamment...", b:"le Brésil, la Russie, l'Inde et la Chine", a:["la Belgique et la France","les pays de la zone euro"]},
  {q:"La principale réserve d'eau douce de la planète se trouve dans...", b:"les glaces polaires", a:["les fleuves","les nuages"]},
  {q:"Le réchauffement climatique actuel est principalement dû...", b:"aux gaz à effet de serre d'origine humaine", a:["aux volcans","aux marées"]}
],

/* ---------- Compléments primaire ---------- */
p1_sons: [
  {q:"Dans quel mot entend-on le son [ou] ?", b:"loup", a:["lit","lac"]},
  {q:"Dans quel mot entend-on le son [ch] ?", b:"chat", a:["sac","rat"]},
  {q:"Dans quel mot entend-on le son [on] ?", b:"ballon", a:["banane","vélo"]},
  {q:"Dans quel mot entend-on le son [an] ?", b:"maman", a:["moto","lune"]},
  {q:"Dans quel mot entend-on le son [oi] ?", b:"roi", a:["rue","riz"]},
  {q:"Dans quel mot entend-on le son [in] ?", b:"lapin", a:["lune","loup"]}
],
p2_contraires: [
  {q:"Le contraire de « grand » est...", b:"petit", a:["gros","haut"]},
  {q:"Le contraire de « chaud » est...", b:"froid", a:["tiède","doux"]},
  {q:"Le contraire de « jour » est...", b:"nuit", a:["soir","matin"]},
  {q:"Le contraire de « ouvert » est...", b:"fermé", a:["cassé","grand"]},
  {q:"Le contraire de « monter » est...", b:"descendre", a:["courir","sauter"]},
  {q:"Le contraire de « propre » est...", b:"sale", a:["mouillé","vieux"]}
],
p3_vocabulaire: [
  {q:"Un synonyme de « content » est...", b:"joyeux", a:["triste","fâché"]},
  {q:"Un mot de la même famille que « dent » est...", b:"dentiste", a:["danse","dune"]},
  {q:"Un mot de la même famille que « terre » est...", b:"terrain", a:["tirer","taire"]},
  {q:"Un synonyme de « maison » est...", b:"habitation", a:["magasin","jardin"]},
  {q:"Le mot générique pour pomme, poire, banane est...", b:"fruit", a:["légume","dessert"]},
  {q:"Le mot générique pour chien, chat, cheval est...", b:"animal", a:["meuble","outil"]}
],
p5_eveil: [
  {q:"Combien de provinces compte la Belgique ?", b:"10", a:["9","5"]},
  {q:"La capitale de la Wallonie est...", b:"Namur", a:["Liège","Charleroi"]},
  {q:"Le squelette humain sert à...", b:"soutenir le corps", a:["digérer les aliments","respirer"]},
  {q:"Nos régions ont été conquises par les Romains sous...", b:"Jules César", a:["Napoléon","Charlemagne"]},
  {q:"L'eau représente environ quelle part du corps humain ?", b:"environ 60 %", a:["10 %","95 %"]},
  {q:"Le Soleil est...", b:"une étoile", a:["une planète","un satellite"]}
],

/* ---------- Néerlandais S3-S6 ---------- */
s3_neerlandais: [
  {q:"« Le chien » se dit en néerlandais...", b:"de hond", a:["het hond","de kat"]},
  {q:"Ik ___ twaalf jaar. (zijn)", b:"ben", a:["is","bent"]},
  {q:"Jij ___ mijn vriend. (zijn)", b:"bent", a:["ben","is"]},
  {q:"Wij ___ een hond. (hebben)", b:"hebben", a:["heeft","hebt"]},
  {q:"Hij ___ een fiets. (hebben)", b:"heeft", a:["heb","hebben"]},
  {q:"Le pluriel de « boek » (livre) est...", b:"boeken", a:["boekken","boeks"]},
  {q:"« Goedemorgen » signifie...", b:"bonjour (le matin)", a:["bonne nuit","au revoir"]},
  {q:"« La maison » se dit...", b:"het huis", a:["de huis","het huizen"]}
],
s4_neerlandais: [
  {q:"Gisteren heb ik ___ . (werken)", b:"gewerkt", a:["gewerken","werkt"]},
  {q:"Ik ___ goed zwemmen. (kunnen)", b:"kan", a:["kunt","kunnen"]},
  {q:"Je ___ hier niet roken. (mogen)", b:"mag", a:["mogen","magt"]},
  {q:"Wij ___ naar school gaan. (moeten)", b:"moeten", a:["moet","moetten"]},
  {q:"Hij heeft een boek ___ . (lezen)", b:"gelezen", a:["geleest","lezen"]},
  {q:"« Ik wil » signifie...", b:"je veux", a:["je peux","je dois"]}
],
s5_neerlandais: [
  {q:"Hij zegt dat hij morgen ___ . (le verbe se place en fin de subordonnée)", b:"komt", a:["komt hij","kom"]},
  {q:"Ik blijf thuis omdat ik ziek ___ .", b:"ben", a:["ben ik","is"]},
  {q:"Vroeger ___ ik in Gent. (wonen, prétérit)", b:"woonde", a:["woont","gewoond"]},
  {q:"Toen ik klein was, ___ ik veel. (spelen, prétérit)", b:"speelde", a:["speel","gespeeld"]},
  {q:"« hoewel » signifie...", b:"bien que", a:["parce que","donc"]},
  {q:"« daarom » signifie...", b:"c'est pourquoi", a:["cependant","ensuite"]}
],
s6_neerlandais: [
  {q:"« solliciteren » signifie...", b:"poser sa candidature", a:["se plaindre","réfléchir"]},
  {q:"« namelijk » signifie...", b:"en effet / à savoir", a:["jamais","peut-être"]},
  {q:"Ik ___ graag komen, maar ik heb geen tijd. (conditionnel)", b:"zou", a:["zal","wil"]},
  {q:"« de werkgever » est...", b:"l'employeur", a:["l'employé","le chômeur"]},
  {q:"« Hij is aan het werken » signifie...", b:"il est en train de travailler", a:["il a travaillé","il travaillera"]},
  {q:"« zowel ... als » signifie...", b:"aussi bien ... que", a:["ni ... ni","soit ... soit"]}
]
};
