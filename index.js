const fromcurrency = document.getElementById("from-currency");
const tocurrency = document.getElementById("to-currency");
const api = ` https://v6.exchangerate-api.com/v6/08f80a967dd8e8fb7b87aba1/latest/USD`;

currencies.forEach((element) => {
  const option = document.createElement("option");
  option.value = element;
  option.text = element;
  fromcurrency.appendChild(option);
});

currencies.forEach((element) => {
  const option = document.createElement("option");
  option.value = element;
  option.text = element;
  tocurrency.appendChild(option);
});

fromcurrency.value = "USD";
tocurrency.value = "AFN";

let convertCurrency = () => {
  const amount = document.querySelector("#amount-input").value;
  const from_currency = fromcurrency.value;
  const to_currency = tocurrency.value;

  if (amount.length != 0) {
    fetch(api)
      .then((resp) => resp.json())
      .then((data) => {
        let fromExchange = data.conversion_rates[from_currency];
        let toExchange = data.conversion_rates[to_currency];

        const convertedAmount = (amount / fromExchange) * toExchange;

        result.innerHTML = `${amount} ${from_currency} = ${convertedAmount.toFixed(2)} ${to_currency}`
      });
  } else {
    alert("Please fill in the amount");
  }
};

document.querySelector("#btn").addEventListener("click", convertCurrency);
window.addEventListener("load", convertCurrency);
