/* ============================================================
   EXTENSIONS SECONDAIRE — École+
   Ce fichier densifie les banques S3-S6 et ajoute le néerlandais.
   Il se charge APRÈS banques.js (voir index.html) et pousse des
   questions supplémentaires dans les banques existantes.
   ============================================================ */

/* ---------- S3 ---------- */
BANQUES.s3_francais.push(
  {q:"« Le vent hurlait dans la nuit. » — Figure de style ?", b:"une personnification", a:["une métaphore","une litote"]},
  {q:"Répéter le même mot en début de phrases successives est...", b:"une anaphore", a:["une hyperbole","une antithèse"]},
  {q:"« Un silence assourdissant » — Figure de style ?", b:"un oxymore", a:["une comparaison","une métonymie"]},
  {q:"Opposer deux idées contraires dans une même phrase est...", b:"une antithèse", a:["une anaphore","une périphrase"]},
  {q:"« Il nous a quittés » pour « il est mort » — Figure ?", b:"un euphémisme", a:["une hyperbole","une gradation"]},
  {q:"« Va, cours, vole ! » — Figure de style ?", b:"une gradation", a:["une litote","un oxymore"]},
  {q:"La répétition d'un même son consonne (« pour qui sont ces serpents... ») est...", b:"une allitération", a:["une assonance","une anaphore"]},
  {q:"« Le roi des animaux » pour désigner le lion est...", b:"une périphrase", a:["une métonymie","un euphémisme"]}
);
BANQUES.s3_sciences.push(
  {q:"Le proton porte une charge...", b:"positive", a:["négative","nulle"]},
  {q:"Le neutron porte une charge...", b:"nulle", a:["positive","négative"]},
  {q:"Le symbole chimique de l'hydrogène est...", b:"H", a:["Hy","Ha"]},
  {q:"Le dioxygène de l'air a pour formule...", b:"O₂", a:["O","O₃"]},
  {q:"Le numéro atomique indique le nombre de...", b:"protons", a:["neutrons","molécules"]},
  {q:"La masse volumique se calcule par...", b:"masse ÷ volume", a:["volume ÷ masse","masse × volume"]},
  {q:"Séparer un solide d'un liquide avec un filtre s'appelle...", b:"la filtration", a:["la distillation","la fusion"]}
);
BANQUES.s3_math_qcm.push(
  {q:"Le périmètre d'un cercle de rayon r vaut...", b:"2πr", a:["πr²","πr"]},
  {q:"L'aire d'un disque de rayon r vaut...", b:"πr²", a:["2πr","πr"]},
  {q:"3/4 + 1/4 = ?", b:"1", a:["4/8","3/8"]},
  {q:"25 % s'écrit en fraction...", b:"1/4", a:["1/2","1/25"]},
  {q:"12,468 arrondi au dixième donne...", b:"12,5", a:["12,4","12,47"]}
);
BANQUES.s3_conjugaison.push(
  {q:"Elles (pouvoir) ___ enfin entrer. (passé simple)", b:"purent", a:["pouvaient","pourront"]},
  {q:"Il (avoir) ___ soudain une idée. (passé simple)", b:"eut", a:["avait","aura"]},
  {q:"Nous (être) ___ surpris par l'orage. (passé simple)", b:"fûmes", a:["étions","serons"]},
  {q:"Je crains qu'il ne (venir) ___ trop tard. (subjonctif)", b:"vienne", a:["vient","viendra"]},
  {q:"Il est important que vous (savoir) ___ la vérité. (subjonctif)", b:"sachiez", a:["savez","saurez"]}
);
BANQUES.s3_grammaire.push(
  {q:"« La souris est mangée par le chat. » — La phrase est à la voix...", b:"passive", a:["active","pronominale"]},
  {q:"Dans « Je donne un os au chien », « au chien » est un...", b:"complément indirect", a:["complément direct","sujet"]},
  {q:"Dans « Je mange une pomme », « une pomme » est un...", b:"complément direct", a:["complément indirect","attribut"]},
  {q:"Dans « Elle semble fatiguée », « fatiguée » est...", b:"un attribut du sujet", a:["un complément direct","une apposition"]}
);
BANQUES.s3_bio.push(
  {q:"Les glucides fournissent principalement...", b:"de l'énergie", a:["des os","de l'eau"]},
  {q:"Le cœur est...", b:"un muscle", a:["un os","une glande"]},
  {q:"La plus grosse artère du corps est...", b:"l'aorte", a:["la veine cave","la carotide seule"]},
  {q:"Une alimentation équilibrée doit être...", b:"variée et proportionnée", a:["composée uniquement de protéines","sans aucun lipide"]},
  {q:"La salive commence la digestion...", b:"dans la bouche", a:["dans l'estomac","dans l'intestin"]}
);
BANQUES.s3_histoire.push(
  {q:"L'expédition de Magellan réalise le premier...", b:"tour du monde", a:["voyage en Amérique","voyage en Inde"]},
  {q:"Léonard de Vinci est une grande figure de...", b:"la Renaissance", a:["du Moyen Âge","des Lumières"]},
  {q:"Le commerce triangulaire reliait l'Europe, l'Afrique et...", b:"les Amériques", a:["l'Asie","l'Océanie"]},
  {q:"Louis XIV fait construire le château de...", b:"Versailles", a:["Chambord","Fontainebleau"]},
  {q:"Les Temps modernes se terminent avec...", b:"la Révolution française (1789)", a:["la chute de Rome","la Première Guerre mondiale"]}
);
BANQUES.s3_geo.push(
  {q:"La Terre compte ___ continents.", b:"6", a:["4","8"]},
  {q:"Le méridien de référence (0°) passe par...", b:"Greenwich", a:["Paris","New York"]},
  {q:"La latitude se mesure par rapport...", b:"à l'équateur", a:["au méridien de Greenwich","au pôle Nord"]},
  {q:"Le plus haut sommet du monde est...", b:"l'Everest", a:["le Mont Blanc","le Kilimandjaro"]}
);
BANQUES.s3_anglais.push(
  {q:"The past simple of « buy » is...", b:"bought", a:["buyed","buied"]},
  {q:"The past simple of « take » is...", b:"took", a:["taked","taken"]},
  {q:"Is there ___ milk in the fridge?", b:"any", a:["some","a"]},
  {q:"There are ___ apples on the table.", b:"some", a:["any","much"]},
  {q:"How ___ money do you have?", b:"much", a:["many","few"]}
);

