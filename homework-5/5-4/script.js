// 5.4. Просте число чи ні
console.log("5.4. Просте число чи ні");

const num = Number(prompt("Введіть ціле число:"));

if (isNaN(num) || !Number.isInteger(num)) {
  alert("Будь ласка, введіть ціле число.");
} else if (num <= 1) {
  alert("Число має бути більше 1");
} else {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  alert(isPrime ? "Число просте" : "Число не просте");
}