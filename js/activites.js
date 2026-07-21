/* ============================================================
   ACTIVITÉS LUDIQUES — École+ (maternelle & primaire)
   Couleurs, cris d'animaux (vrais sons), écrire des mots,
   phrases à remettre en ordre, lecture & audition (fr/en/nl).
   ============================================================ */

const COULEURS_JEU = [
  ['rouge','#E63946'],['bleu','#457BE6'],['jaune','#FFD93D'],
  ['vert','#4CB963'],['orange','#FF8C42'],['violet','#9B5DE5'],
  ['rose','#FF8FAB'],['brun','#8B5A2B'],['noir','#2B2B2B']
];

const SON_ANIMAL = n => `https://www.google.com/logos/fnbx/animal_sounds/${n}.mp3`;
const CRIS_ANIMAUX = [
  ['🐱','le chat', SON_ANIMAL('cat'), 'Miaou !'],
  ['🐶','le chien', SON_ANIMAL('dog'), 'Ouaf ouaf !'],
  ['🐮','la vache', SON_ANIMAL('cow'), 'Meuh !'],
  ['🦆','le canard', SON_ANIMAL('duck'), 'Coin coin !'],
  ['🐑','le mouton', SON_ANIMAL('sheep'), 'Bêê !'],
  ['🐷','le cochon', SON_ANIMAL('pig'), 'Groin groin !'],
  ['🐓','le coq', SON_ANIMAL('rooster'), 'Cocorico !'],
  ['🐴','le cheval', SON_ANIMAL('horse'), 'Hiii hiii !'],
  ['🦁','le lion', SON_ANIMAL('lion'), 'Roaaar !'],
  ['🐘','l\u2019éléphant', SON_ANIMAL('elephant'), 'Baraaa !'],
  ['🦉','le hibou', SON_ANIMAL('owl'), 'Hou hou !'],
  ['🐯','le tigre', SON_ANIMAL('tiger'), 'Grrraou !']
];

