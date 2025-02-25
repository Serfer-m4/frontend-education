// 4.1. Робота з prompt
console.log("4.1. Робота з prompt");
const userName = prompt("Імʼя користувача");
if (userName === null) {
  alert("Ви скасували введення.");
} else if (userName.trim() === "") {
  alert("Ви нічого не ввели.");
} else {
  alert(`Привіт, ${userName}! Як життя?`);
}
