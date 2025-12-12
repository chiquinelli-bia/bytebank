import axios from "axios";

async function apiMoedas() {
  const response = await axios.get(`/api/moeda?moeda=USD-BRL`);
  postMessage(response.data);
  return await response.data;
}
addEventListener("message", () => {
  apiMoedas();
  setInterval(() => apiMoedas(), 60000);
});