/* ---------- S4 ---------- */
BANQUES.s4_francais.push(
  {q:"Un argument qui s'appuie sur des chiffres est un argument...", b:"chiffré / factuel", a:["d'autorité","affectif"]},
  {q:"Citer un expert pour convaincre est un argument...", b:"d'autorité", a:["logique pur","d'expérience personnelle"]},
  {q:"« en revanche », « au contraire » sont des connecteurs...", b:"d'opposition", a:["de cause","d'addition"]},
  {q:"« de plus », « en outre » sont des connecteurs...", b:"d'addition", a:["d'opposition","de conclusion"]},
  {q:"« en somme », « pour conclure » annoncent...", b:"la conclusion", a:["un exemple","une objection"]},
  {q:"Réfuter un argument, c'est...", b:"démontrer qu'il est faux ou insuffisant", a:["le répéter","l'accepter"]},
  {q:"Le destinataire d'un texte argumentatif est celui...", b:"qu'on cherche à convaincre", a:["qui écrit le texte","qui imprime le texte"]},
  {q:"« Il semble que », « peut-être » sont des marques de...", b:"modalisation (nuance)", a:["certitude absolue","négation"]}
);
BANQUES.s4_math_qcm.push(
  {q:"(a − b)² = ?", b:"a² − 2ab + b²", a:["a² + b²","a² − b²"]},
  {q:"Factoriser a² − 25 donne...", b:"(a − 5)(a + 5)", a:["(a − 5)²","(a + 5)²"]},
  {q:"Dans y = ax + b, le nombre b est...", b:"l'ordonnée à l'origine", a:["la pente","une racine"]},
  {q:"Si un produit de facteurs est nul, alors...", b:"au moins un facteur est nul", a:["tous les facteurs sont nuls","aucun facteur n'est nul"]},
  {q:"x² = 36 a pour solutions...", b:"6 et −6", a:["6 uniquement","18"]},
  {q:"Deux droites de même pente sont...", b:"parallèles", a:["perpendiculaires","confondues obligatoirement"]},
  {q:"√(a²) pour a positif vaut...", b:"a", a:["a²","2a"]}
);
BANQUES.s4_trigo.push(
  {q:"L'hypoténuse est le côté situé en face de...", b:"l'angle droit", a:["l'angle le plus petit","la hauteur"]},
  {q:"sin 90° = ?", b:"1", a:["0","1/2"]},
  {q:"cos 0° = ?", b:"1", a:["0","−1"]},
  {q:"Pour retrouver un angle à partir de son sinus, on utilise...", b:"sin⁻¹ (arcsin)", a:["sin²","1/sin"]}
);
BANQUES.s4_sciences.push(
  {q:"Un excellent conducteur électrique est...", b:"le cuivre", a:["le plastique","le verre"]},
  {q:"Un ion positif s'appelle un...", b:"cation", a:["anion","neutron"]},
  {q:"Dans un circuit en série, si un élément est coupé...", b:"tout le circuit s'éteint", a:["le reste fonctionne","la tension augmente seule"]},
  {q:"Le symbole chimique du cuivre est...", b:"Cu", a:["Co","Cr"]},
  {q:"L'eau pure a un pH de...", b:"7", a:["0","14"]}
);
BANQUES.s4_conjugaison.push(
  {q:"Avant qu'il ne (partir) ___, dis-lui merci. (subjonctif)", b:"parte", a:["part","partira"]},
  {q:"Si nous avions su, nous (venir) ___ plus tôt.", b:"serions venus", a:["viendrons","venions"]},
  {q:"Il est possible qu'elle (savoir) ___ déjà. (subjonctif)", b:"sache", a:["sait","saura"]},
  {q:"Dès que tu (finir) ___, appelle-moi. (futur antérieur possible : auras fini)", b:"auras fini", a:["as fini","finiras"]},
  {q:"J'aimerais que vous (être) ___ présents. (subjonctif)", b:"soyez", a:["êtes","serez"]}
);
BANQUES.s4_geo.push(
  {q:"Délocaliser une production, c'est...", b:"la déplacer vers un autre pays", a:["l'arrêter définitivement","la vendre localement"]},
  {q:"Un hub est...", b:"une plateforme de correspondances (port, aéroport)", a:["une usine","une monnaie"]},
  {q:"Le conteneur a révolutionné le commerce car il est...", b:"standardisé", a:["gratuit","invisible"]},
  {q:"L'OMC s'occupe...", b:"du commerce mondial", a:["de la santé mondiale","du climat"]},
  {q:"Une zone franche attire les entreprises grâce à...", b:"des avantages fiscaux", a:["son climat","sa langue"]}
);
BANQUES.s4_anglais.push(
  {q:"« You like tea, ___? »", b:"don't you", a:["do you","aren't you"]},
  {q:"« She can swim, ___? »", b:"can't she", a:["can she","doesn't she"]},
  {q:"America ___ by Columbus in 1492. (discover)", b:"was discovered", a:["discovered","is discovered"]},
  {q:"He told me (that) he ___ busy the day before.", b:"had been", a:["is","will be"]},
  {q:"The letter ___ yesterday. (send)", b:"was sent", a:["sent","is sent"]}
);

