import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
const grafico = document.getElementById("grafico");
const graficoParaDolar = new Chart(grafico, {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
});
