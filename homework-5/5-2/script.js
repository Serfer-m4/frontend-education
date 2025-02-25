console.log("5.2. Розрахунок обміну валюти");

const usd = 26;
const amount = Number(prompt('Введіть число:'));
if (!isNaN(amount) && amount > 0) {
  console.log(`${amount} USD = ${amount * usd} UAH`);
} else {
  console.log("Будь ласка, введіть коректне число.");
}