const IA_API_URL = 'https://ecole-ia-api.vercel.app/api/ai-exercice';

async function genererExerciceIA(matiere, niveau, sujet = '') {
  const res = await fetch(IA_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mode: 'generation', matiere, niveau, sujet })
  });
  if (!res.ok) throw new Error('Erreur génération exercice');
  return res.json();
}

async function corrigerReponseIA(niveau, questionPosee, bonneReponse, reponseEleve) {
  const res = await fetch(IA_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mode: 'correction', niveau, questionPosee, bonneReponse, reponseEleve })
  });
  if (!res.ok) throw new Error('Erreur correction');
  return res.json();
}