import { Chart, registerables } from "chart.js";

Chart.register(...registerables);
const graficoDolar = document.getElementById("graficoDolar");
const graficoParaDolar = new Chart(graficoDolar, {
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
const listaCotacao = document.querySelectorAll("[data-lista]");
function cotacao(nome, valor) {
  listaCotacao.forEach((lista) => {
    if (lista.id === nome) {
      imprimeCotacao(lista, nome, valor);
    }
  });
}
function imprimeCotacao(listaCotacao, nome, valor) {
  listaCotacao.innerHTML = "";
  const plurais = {
    dolar: "dolares",
    iene: "ienes",
  };
  for (let multiplicador = 1; multiplicador <= 1000; multiplicador *= 10) {
    const itemLista = document.createElement("li");
    itemLista.innerHTML = `${multiplicador} ${
      multiplicador == 1 ? nome : plurais[nome]
    }: R$${(valor * multiplicador).toFixed(2)}`;
    listaCotacao.appendChild(itemLista);
  }
}
//export default imprimeCotacao

const workerDolar = new Worker(
  new URL("../scripts/worker/workerDolar.js", import.meta.url),
  { type: "module" }
);
workerDolar.postMessage("usd");
workerDolar.addEventListener("message", (event) => {
  let tempo = horario();
  let valor = event.data.USDBRL.ask;
  cotacao("dolar", valor);
  atualizaGrafico(graficoParaDolar, tempo, valor);
});

const graficoIene = document.getElementById("graficoIene");
const graficoParaIene = new Chart(graficoIene, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Iene",
        data: [],
        borderWidth: 1,
      },
    ],
  },
});
const workerIene = new Worker(
  new URL("../scripts/worker/workerIene.js", import.meta.url),
  { type: "module" }
);
workerIene.postMessage("iene");
workerIene.addEventListener("message", (event) => {
  let tempo = horario();
  let valor = event.data.JPYBRL.ask;
  cotacao("iene", valor);
  atualizaGrafico(graficoParaIene, tempo, valor);
});