/* Mots à écrire : [emoji, MOT, indice affiché (traduction pour les langues)] */
const MOTS_ECRIRE = {
  fr1: [
    ['🐱','CHAT',''],['👑','ROI',''],['🛏️','LIT',''],['🚌','BUS',''],['🎒','SAC',''],
    ['🌙','LUNE',''],['🦁','LION',''],['🐻','OURS',''],['🚲','VELO',''],['🐶','CHIEN','']
  ],
  fr2: [
    ['🐮','VACHE',''],['🐔','POULE',''],['🤖','ROBOT',''],['🌸','FLEUR',''],['🚂','TRAIN',''],
    ['🏠','MAISON',''],['🎈','BALLON',''],['🍕','PIZZA',''],['🐢','TORTUE',''],['✏️','CRAYON',''],
    ['☁️','NUAGE',''],['🐯','TIGRE',''],['🐵','SINGE',''],['🍐','POIRE',''],['🐑','MOUTON',''],
    ['🦆','CANARD',''],['🐰','LAPIN',''],['🐭','SOURIS',''],['🦊','RENARD',''],['🍌','BANANE',''],
    ['🍋','CITRON',''],['🎻','VIOLON',''],['🥁','TAMBOUR',''],['🌳','JARDIN',''],['❄️','HIVER','']
  ],
  en1: [
    ['🐱','CAT','le chat'],['🐶','DOG','le chien'],['☀️','SUN','le soleil'],['🔴','RED','rouge'],
    ['🔵','BLUE','bleu'],['🛏️','BED','le lit'],['🥛','MILK','le lait'],['📖','BOOK','le livre'],
    ['🏠','HOUSE','la maison'],['🍎','APPLE','la pomme']
  ],
  nl1: [
    ['🐱','KAT','le chat'],['🐶','HOND','le chien'],['🏠','HUIS','la maison'],['📖','BOEK','le livre'],
    ['🥛','MELK','le lait'],['🏫','SCHOOL','l\u2019école'],['🔴','ROOD','rouge'],['🐟','VIS','le poisson'],
    ['🍞','BROOD','le pain'],['💧','WATER','l\u2019eau']
  ],
  en2: [
    ['🌳','GARDEN','le jardin'],['🪟','WINDOW','la fenêtre'],['🟡','YELLOW','jaune'],['🐴','HORSE','le cheval'],
    ['🍞','BREAD','le pain'],['🧀','CHEESE','le fromage'],['🌸','FLOWER','la fleur'],['❄️','WINTER','l\u2019hiver'],
    ['🤝','FRIEND','l\u2019ami'],['🌅','MORNING','le matin']
  ],
  nl2: [
    ['🌸','BLOEM','la fleur'],['🐴','PAARD','le cheval'],['🏪','WINKEL','le magasin'],['🛣️','STRAAT','la rue'],
    ['🟢','GROEN','vert'],['❄️','WINTER','l\u2019hiver'],['🤝','VRIEND','l\u2019ami'],['🍎','APPEL','la pomme'],
    ['🚂','TREIN','le train'],['🧀','KAAS','le fromage']
  ]
};
/* Phrases à remettre en ordre : [mots[], traduction française (vide si fr)] */
const PHRASES_ORDRE = {
  fr1: [
    [["Le","chat","dort."],""],
    [["Papa","lit","un","livre."],""],
    [["Le","chien","court","vite."],""],
    [["Je","mange","une","pomme."],""],
    [["Maman","chante","une","chanson."],""]
  ],
  fr2: [
    [["Ma","s\u0153ur","joue","au","ballon."],""],
    [["Le","soleil","brille","ce","matin."],""],
    [["Nous","allons","\u00e0","la","piscine."],""],
    [["Il","pleut","sur","la","maison."],""],
    [["Le","petit","lapin","mange","une","carotte."],""],
    [["Le","chien","creuse","un","trou."],""],
    [["Ma","grand-m\u00e8re","fait","des","cr\u00eapes."],""],
    [["Les","oiseaux","chantent","le","matin."],""],
    [["Je","range","ma","chambre","vite."],""],
    [["Le","facteur","apporte","une","lettre."],""],
    [["Nous","plantons","des","fleurs","rouges."],""],
    [["Le","b\u00e9b\u00e9","dort","dans","son","lit."],""],
    [["Papa","lave","la","voiture","bleue."],""],
    [["La","neige","tombe","sur","le","toit."],""],
    [["Les","enfants","courent","dans","la","cour."],""]
  ],
  fr3: [
    [["Mon","fr\u00e8re","construit","une","cabane","dans","le","jardin."],""],
    [["La","ma\u00eetresse","lit","une","histoire","\u00e0","la","classe."],""],
    [["Pendant","les","vacances,","nous","irons","\u00e0","la","mer."],""],
    [["Apr\u00e8s","l\u2019\u00e9cole,","les","enfants","jouent","dans","le","parc."],""]
  ],
  en1: [
    [["I","am","happy."],"Je suis content."],
    [["It","is","a","cat."],"C\u2019est un chat."],
    [["I","like","dogs."],"J\u2019aime les chiens."],
    [["The","sun","is","yellow."],"Le soleil est jaune."],
    [["My","name","is","Tom."],"Je m\u2019appelle Tom."]
  ],
  nl1: [
    [["Ik","ben","blij."],"Je suis content."],
    [["De","kat","is","zwart."],"Le chat est noir."],
    [["Ik","heb","een","hond."],"J\u2019ai un chien."],
    [["Wij","gaan","naar","school."],"Nous allons \u00e0 l\u2019\u00e9cole."],
    [["Het","huis","is","groot."],"La maison est grande."]
  ],
  en2: [
    [["She","goes","to","school","by","bus."],"Elle va \u00e0 l\u2019\u00e9cole en bus."],
    [["We","played","football","in","the","park."],"Nous avons jou\u00e9 au football dans le parc."],
    [["I","will","visit","my","grandmother","tomorrow."],"Je rendrai visite \u00e0 ma grand-m\u00e8re demain."],
    [["He","doesn't","like","cold","weather."],"Il n\u2019aime pas le temps froid."],
    [["They","have","lived","here","for","ten","years."],"Ils habitent ici depuis dix ans."]
  ],
  nl2: [
    [["Ik","ga","met","de","fiets","naar","school."],"Je vais \u00e0 l\u2019\u00e9cole \u00e0 v\u00e9lo."],
    [["Wij","hebben","een","nieuw","huis."],"Nous avons une nouvelle maison."],
    [["Hij","drinkt","elke","dag","melk."],"Il boit du lait chaque jour."],
    [["Morgen","gaan","we","naar","de","zee."],"Demain, nous allons \u00e0 la mer."],
    [["Zij","heeft","een","boek","gelezen."],"Elle a lu un livre."]
  ]
};

