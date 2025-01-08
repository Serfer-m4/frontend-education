// 3.3. Розкласти п'ятизначне число
console.log("3.3. Розкласти п'ятизначне число:")
const code = 77531
function splitNumber(code) {
    return code
        .toString()
        .split("")
        .join(" ")
}
const splCode = splitNumber(code);
console.log(splCode); // 7 7 5 3 1
