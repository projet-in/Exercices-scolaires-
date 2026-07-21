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
  ]
};

const LANGUES_TTS = {fr:'fr-FR', en:'en-GB', nl:'nl-BE'};
