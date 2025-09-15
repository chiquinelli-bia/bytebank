import { Chart, registerables } from "chart.js";
import axios from "axios";

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
async function apiMoedas() {
  const response = await axios.get(
    "https://economia.awesomeapi.com.br/json/last/USD-BRL"
  );
  console.log(response);
  return await response.data;
}

apiMoedas();
