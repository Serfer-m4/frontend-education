console.log("5.2. Розрахунок обміну валюти");

const usd = 26;
const amount = Number(prompt('Введіть число:'));
if (!isNaN(amount) && amount > 0) {
  console.log(`${amount} USD = ${amount * usd} UAH`);
} else {
  console.log("Будь ласка, введіть коректне число.");
}

const dollarsArray = Array.from({ length: 10 }, (_, i) => (i + 1) * 10);
const result = dollarsArray.map(dollars => `${dollars} USD = ${dollars * usd} UAH`);

console.log(result.join("\n"));