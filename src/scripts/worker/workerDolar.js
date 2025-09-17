async function apiMoedas() {
  const response = await axios.get(
    "https://economia.awesomeapi.com.br/json/last/USD-BRL"
  );
  postMessage(response.data);
  return await response.data;
}
addEventListener("message", () => {
  apiMoedas();
  setInterval(() => apiMoedas(), 5000);
});
