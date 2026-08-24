 HEAD
/**
 * ia-ecole.js
 * Module à ajouter au site École+ (GitHub Pages)
 * Appelle la fonction serverless Vercel qui elle-même appelle Claude.
 */

const IA_API_URL = 'https://ecole-ia-api.vercel.app/api/ai-exercice';

/**
 * Génère un nouvel exercice via l'IA
 * @param {string} matiere - ex: "mathématiques"
 * @param {string} niveau - ex: "P4", "S2", "M2"
 * @param {string} sujet - optionnel, ex: "les fractions"
 * @returns {Promise<Object>} { question, type, choix, bonneReponse, difficulte }
 */
async function genererExerciceIA(matiere, niveau, sujet = '') {
  const res = await fetch(IA_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mode: 'generation', matiere, niveau, sujet })
  });
  if (!res.ok) throw new Error('Erreur génération exercice');
  return res.json();
}

/**
 * Corrige la réponse de l'élève et fournit une explication adaptée à l'âge
 * @param {string} niveau
 * @param {string} questionPosee
 * @param {string} bonneReponse
 * @param {string} reponseEleve
 * @returns {Promise<Object>} { correct, explication, encouragement, conseilRevision }
 */
async function corrigerReponseIA(niveau, questionPosee, bonneReponse, reponseEleve) {
  const res = await fetch(IA_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mode: 'correction', niveau, questionPosee, bonneReponse, reponseEleve })
  });
  if (!res.ok) throw new Error('Erreur correction');
  return res.json();
}

/**
 * Exemple d'intégration dans une page de module existant :
 *
 * document.getElementById('btn-plus-exercices').addEventListener('click', async () => {
 *   const zone = document.getElementById('zone-exercice-ia');
 *   zone.innerHTML = 'Génération en cours...';
 *   try {
 *     const ex = await genererExerciceIA('mathématiques', 'P4', 'les fractions');
 *     zone.innerHTML = `<p>${ex.question}</p>`;
 *   } catch (e) {
 *     zone.innerHTML = 'Erreur, réessaie plus tard.';
 *   }
 * });
 *
 * const correction = await corrigerReponseIA('P4', ex.question, ex.bonneReponse, reponseElevee);

/**
 * ia-ecole.js
 * Module à ajouter au site École+ (GitHub Pages)
 * Appelle la fonction serverless Vercel qui elle-même appelle Claude.
 */

const IA_API_URL = 'https://ecole-ia-api.vercel.app/api/ai-exercice';

/**
 * Génère un nouvel exercice via l'IA
 * @param {string} matiere - ex: "mathématiques"
 * @param {string} niveau - ex: "P4", "S2", "M2"
 * @param {string} sujet - optionnel, ex: "les fractions"
 * @returns {Promise<Object>} { question, type, choix, bonneReponse, difficulte }
 */
async function genererExerciceIA(matiere, niveau, sujet = '') {
  const res = await fetch(IA_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mode: 'generation', matiere, niveau, sujet })
  });
  if (!res.ok) throw new Error('Erreur génération exercice');
  return res.json();
}

/**
 * Corrige la réponse de l'élève et fournit une explication adaptée à l'âge
 * @param {string} niveau
 * @param {string} questionPosee
 * @param {string} bonneReponse
 * @param {string} reponseEleve
 * @returns {Promise<Object>} { correct, explication, encouragement, conseilRevision }
 */
async function corrigerReponseIA(niveau, questionPosee, bonneReponse, reponseEleve) {
  const res = await fetch(IA_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mode: 'correction', niveau, questionPosee, bonneReponse, reponseEleve })
  });
  if (!res.ok) throw new Error('Erreur correction');
  return res.json();
}

/**
 * Exemple d'intégration dans une page de module existant :
 *
 * document.getElementById('btn-plus-exercices').addEventListener('click', async () => {
 *   const zone = document.getElementById('zone-exercice-ia');
 *   zone.innerHTML = 'Génération en cours...';
 *   try {
 *     const ex = await genererExerciceIA('mathématiques', 'P4', 'les fractions');
 *     zone.innerHTML = `<p>${ex.question}</p>`;
 *   } catch (e) {
 *     zone.innerHTML = 'Erreur, réessaie plus tard.';
 *   }
 * });
 *
 * const correction = await corrigerReponseIA('P4', ex.question, ex.bonneReponse, reponseElevee);
 b39a81bef70a1bbd1f255d197e9d0cec9da60717
 */