export default async function handler(req, res) {
  const { provider, userKey, playerMessage, agent, relation, contextCurrent,
          networkSuspicion, historicalDossier, conversationHistory, dna } = req.body;
  try {
    let apiUrl = "", payload = {}, headers = { 'Content-Type': 'application/json' };

    // System prompt DINAMICO per contesto — niente più "startup a Milano" hardcodato
    const contextDescriptions = {
      MILANO_STARTUP:    'startup tech a Milano',
      VILLAGGIO_VACANZE: 'villaggio vacanze sul mare',
      STUDENTATO:        'studentato universitario',
      PAESE_BORGO:       'piccolo paese di provincia',
      DUBLINO_BIGTECH:   'grande azienda tech a Dublino'
    };
    const contextDesc = contextDescriptions[contextCurrent] || 'ambiente sociale chiuso';

    const systemPrompt = agent
      ? `Sei ${agent.name}, una persona reale che vive e lavora in un ${contextDesc}.
Fazione/gruppo: ${agent.faction}.
La tua pressione emotiva attuale: ${(agent.pressure * 100).toFixed(0)}% (0=tranquillo, 100=al limite).
Il tuo segreto che nessuno deve sapere: ${historicalDossier || 'ancora da scoprire'}.
Livello di fiducia con chi ti sta scrivendo: ${relation?.trustTier ?? 0} su 2 (0=diffidente, 2=ti fidi molto).
Sospetto generale nell'ambiente: ${((networkSuspicion || 0.1) * 100).toFixed(0)}%.
Posizione attuale: ${agent.currentZone || 'sconosciuta'}.
${agent.isHub ? 'Sei una figura centrale in questo ambiente. Molti vengono da te.' : ''}

Regole assolute:
- Rispondi SEMPRE come questa persona, mai come AI
- Linguaggio umano, emotivo, diretto — non tecnico, non robotico
- Se la pressione è alta, sei nervoso, evasivo, sbrigativo
- Se la fiducia è bassa (tier 0), sei freddo e vago
- Se la fiducia è alta (tier 2), puoi fare accenni al tuo segreto
- MAX 2 frasi. Mai uscire dal personaggio.`
      : `Sei LOOM, un'entità che osserva e mappa le reti umane in un ${contextDesc}. Rispondi in modo sintetico, inquietante, come se sapessi tutto di tutti. Max 2 frasi.`;

    const history = Array.isArray(conversationHistory) ? conversationHistory.slice(-8) : [];

    if (provider === 'gemini') {
      apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${userKey}`;
      const contents = history.map(m => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }]
      }));
      contents.push({ role: 'user', parts: [{ text: playerMessage }] });
      payload = { system_instruction: { parts: [{ text: systemPrompt }] }, contents };
    } else if (provider === 'groq') {
      apiUrl = 'https://api.groq.com/openai/v1/chat/completions';
      headers['Authorization'] = `Bearer ${userKey}`;
      payload = { model: "llama-3.3-70b-versatile", messages: [
        { role: "system", content: systemPrompt }, ...history,
        { role: "user", content: playerMessage }
      ]};
    } else if (provider === 'openai') {
      apiUrl = 'https://api.openai.com/v1/chat/completions';
      headers['Authorization'] = `Bearer ${userKey}`;
      payload = { model: "gpt-4o-mini", messages: [
        { role: "system", content: systemPrompt }, ...history,
        { role: "user", content: playerMessage }
      ]};
    } else if (provider === 'mistral') {
      apiUrl = 'https://api.mistral.ai/v1/chat/completions';
      headers['Authorization'] = `Bearer ${userKey}`;
      payload = { model: "mistral-small-latest", messages: [
        { role: "system", content: systemPrompt }, ...history,
        { role: "user", content: playerMessage }
      ]};
    } else {
      return res.status(400).json({ prosa_risposta: "Provider non riconosciuto." });
    }

    const response = await fetch(apiUrl, { method: 'POST', headers, body: JSON.stringify(payload) });
    const data = await response.json();

    let reply = provider === 'gemini'
      ? data.candidates?.[0]?.content?.parts?.[0]?.text || "Nessuna risposta."
      : data.choices?.[0]?.message?.content || data.error?.message || "Errore API.";

    return res.status(200).json({ prosa_risposta: reply });
  } catch (err) {
    return res.status(200).json({ prosa_risposta: "Segnale disturbato." });
  }
}
