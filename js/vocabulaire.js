/* ============================================================
   VOCABULAIRE TRADUCTION — École+
   25 mots par langue et par année (P5 → rhéto), tous différents.
   Format : [mot dans la langue, traduction française].
   Le générateur « vocab » crée des QCM dans les deux sens.
   ============================================================ */

const VOCAB_TRAD = {

en_P5: [
  ['the dog','le chien'],['the cat','le chat'],['the house','la maison'],['the school','l\u2019école'],
  ['the book','le livre'],['the apple','la pomme'],['the milk','le lait'],['the water','l\u2019eau'],
  ['the sun','le soleil'],['the moon','la lune'],['red','rouge'],['blue','bleu'],
  ['green','vert'],['yellow','jaune'],['the mother','la maman'],['the father','le papa'],
  ['the brother','le frère'],['the sister','la sœur'],['the table','la table'],['the chair','la chaise'],
  ['the bed','le lit'],['the door','la porte'],['one','un (1)'],['two','deux (2)'],['three','trois (3)']
],
en_P6: [
  ['the bird','l\u2019oiseau'],['the horse','le cheval'],['the cow','la vache'],['the bread','le pain'],
  ['the cheese','le fromage'],['the egg','l\u2019œuf'],['the garden','le jardin'],['the tree','l\u2019arbre'],
  ['the flower','la fleur'],['the rain','la pluie'],['the snow','la neige'],['the day','le jour'],
  ['the night','la nuit'],['the week','la semaine'],['the year','l\u2019année'],['big','grand'],
  ['small','petit'],['happy','content'],['sad','triste'],['to eat','manger'],
  ['to drink','boire'],['to play','jouer'],['to run','courir'],['to sleep','dormir'],['ten','dix (10)']
],
en_S1: [
  ['the bike','le vélo'],['the car','la voiture'],['the train','le train'],['the plane','l\u2019avion'],
  ['the city','la ville'],['the street','la rue'],['the shop','le magasin'],['the money','l\u2019argent'],
  ['the clothes','les vêtements'],['the shoes','les chaussures'],['the head','la tête'],['the hand','la main'],
  ['the eyes','les yeux'],['the hair','les cheveux'],['to speak','parler'],['to listen','écouter'],
  ['to read','lire'],['to write','écrire'],['always','toujours'],['never','jamais'],
  ['today','aujourd\u2019hui'],['tomorrow','demain'],['yesterday','hier'],['early','tôt'],['late','tard']
],
en_S2: [
  ['the weather','le temps (météo)'],['the holiday','les vacances'],['the beach','la plage'],['the mountain','la montagne'],
  ['the forest','la forêt'],['the river','la rivière'],['the animal','l\u2019animal'],['the sea','la mer'],
  ['the island','l\u2019île'],['the village','le village'],['the bridge','le pont'],['the castle','le château'],
  ['the map','la carte'],['to travel','voyager'],['to visit','visiter'],['to buy','acheter'],
  ['to sell','vendre'],['to find','trouver'],['to lose','perdre'],['cheap','bon marché'],
  ['expensive','cher'],['easy','facile'],['difficult','difficile'],['dangerous','dangereux'],['safe','sûr / en sécurité']
],
en_S3: [
  ['the health','la santé'],['the doctor','le médecin'],['the hospital','l\u2019hôpital'],['the medicine','le médicament'],
  ['the body','le corps'],['the heart','le cœur'],['the blood','le sang'],['the skin','la peau'],
  ['the illness','la maladie'],['the meal','le repas'],['the breakfast','le petit-déjeuner'],['the lunch','le dîner (midi)'],
  ['the dinner','le souper'],['the kitchen','la cuisine'],['the knife','le couteau'],['the fork','la fourchette'],
  ['to feel','sentir / ressentir'],['to hurt','faire mal'],['to help','aider'],['to need','avoir besoin de'],
  ['to want','vouloir'],['tired','fatigué'],['sick','malade'],['strong','fort'],['weak','faible']
],
en_S4: [
  ['the job','l\u2019emploi'],['the work','le travail'],['the office','le bureau'],['the boss','le patron'],
  ['the meeting','la réunion'],['the letter','la lettre'],['the newspaper','le journal'],['the science','la science'],
  ['the history','l\u2019histoire'],['the language','la langue'],['the word','le mot'],['the sentence','la phrase'],
  ['the question','la question'],['the answer','la réponse'],['the teacher','le professeur'],['to learn','apprendre'],
  ['to teach','enseigner'],['to understand','comprendre'],['to explain','expliquer'],['to remember','se souvenir'],
  ['to forget','oublier'],['famous','célèbre'],['important','important'],['useful','utile'],['useless','inutile']
],
en_S5: [
  ['the environment','l\u2019environnement'],['the pollution','la pollution'],['the waste','les déchets'],['the climate','le climat'],
  ['the future','le futur'],['the past','le passé'],['the century','le siècle'],['the war','la guerre'],
  ['the peace','la paix'],['the law','la loi'],['the right','le droit'],['the freedom','la liberté'],
  ['the government','le gouvernement'],['the society','la société'],['to protect','protéger'],['to destroy','détruire'],
  ['to improve','améliorer'],['to increase','augmenter'],['to decrease','diminuer'],['to choose','choisir'],
  ['to decide','décider'],['however','cependant'],['although','bien que'],['therefore','par conséquent'],['despite','malgré']
],
en_S6: [
  ['the achievement','la réussite / l\u2019accomplissement'],['the challenge','le défi'],['the opportunity','l\u2019opportunité'],['the purpose','le but'],
  ['the behaviour','le comportement'],['the knowledge','la connaissance'],['the skill','la compétence'],['the research','la recherche'],
  ['the development','le développement'],['the success','le succès'],['the failure','l\u2019échec'],['to achieve','accomplir'],
  ['to succeed','réussir'],['to fail','échouer'],['to apply','postuler / appliquer'],['to require','exiger'],
  ['to provide','fournir'],['to prevent','empêcher'],['to allow','permettre'],['reliable','fiable'],
  ['accurate','précis / exact'],['likely','probable'],['unlikely','improbable'],['whereas','tandis que'],['furthermore','de plus']
],

nl_P5: [
  ['de hond','le chien'],['de kat','le chat'],['het huis','la maison'],['de school','l\u2019école'],
  ['het boek','le livre'],['de appel','la pomme'],['de melk','le lait'],['het water','l\u2019eau'],
  ['de zon','le soleil'],['de maan','la lune'],['rood','rouge'],['blauw','bleu'],
  ['groen','vert'],['geel','jaune'],['de moeder','la maman'],['de vader','le papa'],
  ['de broer','le frère'],['de zus','la sœur'],['de tafel','la table'],['de stoel','la chaise'],
  ['het bed','le lit'],['de deur','la porte'],['één','un (1)'],['twee','deux (2)'],['drie','trois (3)']
],
nl_P6: [
  ['de vogel','l\u2019oiseau'],['het paard','le cheval'],['de koe','la vache'],['het brood','le pain'],
  ['de kaas','le fromage'],['het ei','l\u2019œuf'],['de tuin','le jardin'],['de boom','l\u2019arbre'],
  ['de bloem','la fleur'],['de regen','la pluie'],['de sneeuw','la neige'],['de dag','le jour'],
  ['de nacht','la nuit'],['de week','la semaine'],['het jaar','l\u2019année'],['groot','grand'],
  ['klein','petit'],['blij','content'],['verdrietig','triste'],['eten','manger'],
  ['drinken','boire'],['spelen','jouer'],['lopen','marcher / courir'],['slapen','dormir'],['tien','dix (10)']
],
nl_S1: [
  ['de fiets','le vélo'],['de auto','la voiture'],['de trein','le train'],['het vliegtuig','l\u2019avion'],
  ['de stad','la ville'],['de straat','la rue'],['de winkel','le magasin'],['het geld','l\u2019argent'],
  ['de kleren','les vêtements'],['de schoenen','les chaussures'],['het hoofd','la tête'],['de hand','la main'],
  ['de ogen','les yeux'],['het haar','les cheveux'],['spreken','parler'],['luisteren','écouter'],
  ['lezen','lire'],['schrijven','écrire'],['altijd','toujours'],['nooit','jamais'],
  ['vandaag','aujourd\u2019hui'],['morgen','demain'],['gisteren','hier'],['vroeg','tôt'],['laat','tard']
],
nl_S2: [
  ['het weer','le temps (météo)'],['de vakantie','les vacances'],['het strand','la plage'],['de berg','la montagne'],
  ['het bos','la forêt'],['de rivier','la rivière'],['het dier','l\u2019animal'],['de zee','la mer'],
  ['het eiland','l\u2019île'],['het dorp','le village'],['de brug','le pont'],['het kasteel','le château'],
  ['de kaart','la carte'],['reizen','voyager'],['bezoeken','visiter'],['kopen','acheter'],
  ['verkopen','vendre'],['vinden','trouver'],['verliezen','perdre'],['goedkoop','bon marché'],
  ['duur','cher'],['gemakkelijk','facile'],['moeilijk','difficile'],['gevaarlijk','dangereux'],['veilig','sûr / en sécurité']
],
nl_S3: [
  ['de gezondheid','la santé'],['de dokter','le médecin'],['het ziekenhuis','l\u2019hôpital'],['het geneesmiddel','le médicament'],
  ['het lichaam','le corps'],['het hart','le cœur'],['het bloed','le sang'],['de huid','la peau'],
  ['de ziekte','la maladie'],['de maaltijd','le repas'],['het ontbijt','le petit-déjeuner'],['het middageten','le dîner (midi)'],
  ['het avondeten','le souper'],['de keuken','la cuisine'],['het mes','le couteau'],['de vork','la fourchette'],
  ['voelen','sentir / ressentir'],['pijn doen','faire mal'],['helpen','aider'],['nodig hebben','avoir besoin de'],
  ['willen','vouloir'],['moe','fatigué'],['ziek','malade'],['sterk','fort'],['zwak','faible']
],
nl_S4: [
  ['de baan','l\u2019emploi'],['het werk','le travail'],['het kantoor','le bureau'],['de baas','le patron'],
  ['de vergadering','la réunion'],['de brief','la lettre'],['de krant','le journal'],['de wetenschap','la science'],
  ['de geschiedenis','l\u2019histoire'],['de taal','la langue'],['het woord','le mot'],['de zin','la phrase'],
  ['de vraag','la question'],['het antwoord','la réponse'],['de leraar','le professeur'],['leren','apprendre'],
  ['begrijpen','comprendre'],['uitleggen','expliquer'],['onthouden','retenir / se souvenir'],['vergeten','oublier'],
  ['beroemd','célèbre'],['belangrijk','important'],['nuttig','utile'],['nutteloos','inutile'],['de aardrijkskunde','la géographie']
],
nl_S5: [
  ['het milieu','l\u2019environnement'],['de vervuiling','la pollution'],['het afval','les déchets'],['het klimaat','le climat'],
  ['de toekomst','le futur'],['het verleden','le passé'],['de eeuw','le siècle'],['de oorlog','la guerre'],
  ['de vrede','la paix'],['de wet','la loi'],['het recht','le droit'],['de vrijheid','la liberté'],
  ['de regering','le gouvernement'],['de maatschappij','la société'],['beschermen','protéger'],['vernietigen','détruire'],
  ['verbeteren','améliorer'],['toenemen','augmenter'],['afnemen','diminuer'],['kiezen','choisir'],
  ['beslissen','décider'],['echter','cependant'],['dus','donc'],['volgens','selon'],['tijdens','pendant']
],
nl_S6: [
  ['de prestatie','la performance / la réussite'],['de uitdaging','le défi'],['de kans','la chance / l\u2019opportunité'],['het doel','le but'],
  ['het gedrag','le comportement'],['de kennis','la connaissance'],['de vaardigheid','la compétence'],['het onderzoek','la recherche'],
  ['de ontwikkeling','le développement'],['het succes','le succès'],['de mislukking','l\u2019échec'],['bereiken','atteindre'],
  ['slagen','réussir'],['mislukken','échouer'],['toepassen','appliquer'],['vereisen','exiger'],
  ['aanbieden','offrir / proposer'],['voorkomen','empêcher / prévenir'],['toestaan','permettre'],['betrouwbaar','fiable'],
  ['nauwkeurig','précis'],['waarschijnlijk','probable'],['onwaarschijnlijk','improbable'],['terwijl','tandis que'],['bovendien','de plus']
]
};
