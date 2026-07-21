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
    ['🏠','MAISON',''],['🎈','BALLON',''],['🍕','PIZZA',''],['🐢','TORTUE',''],['✏️','CRAYON','']
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
    [["Le","petit","lapin","mange","une","carotte."],""]
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
        {q:"Avec qui y va-t-il ?", b:"son frère", a:["son papa","sa cousine"]}]}
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
        {q:"Qui a un peu peur ?", b:"le roi", a:["les enfants","le dragon"]}]}
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
        {q:"Quel jour la piscine est-elle fermée ?", b:"le lundi", a:["le dimanche","le mardi"]}]}
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