/* Lectures : {t, q:[{q,b,a}]} — questions toujours en français */
const LECTURES = {
  fr1: [
    {t:"Tom a un chien. Le chien s'appelle Rex. Rex aime jouer au ballon.",
     q:[{q:"Comment s'appelle le chien ?", b:"Rex", a:["Tom","Max"]},
        {q:"Que Rex aime-t-il faire ?", b:"jouer au ballon", a:["dormir","manger"]}]},
    {t:"Léa mange une pomme rouge. Elle est dans le jardin avec son chat.",
     q:[{q:"Que mange Léa ?", b:"une pomme", a:["une poire","une banane"]},
        {q:"Où est Léa ?", b:"dans le jardin", a:["dans la cuisine","à l'école"]}]},
    {t:"Il pleut. Nino prend son parapluie bleu et met ses bottes.",
     q:[{q:"Quel temps fait-il ?", b:"il pleut", a:["il neige","il fait soleil"]},
        {q:"De quelle couleur est le parapluie ?", b:"bleu", a:["rouge","jaune"]}]}
  ],
  fr2: [
    {t:"Ce matin, Nina va à l'école à vélo. Elle porte un cartable bleu et un bonnet rouge. Son amie Zoé l'attend devant la grille.",
     q:[{q:"Comment Nina va-t-elle à l'école ?", b:"à vélo", a:["en bus","à pied"]},
        {q:"De quelle couleur est son cartable ?", b:"bleu", a:["rouge","vert"]},
        {q:"Qui l'attend devant la grille ?", b:"Zoé", a:["sa maman","le directeur"]}]},
    {t:"Papa prépare des crêpes pour le goûter. Milo ajoute du sucre et de la confiture de fraises. Toute la famille se régale.",
     q:[{q:"Que prépare papa ?", b:"des crêpes", a:["un gâteau","une tarte"]},
        {q:"Quelle confiture Milo ajoute-t-il ?", b:"de fraises", a:["d'abricots","de cerises"]}]},
    {t:"Samedi, Louis va à la piscine avec son frère. Ils adorent sauter dans l'eau et faire la course.",
     q:[{q:"Où va Louis samedi ?", b:"à la piscine", a:["au parc","au cinéma"]},
        {q:"Avec qui y va-t-il ?", b:"son frère", a:["son papa","sa cousine"]}]},
    {t:"Dimanche matin, Lina va au marché avec sa mamy. Elles achètent des tomates, du fromage et un gros pain. Le marchand offre une pomme à Lina.",
     q:[{q:"Avec qui Lina va-t-elle au marché ?", b:"sa mamy", a:["son papy","sa voisine"]},
        {q:"Que leur offre le marchand ?", b:"une pomme", a:["une fraise","un bonbon"]}]},
    {t:"Le chaton de Malo a disparu. Malo le cherche partout dans la maison. Enfin, il le trouve endormi... dans le panier à linge !",
     q:[{q:"Qui a disparu ?", b:"le chaton", a:["le chiot","le hamster"]},
        {q:"Où était-il ?", b:"dans le panier à linge", a:["sous le lit","dans le jardin"]}]},
    {t:"C'est l'anniversaire de Jules. Ses amis arrivent à quatre heures. Ils mangent un gâteau au chocolat et jouent à cache-cache dans le jardin.",
     q:[{q:"À quelle heure arrivent les amis ?", b:"à quatre heures", a:["à deux heures","à six heures"]},
        {q:"À quel jeu jouent-ils ?", b:"à cache-cache", a:["aux billes","au ballon"]}]},
    {t:"Le vélo de Noa est cassé : la chaîne est tombée. Papa prend ses outils et répare le vélo en dix minutes. Noa repart en pédalant très vite.",
     q:[{q:"Quel est le problème du vélo ?", b:"la chaîne est tombée", a:["le pneu est crevé","le frein est cassé"]},
        {q:"Qui répare le vélo ?", b:"papa", a:["Noa","le voisin"]}]},
    {t:"Dans le potager de l'école, les élèves ont planté des radis et des salades. Chaque jour, un enfant arrose les légumes. Bientôt, ils feront une grande soupe.",
     q:[{q:"Qu'ont planté les élèves ?", b:"des radis et des salades", a:["des fleurs","des pommes de terre"]},
        {q:"Que feront-ils bientôt ?", b:"une grande soupe", a:["une salade de fruits","un gâteau"]}]}
  ],
  fr3: [
    {t:"La classe de Madame Petit part en excursion à la ferme. Les enfants donnent du foin aux lapins et ramassent trois œufs dans le poulailler. Avant de partir, le fermier leur offre un verre de lait tout frais.",
     q:[{q:"Où va la classe ?", b:"à la ferme", a:["au zoo","au musée"]},
        {q:"Combien d'œufs ramassent-ils ?", b:"trois", a:["deux","cinq"]},
        {q:"Que leur offre le fermier ?", b:"un verre de lait", a:["des bonbons","un œuf"]}]},
    {t:"Pendant la nuit, la neige a recouvert tout le village. Avant l'école, Emma construit un bonhomme de neige avec une carotte pour le nez et deux cailloux pour les yeux.",
     q:[{q:"Que met Emma pour le nez du bonhomme ?", b:"une carotte", a:["un caillou","une branche"]},
        {q:"Quand construit-elle le bonhomme ?", b:"avant l'école", a:["après l'école","dimanche"]}]},
    {t:"Le dragon de l'histoire ne crache pas de feu : il fait des bulles de savon. Tous les enfants du royaume veulent jouer avec lui, mais le roi a un peu peur.",
     q:[{q:"Que crache le dragon ?", b:"des bulles de savon", a:["du feu","de l'eau"]},
        {q:"Qui a un peu peur ?", b:"le roi", a:["les enfants","le dragon"]}]},
    {t:"La classe visite le musée des dinosaures. Le guide montre un squelette de tyrannosaure haut comme la salle. Sacha prend des notes pour son exposé de vendredi.",
     q:[{q:"Quel squelette le guide montre-t-il ?", b:"un tyrannosaure", a:["un diplodocus","un mammouth"]},
        {q:"Pourquoi Sacha prend-il des notes ?", b:"pour son exposé", a:["pour sa maman","pour le plaisir"]}]},
    {t:"Au match de dimanche, l'équipe de Théo perdait un à zéro. À la dernière minute, Théo a égalisé d'un beau tir. Toute l'équipe a crié de joie !",
     q:[{q:"Quel était le score avant le but de Théo ?", b:"un à zéro", a:["deux à un","zéro à zéro"]},
        {q:"Quand Théo a-t-il marqué ?", b:"à la dernière minute", a:["au début du match","à la mi-temps"]}]},
    {t:"Cette nuit, une grosse tempête a soufflé sur le village. Ce matin, une branche est tombée sur la cabane du jardin. Heureusement, personne n'est blessé et papy va réparer le toit.",
     q:[{q:"Que s'est-il passé cette nuit ?", b:"une tempête", a:["une inondation","une chute de neige"]},
        {q:"Où est tombée la branche ?", b:"sur la cabane", a:["sur la voiture","sur la maison"]}]},
    {t:"Mia veut préparer un gâteau surprise. Elle oublie la levure et le gâteau reste tout plat ! Sa maman sourit et lui montre la recette. Le deuxième essai est parfait.",
     q:[{q:"Qu'a oublié Mia ?", b:"la levure", a:["le sucre","les œufs"]},
        {q:"Comment est le deuxième gâteau ?", b:"parfait", a:["brûlé","trop plat"]}]},
    {t:"Un nouveau voisin est arrivé avec un perroquet qui parle. Chaque matin, l'oiseau crie « Bonjour tout le monde ! » et fait rire toute la rue.",
     q:[{q:"Quel animal a le nouveau voisin ?", b:"un perroquet", a:["un canari","un corbeau"]},
        {q:"Que crie l'oiseau ?", b:"Bonjour tout le monde !", a:["Au revoir !","J'ai faim !"]}]}
  ],
  fr4: [
    {t:"Chaque mercredi, Hugo se rend à la bibliothèque avec sa grand-mère. Cette semaine, il choisit une bande dessinée sur les pirates et un livre qui explique la vie des requins.",
     q:[{q:"Quand Hugo va-t-il à la bibliothèque ?", b:"le mercredi", a:["le samedi","le lundi"]},
        {q:"De quoi parle son deuxième livre ?", b:"des requins", a:["des pirates","des dauphins"]}]},
    {t:"Le hérisson dort presque tout l'hiver : c'est l'hibernation. Au printemps, il se réveille très affamé et part chercher des insectes et des escargots.",
     q:[{q:"Que fait le hérisson en hiver ?", b:"il dort", a:["il chasse","il voyage"]},
        {q:"Que mange-t-il à son réveil ?", b:"des insectes", a:["des fruits","des graines"]}]},
    {t:"RÈGLEMENT DE LA PISCINE — Le bonnet est obligatoire. Les enfants de moins de 8 ans doivent être accompagnés d'un adulte. Ouvert du mardi au dimanche, de 9 h à 18 h.",
     q:[{q:"Que faut-il obligatoirement porter ?", b:"un bonnet", a:["des lunettes","des palmes"]},
        {q:"Milo a 7 ans : que doit-il faire ?", b:"venir avec un adulte", a:["passer un brevet","venir le lundi"]},
        {q:"Quel jour la piscine est-elle fermée ?", b:"le lundi", a:["le dimanche","le mardi"]}]},
    {t:"RECETTE DES GAUFRES — Mélange 250 g de farine, 2 œufs et 50 cl de lait. Laisse reposer la pâte trente minutes. Fais cuire trois minutes dans le gaufrier bien chaud. Attention : demande l'aide d'un adulte pour la cuisson.",
     q:[{q:"Combien de temps la pâte doit-elle reposer ?", b:"30 minutes", a:["3 minutes","une heure"]},
        {q:"Pour quelle étape faut-il un adulte ?", b:"la cuisson", a:["le mélange","le repos de la pâte"]},
        {q:"Quel type de texte est-ce ?", b:"une recette (texte injonctif)", a:["un conte","une lettre"]}]},
    {t:"Depuis quelques années, le castor est revenu le long des rivières de Wallonie. Avec ses dents puissantes, il coupe des branches pour construire des barrages. Ces barrages créent des zones humides utiles à beaucoup d'animaux.",
     q:[{q:"Où le castor est-il revenu ?", b:"le long des rivières de Wallonie", a:["à la mer du Nord","dans les villes"]},
        {q:"Que construit-il ?", b:"des barrages", a:["des nids dans les arbres","des terriers de sable"]},
        {q:"Pourquoi ses barrages sont-ils utiles ?", b:"ils créent des zones humides pour d'autres animaux", a:["ils bloquent les bateaux","ils chauffent l'eau"]}]},
    {t:"Chère Camille, ici tout va bien ! Le camp se déroule dans les Ardennes, près d'une rivière. Hier, nous avons fait une marche de dix kilomètres et une veillée autour du feu. Je te raconterai tout samedi. Ton amie, Louna.",
     q:[{q:"Qui écrit cette lettre ?", b:"Louna", a:["Camille","la monitrice"]},
        {q:"Où se déroule le camp ?", b:"dans les Ardennes", a:["à la mer","en Italie"]},
        {q:"Qu'ont-ils fait hier ?", b:"une marche et une veillée", a:["une sieste","du ski"]}]},
    {t:"CLUB DE NATATION LES DAUPHINS — Entraînements : mercredi 14 h-15 h (débutants), samedi 10 h-11 h 30 (confirmés). Cotisation annuelle : 95 €, bonnet du club offert. Inscriptions avant le 15 septembre à la piscine communale.",
     q:[{q:"Quand s'entraînent les débutants ?", b:"le mercredi de 14 h à 15 h", a:["le samedi matin","le dimanche"]},
        {q:"Que reçoit-on avec la cotisation ?", b:"le bonnet du club", a:["un maillot","des lunettes"]},
        {q:"Quelle est la date limite d'inscription ?", b:"le 15 septembre", a:["le 1er octobre","le 15 août"]}]},
    {t:"Deux fois par jour, la mer monte puis redescend : ce sont les marées. Elles sont surtout dues à l'attraction de la Lune. À marée basse, la plage de La Panne découvre de larges bancs de sable où l'on ramasse des coquillages.",
     q:[{q:"Combien de fois la mer monte-t-elle par jour ?", b:"deux fois", a:["une fois","quatre fois"]},
        {q:"Qu'est-ce qui provoque surtout les marées ?", b:"l'attraction de la Lune", a:["le vent","les bateaux"]},
        {q:"Que peut-on faire à marée basse ?", b:"ramasser des coquillages", a:["plonger du rocher","pêcher au large"]}]}
  ],
  en1: [
    {t:"Hello! My name is Lucy. I am ten years old. I have a little dog. His name is Max.",
     q:[{q:"Quel âge a Lucy ?", b:"10 ans", a:["8 ans","12 ans"]},
        {q:"Quel animal a-t-elle ?", b:"un chien", a:["un chat","un lapin"]},
        {q:"Comment s'appelle-t-il ?", b:"Max", a:["Rex","Tom"]}]},
    {t:"This is my cat. She is black and white. She likes milk and fish. She sleeps on my bed.",
     q:[{q:"De quelles couleurs est le chat ?", b:"noir et blanc", a:["gris","roux"]},
        {q:"Qu'aime-t-il ?", b:"le lait et le poisson", a:["les croquettes","la viande"]},
        {q:"Où dort-il ?", b:"sur le lit", a:["dans le jardin","sur le canapé"]}]}
  ],
  en2: [
    {t:"This is my house. It is big and white. In the garden, there are two trees and many flowers. I play there with my sister.",
     q:[{q:"De quelle couleur est la maison ?", b:"blanche", a:["bleue","rouge"]},
        {q:"Qu'y a-t-il dans le jardin ?", b:"deux arbres et des fleurs", a:["une piscine","une cabane"]},
        {q:"Avec qui joue-t-il ?", b:"sa sœur", a:["son frère","son chien"]}]},
    {t:"Every morning, I get up at seven o'clock. I eat bread and drink milk. Then I go to school by bus.",
     q:[{q:"À quelle heure se lève-t-il ?", b:"à 7 h", a:["à 8 h","à 6 h"]},
        {q:"Que boit-il ?", b:"du lait", a:["du jus","de l'eau"]},
        {q:"Comment va-t-il à l'école ?", b:"en bus", a:["à vélo","à pied"]}]}
  ],
  nl1: [
    {t:"Dit is Tom. Hij is tien jaar. Hij heeft een kat. De kat is zwart en wit.",
     q:[{q:"Quel âge a Tom ?", b:"10 ans", a:["8 ans","12 ans"]},
        {q:"Quel animal a-t-il ?", b:"un chat", a:["un chien","un poisson"]},
        {q:"De quelles couleurs est l'animal ?", b:"noir et blanc", a:["brun","roux"]}]},
    {t:"Wij wonen in een groot huis. In de tuin staat een boom. Mijn broer speelt met de hond.",
     q:[{q:"Où habitent-ils ?", b:"dans une grande maison", a:["dans un appartement","à la ferme"]},
        {q:"Qu'y a-t-il dans le jardin ?", b:"un arbre", a:["une piscine","des fleurs"]},
        {q:"Avec qui joue le frère ?", b:"avec le chien", a:["avec le chat","avec sa sœur"]}]}
  ],
  en3: [
    {t:"Last Saturday, Tom went to the zoo with his family. He saw lions, elephants and monkeys. His favourite animal was the giraffe because it was very tall. After the visit, they ate ice cream.",
     q:[{q:"Où est allé Tom samedi dernier ?", b:"au zoo", a:["au cirque","à la ferme"]},
        {q:"Quel était son animal préféré ?", b:"la girafe", a:["le lion","le singe"]},
        {q:"Qu'ont-ils mangé après la visite ?", b:"une glace", a:["des gaufres","un hamburger"]}]},
    {t:"Sarah has a new hobby: she plays the guitar. She practises every day after school for thirty minutes. Next month, she will play a song at the school show. She is a little nervous!",
     q:[{q:"Quel est le nouveau hobby de Sarah ?", b:"la guitare", a:["le piano","le chant"]},
        {q:"Combien de temps s'entraîne-t-elle ?", b:"30 minutes par jour", a:["1 heure par jour","le week-end seulement"]},
        {q:"Que fera-t-elle le mois prochain ?", b:"jouer au spectacle de l'école", a:["passer un examen","acheter une guitare"]}]}
  ],
  en4: [
    {t:"Next summer, Emma will travel to England with her school. They will visit London and see Big Ben. Emma is a little nervous because she must speak English all day, but she is also very excited. She wants to buy a present for her mother.",
     q:[{q:"Où Emma ira-t-elle l'été prochain ?", b:"en Angleterre", a:["en Espagne","en Italie"]},
        {q:"Pourquoi est-elle un peu nerveuse ?", b:"elle devra parler anglais toute la journée", a:["elle a peur de l'avion","elle ne connaît personne"]},
        {q:"Que veut-elle acheter ?", b:"un cadeau pour sa mère", a:["des bonbons","un livre sur Londres"]}]},
    {t:"Ben lost his dog in the park yesterday. He looked everywhere and called his name for one hour. Finally, an old lady found the dog near the lake and brought him back. Ben was so happy that he almost cried.",
     q:[{q:"Qu'est-il arrivé hier à Ben ?", b:"il a perdu son chien", a:["il a trouvé un chat","il a gagné une course"]},
        {q:"Qui a retrouvé le chien ?", b:"une vieille dame", a:["un policier","son voisin"]},
        {q:"Comment Ben s'est-il senti ?", b:"tellement heureux qu'il a failli pleurer", a:["fâché","déçu"]}]}
  ],
  en5: [
    {t:"Scientists say our planet is getting warmer because of the gases produced by cars and factories. Many young people around the world are asking governments to act quickly. Small actions, like taking the train instead of the car, can also make a difference.",
     q:[{q:"Pourquoi la planète se réchauffe-t-elle ?", b:"à cause des gaz des voitures et des usines", a:["à cause des volcans","à cause du Soleil uniquement"]},
        {q:"Que demandent les jeunes ?", b:"que les gouvernements agissent vite", a:["plus de vacances","moins d'écoles"]},
        {q:"Quel exemple de petite action est donné ?", b:"prendre le train plutôt que la voiture", a:["acheter plus de voitures","voyager en avion"]}]},
    {t:"Emma has just finished school and is looking for her first job. She has sent her CV to ten companies. Tomorrow she has an interview at a bookshop in Brussels. She is nervous, but she has prepared answers to the most common questions.",
     q:[{q:"Que cherche Emma ?", b:"son premier emploi", a:["un appartement","une école"]},
        {q:"Où a-t-elle un entretien ?", b:"dans une librairie à Bruxelles", a:["dans une banque à Liège","dans un restaurant"]},
        {q:"Comment s'est-elle préparée ?", b:"en préparant des réponses aux questions courantes", a:["en achetant un costume","elle ne s'est pas préparée"]}]}
  ],
  nl2: [
    {t:"Ik sta elke dag om zeven uur op. Ik eet brood met kaas en ik drink melk. Daarna ga ik met de fiets naar school. Mijn school is niet ver.",
     q:[{q:"À quelle heure se lève-t-il ?", b:"à 7 h", a:["à 8 h","à 6 h"]},
        {q:"Que mange-t-il ?", b:"du pain avec du fromage", a:["des céréales","une pomme"]},
        {q:"Comment va-t-il à l'école ?", b:"à vélo", a:["en bus","à pied"]}]},
    {t:"Morgen is het zaterdag. Wij gaan naar de markt in het dorp. Mijn moeder koopt groenten en fruit. Ik mag een wafel eten!",
     q:[{q:"Quel jour est-ce demain ?", b:"samedi", a:["dimanche","mercredi"]},
        {q:"Où vont-ils ?", b:"au marché", a:["au magasin","à la mer"]},
        {q:"Que peut manger l'enfant ?", b:"une gaufre", a:["une glace","des frites"]}]}
  ],
  nl3: [
    {t:"Vorige zomer zijn wij met de trein naar de zee gereisd. Het weer was mooi en het water was warm. Mijn broer heeft een groot zandkasteel gebouwd. 's Avonds hebben we frietjes gegeten.",
     q:[{q:"Comment ont-ils voyagé ?", b:"en train", a:["en voiture","en avion"]},
        {q:"Qu'a construit le frère ?", b:"un château de sable", a:["une cabane","un radeau"]},
        {q:"Qu'ont-ils mangé le soir ?", b:"des frites", a:["des gaufres","une pizza"]}]},
    {t:"Jan werkt in een kleine winkel in Gent. Hij verkoopt boeken en kranten. Hij vindt zijn werk leuk omdat hij graag met mensen praat. Op zondag is de winkel gesloten.",
     q:[{q:"Où travaille Jan ?", b:"dans un petit magasin à Gand", a:["dans une usine à Anvers","dans une école"]},
        {q:"Que vend-il ?", b:"des livres et des journaux", a:["des vêtements","du pain"]},
        {q:"Quel jour le magasin est-il fermé ?", b:"le dimanche", a:["le lundi","le samedi"]}]}
  ],
  nl4: [
    {t:"Steeds meer jongeren kiezen voor de fiets in plaats van de auto. Dat is goed voor het milieu en voor de gezondheid. In grote steden zoals Gent en Antwerpen zijn er daarom veel nieuwe fietspaden. Toch blijft veiligheid een belangrijk probleem.",
     q:[{q:"Que choisissent de plus en plus de jeunes ?", b:"le vélo plutôt que la voiture", a:["la voiture plutôt que le vélo","le bus uniquement"]},
        {q:"Pourquoi est-ce positif ?", b:"pour l'environnement et la santé", a:["pour gagner de l'argent","pour aller plus vite"]},
        {q:"Quel problème reste important ?", b:"la sécurité", a:["le prix des vélos","la météo"]}]},
    {t:"Lisa solliciteert voor een job als verkoopster. In haar brief schrijft ze dat ze vriendelijk is en graag in team werkt. Volgende week heeft ze een gesprek met de baas. Ze bereidt zich goed voor, want ze wil deze job echt.",
     q:[{q:"Pour quel emploi Lisa postule-t-elle ?", b:"vendeuse", a:["secrétaire","institutrice"]},
        {q:"Que dit-elle dans sa lettre ?", b:"qu'elle est aimable et aime travailler en équipe", a:["qu'elle veut un gros salaire","qu'elle habite loin"]},
        {q:"Quand a-t-elle l'entretien ?", b:"la semaine prochaine", a:["demain matin","dans un mois"]}]}
  ]
};