/* ---------- S5 ---------- */
BANQUES.s5_francais.push(
  {q:"Le registre qui exprime les sentiments personnels est...", b:"lyrique", a:["épique","comique"]},
  {q:"Le registre qui célèbre les exploits héroïques est...", b:"épique", a:["lyrique","satirique"]},
  {q:"Le classicisme (XVIIᵉ) impose au théâtre la règle des...", b:"trois unités", a:["cinq actes obligatoires partout","rimes croisées"]},
  {q:"Molière est un dramaturge du...", b:"XVIIᵉ siècle (classicisme)", a:["XIXᵉ siècle","Moyen Âge"]},
  {q:"Le symbolisme a pour précurseur...", b:"Baudelaire", a:["Ronsard","Rabelais"]}
);
BANQUES.s5_math_qcm.push(
  {q:"Si f'(a) = 0 et f' change de signe en a, alors f possède en a...", b:"un extremum", a:["une asymptote","une racine obligatoirement"]},
  {q:"La pente de la tangente en un point égale...", b:"la dérivée en ce point", a:["la primitive","l'ordonnée du point"]},
  {q:"Si Δ < 0, l'équation du second degré a...", b:"aucune solution réelle", a:["deux solutions réelles","une solution double"]},
  {q:"ax² + bx + c avec racines x₁ et x₂ se factorise en...", b:"a(x − x₁)(x − x₂)", a:["(x + x₁)(x + x₂)","a(x₁ − x₂)"]},
  {q:"Une fonction est décroissante là où sa dérivée est...", b:"négative", a:["positive","égale à 1"]}
);
BANQUES.s5_sciences.push(
  {q:"La concentration molaire s'exprime en...", b:"mol/L", a:["g/L uniquement","mol/kg uniquement"]},
  {q:"La vitesse moyenne se calcule par...", b:"distance ÷ temps", a:["temps ÷ distance","distance × temps"]},
  {q:"Le poids se calcule par P = m × g, avec g valant environ...", b:"9,81 N/kg", a:["1 N/kg","100 N/kg"]},
  {q:"L'être humain possède ___ chromosomes.", b:"46", a:["23","92"]},
  {q:"Le poids se mesure en...", b:"newtons (N)", a:["kilogrammes","joules"]}
);
BANQUES.s5_litterature.push(
  {q:"Paul Verlaine est un poète associé à...", b:"Rimbaud et au symbolisme", a:["Molière","la Pléiade"]},
  {q:"La Comédie humaine est l'œuvre monumentale de...", b:"Honoré de Balzac", a:["Émile Zola","Victor Hugo"]},
  {q:"Le Rouge et le Noir est un roman de...", b:"Stendhal", a:["Flaubert","Balzac"]},
  {q:"Maupassant est célèbre pour ses...", b:"nouvelles (Boule de Suif, Le Horla...)", a:["tragédies en vers","essais philosophiques"]},
  {q:"Notre-Dame de Paris est un roman de...", b:"Victor Hugo", a:["Alexandre Dumas","Émile Zola"]}
);
BANQUES.s5_histoire.push(
  {q:"L'armistice de la Première Guerre mondiale est signé le...", b:"11 novembre 1918", a:["8 mai 1945","14 juillet 1918"]},
  {q:"Le traité de Versailles (1919) impose des sanctions à...", b:"l'Allemagne", a:["la France","la Belgique"]},
  {q:"Hitler arrive au pouvoir en Allemagne en...", b:"1933", a:["1929","1939"]},
  {q:"Le débarquement de Normandie a lieu le...", b:"6 juin 1944", a:["11 novembre 1944","8 mai 1945"]},
  {q:"La crise de 1929 provoque...", b:"un chômage massif", a:["la prospérité","la fin des banques partout"]},
  {q:"La fin de la Seconde Guerre mondiale en Europe date du...", b:"8 mai 1945", a:["6 juin 1944","2 septembre 1946"]}
);
BANQUES.s5_geo.push(
  {q:"Plus de la moitié de l'humanité vit aujourd'hui...", b:"en ville", a:["à la campagne","en zone polaire"]},
  {q:"Une mégapole compte plus de...", b:"10 millions d'habitants", a:["1 million","100 000"]},
  {q:"Le PIB mesure...", b:"la richesse produite par un pays", a:["la population","la superficie"]},
  {q:"Le Sahel est une zone...", b:"semi-aride au sud du Sahara", a:["polaire","tropicale humide"]},
  {q:"La pyramide des âges représente...", b:"la population par âge et par sexe", a:["les montagnes","les revenus"]}
);
BANQUES.s5_anglais.push(
  {q:"I'd rather you ___ smoking.", b:"stopped", a:["stop","will stop"]},
  {q:"It's high time we ___ . (leave)", b:"left", a:["leave","are leaving"]},
  {q:"Neither of them ___ the answer.", b:"knows", a:["know","are knowing"]},
  {q:"Hardly ___ arrived when it started to rain.", b:"had we", a:["we had","we have"]},
  {q:"He denied ___ the window. (break)", b:"breaking", a:["to break","break"]}
);

