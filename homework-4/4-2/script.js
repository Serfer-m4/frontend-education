console.log("4.2. Перевірка числа");

let number = prompt('Введіть тризначне число:');
const digits = number.split("");
const same = new Set(digits).size !== digits.length; 
if (same) {
  console.log('У числі є однакові цифри.');
} else {
  console.log('Усі цифри в числі різні.');
}