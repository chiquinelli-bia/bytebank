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
  option: {
    responsive: true,
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
    euro: "euros",
  };
  for (let multiplicador = 1; multiplicador <= 1000; multiplicador *= 10) {
    const itemLista = document.createElement("li");
    itemLista.innerHTML = `${multiplicador} ${
      multiplicador == 1 ? nome : plurais[nome]
    }: R$${(valor * multiplicador).toFixed(2)}`;
    listaCotacao.appendChild(itemLista);
  }
}

// =============== DÓLAR ===============
const workerDolar = new Worker(
  new URL("../scripts/worker/workerDolar.js", import.meta.url),
  { type: "module" }
);

workerDolar.postMessage("usd");

workerDolar.addEventListener("message", (event) => {
  if (!event.data || !event.data.USDBRL) return; // <-- impede erro

  let tempo = horario();
  let valor = event.data.USDBRL.ask;
  cotacao("dolar", valor);
  atualizaGrafico(graficoParaDolar, tempo, valor);
});

// =============== IENE ===============
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
  if (!event.data || !event.data.JPYBRL) return; // <-- impede erro

  let tempo = horario();
  let valor = event.data.JPYBRL.ask;
  cotacao("iene", valor);
  atualizaGrafico(graficoParaIene, tempo, valor);
});

// =============== EURO ===============
const graficoEuro = document.getElementById("graficoEuro");
const graficoParaEuro = new Chart(graficoEuro, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Euro",
        data: [],
        borderWidth: 1,
      },
    ],
  },
});

const workerEuro = new Worker(
  new URL("../scripts/worker/workerEuro.js", import.meta.url),
  { type: "module" }
);

workerEuro.postMessage("Euro");

workerEuro.addEventListener("message", (event) => {
  if (!event.data || !event.data.EURBRL) return; // <-- impede erro

  let tempo = horario();
  let valor = event.data.EURBRL.ask;
  cotacao("euro", valor);
  atualizaGrafico(graficoParaEuro, tempo, valor);
});
