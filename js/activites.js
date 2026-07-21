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
