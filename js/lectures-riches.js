/* ============================================================
   LECTURES RICHES — École+
   Textes progressifs : t (niv 1) · +t2 (dès niv 2) · +t3 (dès niv 4).
   Questions graduées : n:1 explicite simple → n:5 inférence,
   vocabulaire en contexte, intention de l'auteur.
   Fusionnées dans LECTURES au démarrage (moteur.js).
   ============================================================ */

const LECTURES_RICHES = {

fr1: [
 {t:"Léo a un poisson rouge. Il s'appelle Bulle et vit dans un bocal rond.",
  t2:"Chaque matin, Léo lui donne trois petites graines. Quand il a faim, Bulle tourne très vite dans son bocal.",
  t3:"Un jour, maman achète un deuxième poisson. Maintenant, Bulle n'est plus jamais tout seul, et Léo est très fier de ses deux amis.",
  q:[
   {n:1, q:"Quel animal a Léo ?", b:"un poisson rouge", a:["un chat","un oiseau"]},
   {n:1, q:"Comment s'appelle le poisson ?", b:"Bulle", a:["Léo","Splash"]},
   {n:1, q:"Où vit Bulle ?", b:"dans un bocal rond", a:["dans la mer","dans un seau"]},
   {n:2, q:"Combien de graines reçoit Bulle le matin ?", b:"trois", a:["deux","cinq"]},
   {n:2, q:"Que fait Bulle quand il a faim ?", b:"il tourne très vite", a:["il dort","il saute hors de l'eau"]},
   {n:3, q:"Qui achète le deuxième poisson ?", b:"maman", a:["papa","Léo"]},
   {n:3, q:"À quel moment Léo nourrit-il Bulle ?", b:"le matin", a:["le soir","à midi"]},
   {n:4, q:"Pourquoi Bulle n'est-il plus jamais seul ?", b:"parce qu'il y a un deuxième poisson", a:["parce que Léo dort à côté","parce que le bocal est rond"]},
   {n:4, q:"Comment sait-on que Bulle a faim ?", b:"à sa façon de tourner vite", a:["il change de couleur","il fait des bulles bleues"]},
   {n:5, q:"Que ressent Léo à la fin de l'histoire ?", b:"de la fierté", a:["de la peur","de la colère"]}
  ]},
 {t:"Ce matin, tout est blanc dehors. Anna met son bonnet et ses gants.",
  t2:"Avec son frère, elle monte en haut de la petite colline. Ils descendent en luge en criant de joie.",
  t3:"À midi, les joues toutes rouges, ils rentrent boire un chocolat chaud. Anna pense déjà à recommencer demain.",
  q:[
   {n:1, q:"Que met Anna avant de sortir ?", b:"son bonnet et ses gants", a:["son maillot","ses lunettes de soleil"]},
   {n:1, q:"Avec qui joue Anna ?", b:"son frère", a:["sa cousine","son chien"]},
   {n:1, q:"Comment est tout dehors ce matin ?", b:"blanc", a:["vert","mouillé de pluie"]},
   {n:2, q:"Sur quoi descendent-ils la colline ?", b:"une luge", a:["des skis","un vélo"]},
   {n:2, q:"Où montent-ils ?", b:"en haut de la petite colline", a:["sur le toit","dans un arbre"]},
   {n:3, q:"Que boivent-ils à midi ?", b:"un chocolat chaud", a:["un jus d'orange","une soupe"]},
   {n:3, q:"Comment sont leurs joues en rentrant ?", b:"toutes rouges", a:["toutes blanches","toutes sales"]},
   {n:4, q:"Pourquoi tout est-il blanc dehors ?", b:"il a neigé pendant la nuit", a:["il y a du brouillard","quelqu'un a peint la rue"]},
   {n:4, q:"Pourquoi crient-ils en descendant ?", b:"de joie", a:["de peur","pour appeler maman"]},
   {n:5, q:"Que veut faire Anna demain ?", b:"refaire de la luge", a:["rester au lit","ranger la luge"]}
  ]}
],

fr2: [
 {t:"Chaque vendredi, la classe de Tom va à la bibliothèque de l'école.",
  t2:"Tom choisit toujours des livres sur les animaux. Cette semaine, il emprunte un album sur les loups et une bande dessinée.",
  t3:"La bibliothécaire lui conseille aussi un documentaire sur les renards. Tom promet de tout rendre dans quinze jours, comme le demande le règlement.",
  q:[
   {n:1, q:"Quel jour la classe va-t-elle à la bibliothèque ?", b:"le vendredi", a:["le lundi","le mercredi"]},
   {n:1, q:"Où se trouve la bibliothèque ?", b:"à l'école", a:["au village","dans le bus"]},
   {n:1, q:"Quels livres Tom préfère-t-il ?", b:"les livres sur les animaux", a:["les livres de cuisine","les livres de blagues"]},
   {n:2, q:"Qu'emprunte Tom cette semaine ?", b:"un album sur les loups et une BD", a:["deux romans","un dictionnaire"]},
   {n:2, q:"Qui conseille un livre à Tom ?", b:"la bibliothécaire", a:["la directrice","son voisin"]},
   {n:3, q:"Sur quel animal porte le documentaire conseillé ?", b:"les renards", a:["les loups","les ours"]},
   {n:3, q:"Dans combien de temps doit-il rendre les livres ?", b:"quinze jours", a:["une semaine","un mois"]},
   {n:4, q:"Pourquoi Tom doit-il rendre les livres à temps ?", b:"c'est le règlement de la bibliothèque", a:["la bibliothèque ferme pour toujours","son cartable est trop petit"]},
   {n:4, q:"Que montre le choix des livres de Tom ?", b:"qu'il s'intéresse beaucoup aux animaux", a:["qu'il déteste lire","qu'il choisit au hasard"]},
   {n:5, q:"Quel mot du texte indique une habitude ?", b:"« chaque » (vendredi)", a:["« cette » semaine","« aussi »"]}
  ]},
 {t:"Le hamster de la classe s'appelle Noisette. Ce matin, sa cage est ouverte et vide !",
  t2:"Toute la classe le cherche sans faire de bruit. Sarah aperçoit une petite queue derrière l'armoire à dessins.",
  t3:"La maîtresse pose des graines de tournesol sur le sol. Gourmand, Noisette sort tout doucement et se laisse attraper. Désormais, on vérifiera la porte de la cage chaque soir.",
  q:[
   {n:1, q:"Comment s'appelle le hamster ?", b:"Noisette", a:["Caramel","Biscotte"]},
   {n:1, q:"Que découvre-t-on ce matin ?", b:"la cage ouverte et vide", a:["une nouvelle cage","un deuxième hamster"]},
   {n:1, q:"À qui appartient le hamster ?", b:"à la classe", a:["à Sarah","à la directrice"]},
   {n:2, q:"Qui aperçoit le hamster ?", b:"Sarah", a:["la maîtresse","Tom"]},
   {n:2, q:"Où Noisette se cache-t-il ?", b:"derrière l'armoire à dessins", a:["sous le bureau","dans un cartable"]},
   {n:3, q:"Que pose la maîtresse sur le sol ?", b:"des graines de tournesol", a:["du fromage","des carottes"]},
   {n:3, q:"Comment la classe cherche-t-elle ?", b:"sans faire de bruit", a:["en criant son nom","en courant partout"]},
   {n:4, q:"Pourquoi les graines font-elles sortir Noisette ?", b:"parce qu'il est gourmand", a:["parce qu'il a peur","parce qu'il fait froid"]},
   {n:4, q:"Que veut dire « désormais » ?", b:"à partir de maintenant", a:["hier","peut-être"]},
   {n:5, q:"Quelle leçon la classe tire-t-elle de l'aventure ?", b:"vérifier la porte de la cage chaque soir", a:["ne plus avoir d'animal","laisser la cage ouverte"]}
  ]}
],

fr3: [
 {t:"Ce jeudi, l'école organise une course d'orientation dans le bois voisin. Chaque équipe reçoit une carte et doit retrouver six balises.",
  t2:"L'équipe de Naïm trouve vite les trois premières, cachées près du ruisseau. La quatrième leur donne du fil à retordre : elle est accrochée derrière un vieux chêne creux.",
  t3:"À l'arrivée, l'équipe termine deuxième, à une minute des vainqueurs. Naïm n'est pas déçu : il a adoré lire la carte et, promet-il, son équipe gagnera l'an prochain.",
  q:[
   {n:1, q:"Où se déroule la course d'orientation ?", b:"dans le bois voisin", a:["dans la cour","au parc de la ville"]},
   {n:1, q:"Combien de balises faut-il retrouver ?", b:"six", a:["quatre","dix"]},
   {n:1, q:"Que reçoit chaque équipe ?", b:"une carte", a:["une boussole seulement","un téléphone"]},
   {n:2, q:"Où sont cachées les trois premières balises ?", b:"près du ruisseau", a:["dans une grotte","au sommet d'une colline"]},
   {n:2, q:"Quel jour a lieu la course ?", b:"jeudi", a:["mardi","samedi"]},
   {n:3, q:"Où se trouve la quatrième balise ?", b:"derrière un vieux chêne creux", a:["sous un pont","dans le ruisseau"]},
   {n:3, q:"À quelle place termine l'équipe de Naïm ?", b:"deuxième", a:["première","dernière"]},
   {n:4, q:"Que signifie « donner du fil à retordre » ?", b:"poser beaucoup de difficultés", a:["faire gagner du temps","donner un indice"]},
   {n:4, q:"Quel écart sépare l'équipe des vainqueurs ?", b:"une minute", a:["une heure","dix minutes"]},
   {n:5, q:"Pourquoi Naïm n'est-il pas déçu ?", b:"il a aimé l'activité et croit en une victoire future", a:["il déteste gagner","il n'a pas participé"]}
  ]},
 {t:"Depuis le printemps, papy soigne un potiron dans son potager. Il veut participer au concours du village en octobre.",
  t2:"Chaque soir, il l'arrose et le protège du froid avec une vieille couverture. Le potiron grossit tellement qu'il faut une brouette pour le déplacer.",
  t3:"Le jour du concours, la balance affiche 38 kilos : deuxième prix ! Papy sourit et glisse à sa petite-fille : « L'année prochaine, on visera les 50 kilos, toi et moi. »",
  q:[
   {n:1, q:"Que cultive papy ?", b:"un potiron", a:["une citrouille de Halloween achetée","des tomates"]},
   {n:1, q:"Où pousse le potiron ?", b:"dans le potager", a:["sur le balcon","dans une serre municipale"]},
   {n:1, q:"Depuis quand papy s'en occupe-t-il ?", b:"depuis le printemps", a:["depuis hier","depuis dix ans"]},
   {n:2, q:"Quand a lieu le concours ?", b:"en octobre", a:["en juin","à Noël"]},
   {n:2, q:"Avec quoi protège-t-il le potiron du froid ?", b:"une vieille couverture", a:["une bâche neuve","du papier journal"]},
   {n:3, q:"Combien pèse le potiron au concours ?", b:"38 kilos", a:["50 kilos","28 kilos"]},
   {n:3, q:"Quel prix remporte papy ?", b:"le deuxième", a:["le premier","aucun"]},
   {n:4, q:"Pourquoi faut-il une brouette ?", b:"le potiron est devenu trop lourd", a:["le potager est loin","papy est pressé"]},
   {n:4, q:"Quel objectif papy fixe-t-il pour l'an prochain ?", b:"atteindre 50 kilos", a:["gagner 100 euros","planter des courgettes"]},
   {n:5, q:"Que révèle la dernière phrase sur papy et sa petite-fille ?", b:"ils partagent un projet complice", a:["ils sont fâchés","ils abandonnent le jardinage"]}
  ]}
],

fr4: [
 {t:"Sans les abeilles, nos assiettes seraient bien vides : une grande partie des fruits et légumes dépend de leur pollinisation. En butinant de fleur en fleur, l'abeille transporte le pollen qui permet aux plantes de produire des graines.",
  t2:"Or, depuis plusieurs années, les colonies s'affaiblissent. Les pesticides, le manque de fleurs sauvages et certains parasites fragilisent les ruches.",
  t3:"Chacun peut agir : semer des fleurs mellifères sur son balcon, éviter les insecticides au jardin ou installer un hôtel à insectes. Des gestes simples pour un enjeu immense.",
  q:[
   {n:1, q:"Quel insecte est au centre de ce texte ?", b:"l'abeille", a:["la fourmi","le papillon"]},
   {n:1, q:"Que transporte l'abeille de fleur en fleur ?", b:"le pollen", a:["le miel","les graines"]},
   {n:1, q:"Où l'abeille butine-t-elle ?", b:"de fleur en fleur", a:["dans les rivières","sous la terre"]},
   {n:2, q:"Que permet la pollinisation aux plantes ?", b:"de produire des graines", a:["de changer de couleur","de pousser sans eau"]},
   {n:2, q:"Que deviennent les colonies depuis plusieurs années ?", b:"elles s'affaiblissent", a:["elles doublent","elles déménagent en ville"]},
   {n:3, q:"Cite une cause de l'affaiblissement des ruches.", b:"les pesticides", a:["le bruit des villes","la pluie"]},
   {n:3, q:"Que peut-on installer pour aider les insectes ?", b:"un hôtel à insectes", a:["un piège lumineux","une ruche en verre"]},
   {n:4, q:"Pourquoi nos assiettes seraient-elles « bien vides » sans abeilles ?", b:"beaucoup de fruits et légumes dépendent de la pollinisation", a:["les abeilles cuisinent le miel","les abeilles arrosent les champs"]},
   {n:4, q:"Que signifie « mellifères » ?", b:"qui produisent du nectar attirant les abeilles", a:["qui piquent","qui fleurissent en hiver"]},
   {n:5, q:"Quel est le but principal de ce texte ?", b:"informer et inciter à agir", a:["faire peur","vendre du miel"]}
  ]},
 {t:"Vendredi soir, en pleine tempête, toute la rue est plongée dans le noir : panne de courant générale.",
  t2:"Chez Lina, on allume des bougies et papa ressort le vieux jeu de cartes. Entre deux parties, la famille écoute la pluie battre les fenêtres, et personne ne réclame la télévision.",
  t3:"Quand la lumière revient vers 22 heures, un cri déçu traverse le salon. Depuis, chaque premier vendredi du mois, les écrans restent éteints : la « soirée bougies » est devenue une tradition.",
  q:[
   {n:1, q:"Quand la panne a-t-elle lieu ?", b:"vendredi soir", a:["lundi matin","dimanche midi"]},
   {n:1, q:"Quelle est la météo ce soir-là ?", b:"une tempête", a:["une canicule","une nuit calme"]},
   {n:1, q:"Qu'allume-t-on chez Lina ?", b:"des bougies", a:["une lampe de poche géante","un feu de camp"]},
   {n:2, q:"À quoi joue la famille ?", b:"aux cartes", a:["aux échecs","à un jeu vidéo"]},
   {n:2, q:"Qu'entend la famille pendant les parties ?", b:"la pluie contre les fenêtres", a:["la télévision","les voisins qui chantent"]},
   {n:3, q:"À quelle heure la lumière revient-elle ?", b:"vers 22 heures", a:["à minuit","vers 20 heures"]},
   {n:3, q:"Que se passe-t-il désormais chaque premier vendredi du mois ?", b:"les écrans restent éteints", a:["on regarde un film","on invite les voisins"]},
   {n:4, q:"Pourquoi entend-on un cri « déçu » au retour de la lumière ?", b:"la famille s'amusait très bien sans électricité", a:["la télévision est cassée","les bougies ont brûlé le tapis"]},
   {n:4, q:"Que signifie « plongée dans le noir » ?", b:"privée de toute lumière", a:["repeinte en noir","inondée"]},
   {n:5, q:"Quelle idée ce récit veut-il transmettre ?", b:"on peut passer de très bons moments sans écrans", a:["les pannes sont dangereuses","il faut acheter des bougies"]}
  ]}
],

en1: [
 {t:"This is Ben. He is nine years old. He has a little grey rabbit.",
  t2:"The rabbit's name is Fluffy. Every day, Ben gives him carrots and fresh water. Fluffy loves jumping in the garden.",
  t3:"On Sunday, Fluffy hid under the old red car. Ben looked for him for one hour! Now, the garden has a small fence.",
  q:[
   {n:1, q:"Quel âge a Ben ?", b:"9 ans", a:["7 ans","11 ans"]},
   {n:1, q:"Quel animal a Ben ?", b:"un lapin", a:["un hamster","un chat"]},
   {n:1, q:"De quelle couleur est l'animal ?", b:"gris", a:["blanc","brun"]},
   {n:2, q:"Que donne Ben à Fluffy chaque jour ?", b:"des carottes et de l'eau fraîche", a:["des graines","du pain"]},
   {n:2, q:"Qu'adore faire Fluffy ?", b:"sauter dans le jardin", a:["dormir toute la journée","creuser sous la maison"]},
   {n:3, q:"Où Fluffy s'est-il caché dimanche ?", b:"sous la vieille voiture rouge", a:["derrière l'arbre","dans le garage"]},
   {n:3, q:"Combien de temps Ben l'a-t-il cherché ?", b:"une heure", a:["dix minutes","toute la nuit"]},
   {n:4, q:"Pourquoi le jardin a-t-il maintenant une barrière ?", b:"pour que Fluffy ne se sauve plus", a:["pour décorer","pour empêcher les oiseaux d'entrer"]},
   {n:4, q:"Que montre le point d'exclamation après « one hour » ?", b:"que c'était long et inquiétant", a:["que Ben rigolait","que le texte est fini"]},
   {n:5, q:"Que comprend-on des sentiments de Ben pour Fluffy ?", b:"il tient beaucoup à lui et en prend soin", a:["il veut le vendre","il l'oublie souvent"]}
  ]}
],

en2: [
 {t:"Next Friday, our class is going to the seaside by train.",
  t2:"We will visit the fish market in the morning and build sandcastles after lunch. The teacher says we must bring a hat and a bottle of water.",
  t3:"Last year, the trip was cancelled because of the rain, so everybody hopes for sunny weather. Emma checks the forecast every evening!",
  q:[
   {n:1, q:"Où la classe va-t-elle ?", b:"à la mer", a:["à la montagne","au zoo"]},
   {n:1, q:"Comment la classe voyage-t-elle ?", b:"en train", a:["en car","à vélo"]},
   {n:1, q:"Quand a lieu l'excursion ?", b:"vendredi prochain", a:["demain","le mois prochain"]},
   {n:2, q:"Que visiteront-ils le matin ?", b:"le marché aux poissons", a:["un musée","le port de plaisance"]},
   {n:2, q:"Que faut-il apporter ?", b:"un chapeau et une bouteille d'eau", a:["un pique-nique complet","des jumelles"]},
   {n:3, q:"Que feront-ils après le repas de midi ?", b:"des châteaux de sable", a:["une sieste","du pédalo"]},
   {n:3, q:"Pourquoi le voyage a-t-il été annulé l'an dernier ?", b:"à cause de la pluie", a:["à cause d'une grève","à cause du froid"]},
   {n:4, q:"Pourquoi Emma regarde-t-elle la météo chaque soir ?", b:"elle espère du beau temps pour l'excursion", a:["c'est son devoir de sciences","elle veut devenir présentatrice météo"]},
   {n:4, q:"Que signifie « forecast » ?", b:"les prévisions météo", a:["le programme télé","la carte du littoral"]},
   {n:5, q:"Quel sentiment domine dans la classe ?", b:"l'espoir et l'impatience", a:["l'ennui","la peur du train"]}
  ]}
],

en3: [
 {t:"On Saturdays, Chloe helps at her uncle's bakery in the town centre.",
  t2:"She starts at seven, puts the warm bread on the shelves and serves the first customers. With the money, she is saving for a second-hand guitar.",
  t3:"Her uncle says she is the fastest helper he has ever had. Next month, he will teach her how to make croissants — Chloe can't wait.",
  q:[
   {n:1, q:"Où Chloé aide-t-elle le samedi ?", b:"à la boulangerie de son oncle", a:["au supermarché","chez la voisine"]},
   {n:1, q:"Où se trouve la boulangerie ?", b:"dans le centre-ville", a:["à la campagne","près de la gare"]},
   {n:1, q:"Quel jour Chloé travaille-t-elle ?", b:"le samedi", a:["le dimanche","le mercredi"]},
   {n:2, q:"À quelle heure commence-t-elle ?", b:"à 7 h", a:["à 9 h","à 6 h"]},
   {n:2, q:"Que place-t-elle sur les étagères ?", b:"le pain chaud", a:["les gâteaux d'anniversaire","les boissons"]},
   {n:3, q:"Pour quoi économise-t-elle ?", b:"une guitare d'occasion", a:["un vélo neuf","un téléphone"]},
   {n:3, q:"Que dit son oncle à son sujet ?", b:"c'est l'aide la plus rapide qu'il ait eue", a:["elle arrive trop tard","elle parle trop"]},
   {n:4, q:"Qu'apprendra-t-elle le mois prochain ?", b:"à faire des croissants", a:["à tenir la caisse","à conduire la camionnette"]},
   {n:4, q:"Que signifie « second-hand » ?", b:"d'occasion", a:["à deux mains","de seconde qualité"]},
   {n:5, q:"Que révèle l'expression « can't wait » ?", b:"son impatience enthousiaste", a:["sa fatigue","son hésitation"]}
  ]}
],

en4: [
 {t:"Last Sunday, about forty volunteers cleaned the banks of the river in our town.",
  t2:"In three hours, they collected twenty bags of rubbish: bottles, cans and even an old bicycle. Most of the waste came from the picnic area near the bridge.",
  t3:"The organisers were pleased but realistic: without bins and clear signs, the rubbish will be back within weeks. They have written to the town council to ask for both.",
  q:[
   {n:1, q:"Qu'ont fait les bénévoles dimanche ?", b:"nettoyé les rives de la rivière", a:["planté des arbres","repeint le pont"]},
   {n:1, q:"Combien de bénévoles ont participé ?", b:"environ quarante", a:["environ dix","plus de cent"]},
   {n:1, q:"Où l'action s'est-elle déroulée ?", b:"au bord de la rivière de la ville", a:["sur la plage","dans la forêt"]},
   {n:2, q:"Combien de sacs ont été remplis ?", b:"vingt", a:["quarante","douze"]},
   {n:2, q:"Combien de temps a duré le nettoyage ?", b:"trois heures", a:["toute la journée","une heure"]},
   {n:3, q:"D'où venait la plupart des déchets ?", b:"de l'aire de pique-nique près du pont", a:["des usines","des bateaux"]},
   {n:3, q:"Quel objet inhabituel a été retrouvé ?", b:"un vieux vélo", a:["un frigo","un canapé"]},
   {n:4, q:"Pourquoi les organisateurs restent-ils « réalistes » ?", b:"sans poubelles ni panneaux, les déchets reviendront vite", a:["ils pensent avoir tout ramassé","la rivière sera déviée"]},
   {n:4, q:"Qu'ont-ils demandé au conseil communal ?", b:"des poubelles et des panneaux", a:["une prime","une nouvelle passerelle"]},
   {n:5, q:"Quelle est l'idée principale du texte ?", b:"un nettoyage doit s'accompagner de mesures durables", a:["les bénévoles sont inutiles","il faut interdire les pique-niques"]}
  ]}
],

en5: [
 {t:"More and more Belgian students take a part-time job during the school year.",
  t2:"Supporters say it teaches responsibility and helps young people manage money. Critics answer that late shifts can hurt sleep and school results.",
  t3:"Recent surveys suggest a balance: fewer than ten hours a week seems to bring the benefits without the drawbacks. As often, the question is not whether to work, but how much.",
  q:[
   {n:1, q:"De quoi parle ce texte ?", b:"du travail étudiant à temps partiel", a:["des vacances scolaires","des examens"]},
   {n:1, q:"Dans quel pays se situe le phénomène décrit ?", b:"en Belgique", a:["aux États-Unis","en Espagne"]},
   {n:1, q:"Quand les étudiants prennent-ils ce job ?", b:"pendant l'année scolaire", a:["uniquement l'été","après leurs études"]},
   {n:2, q:"Qu'apprend un job selon ses partisans ?", b:"la responsabilité et la gestion de l'argent", a:["la cuisine","les langues étrangères"]},
   {n:2, q:"Le phénomène est-il en hausse ou en baisse ?", b:"en hausse", a:["en baisse","stable depuis vingt ans"]},
   {n:3, q:"Que craignent les critiques ?", b:"des effets sur le sommeil et les résultats scolaires", a:["une hausse des salaires","un manque de loisirs uniquement"]},
   {n:3, q:"Que suggèrent les enquêtes récentes ?", b:"rester sous dix heures par semaine", a:["travailler le plus possible","interdire le travail étudiant"]},
   {n:4, q:"Que signifie « drawbacks » ?", b:"les inconvénients", a:["les revenus","les horaires"]},
   {n:4, q:"Quelle nuance apporte la dernière phrase ?", b:"la vraie question est la quantité de travail, pas le principe", a:["le travail est toujours néfaste","les enquêtes se trompent"]},
   {n:5, q:"Quel est le ton général du texte ?", b:"équilibré et nuancé", a:["moqueur","alarmiste"]},
   {n:5, q:"Comment le texte est-il construit ?", b:"il confronte deux points de vue puis conclut", a:["il raconte une histoire personnelle","il donne uniquement des chiffres"]}
  ]}
],

nl1: [
 {t:"Dit is Nora. Zij is elf jaar en woont in Namen.",
  t2:"Elke woensdag gaat zij naar de muziekschool. Zij speelt gitaar en zingt in een klein koor.",
  t3:"Volgende maand geeft de school een concert. Nora oefent elke avond, want haar oma komt kijken.",
  q:[
   {n:1, q:"Quel âge a Nora ?", b:"11 ans", a:["9 ans","13 ans"]},
   {n:1, q:"Où habite-t-elle ?", b:"à Namur", a:["à Liège","à Gand"]},
   {n:1, q:"Comment s'appelle la fille du texte ?", b:"Nora", a:["Nina","Lora"]},
   {n:2, q:"Où va-t-elle chaque mercredi ?", b:"à l'école de musique", a:["à la piscine","chez sa grand-mère"]},
   {n:2, q:"De quel instrument joue-t-elle ?", b:"de la guitare", a:["du piano","de la flûte"]},
   {n:3, q:"Dans quoi chante-t-elle ?", b:"un petit chœur", a:["un groupe de rock","une comédie musicale"]},
   {n:3, q:"Quand aura lieu le concert ?", b:"le mois prochain", a:["demain","à Noël"]},
   {n:4, q:"Pourquoi Nora s'exerce-t-elle chaque soir ?", b:"parce que sa grand-mère viendra la voir", a:["parce qu'elle a un examen","parce qu'elle s'ennuie"]},
   {n:4, q:"Que signifie « oefent » ?", b:"s'exerce", a:["chante","dort"]},
   {n:5, q:"Que comprend-on de l'état d'esprit de Nora ?", b:"elle est motivée et veut bien faire", a:["elle veut arrêter la musique","elle a peur de sa grand-mère"]}
  ]}
],

nl2: [
 {t:"Zaterdag is er markt op het plein. Ik ga met mijn vader.",
  t2:"Wij kopen kaas, tomaten en vers brood. Bij de bloemenkraam kiest papa rode rozen voor mama.",
  t3:"Op de terugweg begint het te regenen. Wij lopen snel naar huis, maar het brood blijft gelukkig droog onder mijn jas.",
  q:[
   {n:1, q:"Quel jour y a-t-il marché ?", b:"le samedi", a:["le dimanche","le mercredi"]},
   {n:1, q:"Avec qui l'enfant va-t-il au marché ?", b:"avec son père", a:["avec sa mère","avec son frère"]},
   {n:1, q:"Où se tient le marché ?", b:"sur la place", a:["dans la rue principale","au port"]},
   {n:2, q:"Qu'achètent-ils ?", b:"du fromage, des tomates et du pain frais", a:["des fleurs uniquement","du poisson et des frites"]},
   {n:2, q:"Que choisit papa au stand de fleurs ?", b:"des roses rouges", a:["des tulipes jaunes","un petit sapin"]},
   {n:3, q:"Pour qui sont les fleurs ?", b:"pour maman", a:["pour la grand-mère","pour la voisine"]},
   {n:3, q:"Quel temps se met-il à faire sur le retour ?", b:"il commence à pleuvoir", a:["il commence à neiger","le soleil revient"]},
   {n:4, q:"Comment le pain reste-t-il sec ?", b:"il est protégé sous la veste de l'enfant", a:["il est dans une boîte","papa court avec un parapluie"]},
   {n:4, q:"Que signifie « op de terugweg » ?", b:"sur le chemin du retour", a:["au petit matin","près du chemin de fer"]},
   {n:5, q:"Que montre le choix des roses ?", b:"une attention affectueuse pour maman", a:["que papa aime jardiner","que les roses sont bon marché"]}
  ]}
],

nl3: [
 {t:"Elke zomer werkt Bram twee weken op de boerderij van zijn tante in West-Vlaanderen.",
  t2:"Hij staat om zes uur op, voedert de koeien en helpt bij het melken. Het werk is zwaar, maar Bram vindt het buitenleven heerlijk.",
  t3:"Dit jaar mocht hij voor het eerst met de tractor rijden, natuurlijk onder toezicht. Later wil hij misschien zelf boer worden, al twijfelt hij nog.",
  q:[
   {n:1, q:"Où Bram travaille-t-il chaque été ?", b:"à la ferme de sa tante", a:["dans un magasin","au port d'Ostende"]},
   {n:1, q:"Combien de temps y travaille-t-il ?", b:"deux semaines", a:["tout l'été","un week-end"]},
   {n:1, q:"Dans quelle région se trouve la ferme ?", b:"en Flandre-Occidentale", a:["en Ardenne","au Limbourg"]},
   {n:2, q:"À quelle heure Bram se lève-t-il ?", b:"à six heures", a:["à huit heures","à midi"]},
   {n:2, q:"Quels animaux nourrit-il ?", b:"les vaches", a:["les cochons","les poules"]},
   {n:3, q:"À quelle tâche aide-t-il aussi ?", b:"la traite", a:["la moisson","la vente au marché"]},
   {n:3, q:"Qu'a-t-il pu faire pour la première fois cette année ?", b:"conduire le tracteur", a:["vendre le lait","dormir à la ferme"]},
   {n:4, q:"Dans quelles conditions conduit-il le tracteur ?", b:"sous surveillance", a:["tout seul la nuit","uniquement sur la route"]},
   {n:4, q:"Que signifie « zwaar » dans ce texte ?", b:"pénible, dur", a:["amusant","bien payé"]},
   {n:5, q:"Que sait-on des projets d'avenir de Bram ?", b:"il envisage de devenir fermier mais hésite encore", a:["il déteste la ferme","il sera certainement vétérinaire"]}
  ]}
],

nl4: [
 {t:"Steeds meer Belgische gemeenten planten mini-bossen aan in de stad.",
  t2:"Op een terrein zo groot als een tennisveld groeien honderden inheemse bomen. Zo'n bosje zorgt voor koelte, vangt fijn stof op en trekt vogels en insecten aan.",
  t3:"Critici vinden de aanpak te klein om het klimaat te redden. De voorstanders antwoorden dat elk project bewoners bij de natuur betrekt — en dat is misschien de grootste winst.",
  q:[
   {n:1, q:"Que plantent de plus en plus de communes belges ?", b:"des mini-forêts en ville", a:["des potagers scolaires","des haies le long des routes"]},
   {n:1, q:"Où ces plantations ont-elles lieu ?", b:"en ville", a:["en pleine campagne","au bord de la mer"]},
   {n:1, q:"Qui plante ces mini-forêts ?", b:"les communes", a:["les écoles","les entreprises privées"]},
   {n:2, q:"Quelle taille a le terrain d'un mini-bois ?", b:"celle d'un terrain de tennis", a:["celle d'un stade de foot","celle d'un balcon"]},
   {n:2, q:"Quel type d'arbres y plante-t-on ?", b:"des arbres indigènes", a:["des palmiers","des sapins de Noël"]},
   {n:3, q:"Cite un service rendu par un mini-bois.", b:"il apporte de la fraîcheur", a:["il produit de l'électricité","il attire les touristes"]},
   {n:3, q:"Que capte aussi ce petit bois ?", b:"les poussières fines", a:["l'eau de pluie uniquement","le bruit des avions"]},
   {n:4, q:"Que reprochent les critiques à cette approche ?", b:"elle est trop petite pour sauver le climat", a:["elle coûte trop cher aux écoles","elle attire trop d'animaux"]},
   {n:4, q:"Que répondent les partisans ?", b:"chaque projet rapproche les habitants de la nature", a:["le climat est déjà sauvé","les critiques sont jaloux"]},
   {n:5, q:"Que signifie « winst » dans la conclusion ?", b:"le gain, le bénéfice", a:["le vent","la victoire sportive"]},
   {n:5, q:"Quel est le but de ce texte ?", b:"présenter un débat de façon nuancée", a:["vendre des arbres","critiquer les communes"]}
  ]}
]
};
