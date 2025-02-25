// 5.3. Пошук потрібних чисел
console.log("5.3. Пошук потрібних чисел");

const cifer = Number(prompt("Введіть число N:"));
let result = "";
if (!isNaN(cifer) && cifer > 0) {
  for (let i = 1; i <= 100; i++) {
    if (i * i <= cifer) {
       result += i + " ";
    } else {
      break;
    }
  }
  console.log(result.trim());
} else {
  console.log("Будь ласка, введіть коректне додатне число.");
}