/* ---------- S6 ---------- */
BANQUES.s6_francais.push(
  {q:"Le plan « thèse, antithèse, synthèse » est un plan...", b:"dialectique", a:["chronologique","descriptif"]},
  {q:"Attaquer la personne plutôt que ses idées est un argument...", b:"ad hominem", a:["d'autorité","par analogie"]},
  {q:"Dire le contraire de ce qu'on pense pour se moquer est...", b:"de l'ironie", a:["une litote","un pléonasme"]},
  {q:"Un champ lexical est...", b:"un ensemble de mots liés à un même thème", a:["une famille de rimes","un type de plan"]},
  {q:"Reformuler la question en problème à résoudre, c'est poser...", b:"la problématique", a:["la conclusion","l'exemple"]}
);
BANQUES.s6_math_qcm.push(
  {q:"La dérivée de ln x est...", b:"1/x", a:["ln x","x"]},
  {q:"e⁰ = ?", b:"1", a:["0","e"]},
  {q:"Une primitive de cos x est...", b:"sin x + c", a:["−sin x + c","cos x + c"]},
  {q:"Pour tout réel x, x² est...", b:"positif ou nul", a:["strictement positif","négatif"]},
  {q:"Si le dénominateur s'annule en a (et pas le numérateur), la courbe admet en a...", b:"une asymptote verticale", a:["un maximum","une racine"]},
  {q:"ln(a × b) = ?", b:"ln a + ln b", a:["ln a × ln b","ln a − ln b"]}
);
BANQUES.s6_sciences.push(
  {q:"La structure en double hélice de l'ADN a été décrite par...", b:"Watson et Crick", a:["Darwin et Wallace","Curie et Becquerel"]},
  {q:"Le neurone transmet...", b:"l'influx nerveux", a:["le sang","les hormones uniquement"]},
  {q:"Les principaux gaz à effet de serre sont...", b:"le CO₂ et le méthane", a:["l'oxygène et l'azote","l'hélium et le néon"]},
  {q:"Une pile transforme l'énergie...", b:"chimique en électrique", a:["électrique en chimique","mécanique en lumière"]},
  {q:"La fréquence se mesure en...", b:"hertz (Hz)", a:["joules","volts"]}
);
BANQUES.s6_litterature.push(
  {q:"Le Petit Prince est l'œuvre de...", b:"Antoine de Saint-Exupéry", a:["Albert Camus","Marcel Pagnol"]},
  {q:"La Cantatrice chauve est une pièce de...", b:"Eugène Ionesco", a:["Samuel Beckett","Jean-Paul Sartre"]},
  {q:"Jacques Prévert est célèbre pour son recueil...", b:"Paroles", a:["Les Fleurs du mal","Alcools"]},
  {q:"Un récit où l'auteur raconte sa propre vie est...", b:"une autobiographie", a:["une biographie","une fable"]},
  {q:"La Peste est un roman de...", b:"Albert Camus", a:["Sartre","Malraux"]}
);
BANQUES.s6_histoire.push(
  {q:"La guerre froide oppose deux blocs dirigés par...", b:"les États-Unis et l'URSS", a:["la France et l'Angleterre","la Chine et l'Inde"]},
  {q:"Le mur de Berlin est construit en...", b:"1961", a:["1945","1975"]},
  {q:"La crise des missiles de Cuba a lieu en...", b:"1962", a:["1955","1970"]},
  {q:"L'Inde obtient son indépendance en...", b:"1947", a:["1960","1930"]},
  {q:"L'URSS disparaît en...", b:"1991", a:["1989","1995"]},
  {q:"Au fil de ses réformes de l'État, la Belgique est devenue...", b:"un État fédéral", a:["un État unitaire centralisé","une confédération avec la France"]}
);
BANQUES.s6_geo.push(
  {q:"L'accord de Paris (2015) porte sur...", b:"le climat", a:["le commerce","le nucléaire militaire"]},
  {q:"La population mondiale dépasse aujourd'hui...", b:"8 milliards d'habitants", a:["5 milliards","12 milliards"]},
  {q:"Le canal de Suez relie...", b:"la Méditerranée et la mer Rouge", a:["l'Atlantique et le Pacifique","deux fleuves européens"]},
  {q:"La combustion des énergies fossiles rejette principalement...", b:"du CO₂", a:["de l'oxygène","de l'hélium"]}
);

