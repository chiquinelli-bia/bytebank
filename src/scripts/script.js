import { Chart, registerables } from "chart.js";
import axios from "axios";

Chart.register(...registerables);
const grafico = document.getElementById("grafico");
const graficoParaDolar = new Chart(grafico, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Dolar",
        data: [],
        borderWidth: 1,
      },
    ],
  },
});
setInterval(() => apiMoedas(), 5000);
async function apiMoedas() {
  const response = await axios.get(
    "https://economia.awesomeapi.com.br/json/last/USD-BRL"
  );
  let temp = horario();
  let value = response.data.USDBRL.ask;
  atualizaGrafico(graficoParaDolar, temp, value);
  imprimeCotação("Dólar", value);
  return await response.data;
}

apiMoedas();

function horario() {
  let data = new Date();
  let horario =
    data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
  return horario;
}

horario();

function atualizaGrafico(grafico, legenda, dados) {
  grafico.data.labels.push(legenda);
  grafico.data.datasets.forEach((datasets) => {
    datasets.data.push(dados);
  });
  grafico.update();
}
//cotação
const listaCotação = document.querySelector("[data-lista]");
function imprimeCotação(nome, valor) {
  listaCotação.innerHTML = "";
  for (let multiplicador = 1; multiplicador <= 1000; multiplicador *= 10) {
    const itemLista = document.createElement("li");
    itemLista.innerHTML = `${multiplicador} ${nome}: R$${(
      valor * multiplicador
    ).toFixed(2)}`;
    listaCotação.appendChild(itemLista);
  }
}
//export default imprimeCotação
