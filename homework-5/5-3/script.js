// 4.3. Портрет користувача
console.log("4.3. Портрет користувача");
const userName = prompt("Назвіться, будь ласка:");
const birthYear = prompt("Введіть свій рік народження:");
let d = new Date();
let yearNow = d.getFullYear();
let age = yearNow - birthYear;
const cityLive = prompt("В якому місті Ви живете?");
const favoriteSport = prompt("Який Ваш улюблений вид спорту?");

let message = "";
if (!userName) {
  message += "Шкода, що Ви не захотіли ввести своє імʼя.\n";
}
if (!birthYear) {
  message += "Шкода, що Ви не захотіли ввести свій рік народження.\n";
}
if (!cityLive) {
  message += "Шкода, що Ви не захотіли ввести своє місто проживання.\n";
}
if (!favoriteSport) {
  message += "Шкода, що Ви не захотіли ввести свій улюблений вид спорту.";
}
if (message) {
  alert(message);
} else {
  let cityMessage;
  if (city === "Київ") {
    cityMessage = "Ви живете у столиці України.";
  } else if (city === "Вашингтон") {
    cityMessage = "Ви живете у столиці США.";
  } else if (city === "Лондон") {
    cityMessage = "Ви живете у столиці Великобританії.";
  } else {
    cityMessage = `Ви живете у місті ${city}.`;
  }
  
}



alert(`Ваш вік: ${age}\n ${whereDoLive}`);
