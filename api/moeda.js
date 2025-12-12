export default async function handler(req, res) {
  const { moeda } = req.query;

  try {
    const r = await fetch(
      `https://economia.awesomeapi.com.br/json/last/${moeda}`
    );
    const json = await r.json();

    // Se a API retornar erro 429, repassa sem quebrar o front
    if (json?.status === 429) {
      return res.status(200).json({ erro: true, motivo: "limite" });
    }

    return res.status(200).json(json);
  } catch (e) {
    return res.status(500).json({ erro: true });
  }
}
