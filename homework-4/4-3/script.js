// 4.3. Портрет користувача
console.log("4.3. Портрет користувача");
const userName = prompt("Назвіться, будь ласка:") || "Анонім";
const birthYear = prompt("Введіть свій рік народження:");
let d = new Date();
let yearNow = d.getFullYear();
let age = yearNow - birthYear;
const cityLive = prompt("В якому місті Ви живете?");
const favoriteSport = prompt("Який Ваш улюблений вид спорту?");

let message = "";
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
  let cityShow;
  if (cityLive === "Київ") {
    cityShow = "Ви живете у столиці України.";
  } else if (cityLive === "Вашингтон") {
    cityShow = "Ви живете у столиці США.";
  } else if (cityLive === "Лондон") {
    cityShow = "Ви живете у столиці Великобританії.";
  } else {
    cityShow = `Ви живете у місті ${cityLive}.`;
  }
  let sportMessage;
  if (favoriteSport === "футбол") {
    sportMessage = "Круто! Ви мрієте стати як Ліонель Мессі!";
  } else if (favoriteSport === "баскетбол") {
    sportMessage = "Круто! Ви мрієте стати як Майкл Джордан!";
  } else if (favoriteSport === "теніс") {
    sportMessage = "Круто! Ви мрієте стати як Роджер Федерер!";
  } else {
    sportMessage = `Ваш улюблений вид спорту — ${favoriteSport}.`;
  }
  alert(`Ваш вік: ${age} років.\n${cityShow}\n${sportMessage}`);
}

