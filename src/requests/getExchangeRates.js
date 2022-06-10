import { exchangeRates } from "exchange-rates-api";

const supportedCurrencies = ["CHF", "EUR", "GBP", "PLN", "USD"];

export default (req, res) => {
  exchangeRates()
    .setApiBaseUrl("https://api.exchangerate.host")
    .latest()
    .symbols(supportedCurrencies)
    .fetch()
    .then((rates) => {
      res.json(rates);
    })
    .catch((error) => {
      res.json(error);
      console.error(error);
    });
};
