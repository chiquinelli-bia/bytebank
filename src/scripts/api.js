export default async function handler(req, res) {
  const { moeda = "USD-BRL" } = req.query;

  try {
    const resposta = await fetch(
      `https://economia.awesomeapi.com.br/json/last/${moeda}`
    );

    const dados = await resposta.json();

    // Libera o CORS pro seu front-end
    res.setHeader("Access-Control-Allow-Origin", "*");

    res.status(200).json(dados);
  } catch (erro) {
    res.status(500).json({ erro: "Erro ao buscar cotação" });
  }
}