/* ---------- NÉERLANDAIS (S3 → rhéto) ---------- */
BANQUES.s3_neerlandais = [
  {q:"___ huis (la maison)", b:"het", a:["de","den"]},
  {q:"___ tafel (la table)", b:"de", a:["het","dat"]},
  {q:"Ik ___ naar school. (gaan)", b:"ga", a:["gaat","gaan"]},
  {q:"Hij ___ een boek. (lezen)", b:"leest", a:["lees","lezen"]},
  {q:"Wij ___ in België. (wonen)", b:"wonen", a:["woont","woon"]},
  {q:"Eén appel, twee ___", b:"appels", a:["appelen","appeles"]},
  {q:"Eén kind, twee ___", b:"kinderen", a:["kinds","kindes"]},
  {q:"« Bedankt » signifie...", b:"merci", a:["s'il vous plaît","au revoir"]},
  {q:"« Tot ziens » signifie...", b:"au revoir", a:["bonjour","merci"]},
  {q:"« Ik heet Jan » signifie...", b:"Je m'appelle Jan", a:["J'aime Jan","Je cherche Jan"]},
  {q:"« Hoe laat is het? » signifie...", b:"Quelle heure est-il ?", a:["Quel temps fait-il ?","Où est-ce ?"]},
  {q:"« rood » signifie...", b:"rouge", a:["vert","noir"]}
];
BANQUES.s4_neerlandais = [
  {q:"Ik ___ gisteren gewerkt. (hebben)", b:"heb", a:["ben","hebt"]},
  {q:"Hij is naar huis ___ . (gaan, participe)", b:"gegaan", a:["gaan","gegaat"]},
  {q:"Ik heb een brief ___ . (schrijven, participe)", b:"geschreven", a:["geschrijft","schreven"]},
  {q:"Morgen ___ ik naar Brussel. (inversion)", b:"ga", a:["gaat","gaan"]},
  {q:"Ik ___ goed zwemmen. (kunnen)", b:"kan", a:["ken","kunt"]},
  {q:"« Ik moet werken » signifie...", b:"Je dois travailler", a:["Je peux travailler","Je veux travailler"]},
  {q:"« Ik wil slapen » signifie...", b:"Je veux dormir", a:["Je dois dormir","Je vais dormir"]},
  {q:"Le participe passé de « maken » est...", b:"gemaakt", a:["gemaken","maakte"]},
  {q:"« gisteren » signifie...", b:"hier", a:["demain","aujourd'hui"]},
  {q:"« morgen » signifie...", b:"demain", a:["hier","ce soir"]}
];
BANQUES.s5_neerlandais = [
  {q:"Ik denk dat hij morgen ___ . (komen)", b:"komt", a:["komen","kom"]},
  {q:"Dans une subordonnée avec « dat », le verbe conjugué se place...", b:"à la fin", a:["en deuxième position","au début"]},
  {q:"Ik ga naar de winkel ___ brood te kopen.", b:"om", a:["voor","dat"]},
  {q:"« hoewel » signifie...", b:"bien que", a:["parce que","donc"]},
  {q:"« omdat » signifie...", b:"parce que", a:["bien que","mais"]},
  {q:"Zij zei dat ze ziek ___ . (zijn, passé)", b:"was", a:["is","zijn"]},
  {q:"Le comparatif de « goed » est...", b:"beter", a:["goeder","meer goed"]},
  {q:"« Ik verheug me op de vakantie » signifie...", b:"Je me réjouis des vacances", a:["Je déteste les vacances","J'oublie les vacances"]},
  {q:"« daarom » signifie...", b:"c'est pourquoi", a:["cependant","parfois"]},
  {q:"Eén stad, twee ___", b:"steden", a:["stads","staden"]}
];
BANQUES.s6_neerlandais = [
  {q:"De brief ___ gisteren verstuurd. (passif)", b:"werd", a:["wordt","was aan"]},
  {q:"« Hij zou komen » signifie...", b:"Il viendrait", a:["Il est venu","Il doit venir"]},
  {q:"« zowel... als » signifie...", b:"aussi bien... que", a:["ni... ni","ou bien... ou bien"]},
  {q:"« noch... noch » signifie...", b:"ni... ni", a:["et... et","soit... soit"]},
  {q:"« Ik ben het met je eens » signifie...", b:"Je suis d'accord avec toi", a:["Je suis fâché contre toi","Je pars avec toi"]},
  {q:"« solliciteren » signifie...", b:"postuler à un emploi", a:["solliciter de l'argent","téléphoner"]},
  {q:"« de vergadering » signifie...", b:"la réunion", a:["le voyage","la facture"]},
  {q:"Als ik rijk ___, zou ik reizen. (zijn)", b:"was", a:["ben","zal zijn"]}
];