const LANGUES_TTS = {fr:'fr-FR', en:'en-GB', nl:'nl-BE'};
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

/* ============================================================
   TEXTES À TROUS — mots entre {accolades} = trous potentiels.
   Le niveau choisit combien de trous (3/4/5/6/7) et d'intrus.
   ============================================================ */
const TEXTES_TROUS = {
trous_fr1: [
 {t:"Le {chat} dort sur le {lit}. Il fait un beau {rêve}. Sa {queue} bouge un peu. Maman ferme la {porte} sans faire de {bruit}. Le chat dort toute la {nuit}.",
  intrus:["chien","table","soleil"]},
 {t:"Papa prépare des {crêpes} pour le {goûter}. Je verse la {farine} et je casse deux {œufs}. On ajoute du {lait} et du {sucre}. Miam, c'est vraiment {bon} !",
  intrus:["ballon","pluie","chaussure"]}
],
trous_fr2: [
 {t:"Ce matin, la {neige} recouvre le {jardin}. Les enfants mettent leurs {bottes} et leurs {gants}. Ils construisent un grand {bonhomme} avec une {carotte} pour le nez. Ensuite, ils boivent un {chocolat} bien chaud.",
  intrus:["piscine","été","vélo"]},
 {t:"À la {ferme}, le fermier se lève très {tôt}. Il donne du {foin} aux vaches et ramasse les {œufs} des {poules}. Son chien garde le {troupeau} de moutons. Le soir, tout le monde rentre à l'{étable}.",
  intrus:["école","avion","cinéma"]}
],
trous_fr3: [
 {t:"Chaque été, nous partons en {vacances} à la mer du {Nord}. Nous construisons des châteaux de {sable} et cherchons des {coquillages}. Quand la {marée} monte, l'eau détruit doucement nos {constructions}. Le soir, nous mangeons des {glaces} sur la digue.",
  intrus:["montagne","cartable","hiver"]},
 {t:"La {bibliothèque} du village ouvre le mercredi. On peut y {emprunter} des livres pendant quinze {jours}. La bibliothécaire conseille des {romans} passionnants. Le {silence} permet à chacun de {lire} tranquillement. À la fin, on rend les livres à l'{accueil}.",
  intrus:["piscine","crier","manger"]}
],
trous_fr4: [
 {t:"Les {abeilles} jouent un rôle essentiel dans la {nature}. En butinant, elles transportent le {pollen} de fleur en fleur. Sans elles, beaucoup de {fruits} et de légumes disparaîtraient. Les {pesticides} menacent pourtant leurs colonies. Chacun peut agir en semant des {fleurs} sur son {balcon}.",
  intrus:["voitures","ordinateurs","chaussures"]},
 {t:"En Belgique, trois {régions} se partagent le territoire. La {Wallonie} se trouve au {sud} du pays. Bruxelles en est la {capitale}. La côte belge borde la mer du {Nord}. Le point culminant, le Signal de {Botrange}, se situe dans les Hautes {Fagnes}.",
  intrus:["Espagne","océan","désert"]}
],
trous_en1: [
 {t:"My name is {Tom}. I am {ten} years old. I have a little {dog}. His name is Rex. He likes to {play} in the {garden}. Every morning, I give him {water} and food. At night, he sleeps on my {bed}.",
  intrus:["cat","school","apple"]},
 {t:"It is {Monday} morning. I go to {school} by {bus}. In my bag, I have two {books} and an apple. My favourite lesson is {English}. After school, I play {football} with my friends. Then I go {home} for dinner.",
  intrus:["Sunday","piano","beach"]}
],
trous_nl1: [
 {t:"Ik heet {Lisa}. Ik ben elf {jaar}. Ik woon in een groot {huis} in Namen. Wij hebben een zwarte {kat}. Elke dag drink ik {melk}. Op {school} lees ik graag een {boek}.",
  intrus:["hond","water","fiets"]},
 {t:"Vandaag is het {woensdag}. Wij gaan naar de {markt}. Mama koopt {brood} en {kaas}. Ik krijg een rode {appel}. Daarna gaan wij naar {huis}. Het was een leuke {dag}.",
  intrus:["nacht","sneeuw","winter"]}
]
};
