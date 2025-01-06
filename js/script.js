// 3.1 Перелік типів
console.log("3.1 Перелік типів:")
const digit = 5 
console.log(typeof digit); // Number

const stroke = 'Happy New Year'
console.log(typeof stroke); //String

const bool = true
console.log(typeof bool); // boolean

const nulish = null
console.log(typeof nulish); // object

const undef = undefined 
console.log(typeof undef); //undefind

const bigInteger = 7538475439576947684957945125n
console.log(typeof bigInteger); // bigint 

const symb = Symbol('unieqeId')
console.log(typeof symb); //symbol


const obj = {
    name: "Serfer",
    age: 36,
    job: "it"
};

console.log(typeof obj); // object
console.log(obj); 
console.log(obj.name, obj.age, obj.job );

// const obj2 = obj

// obj2.name = 'Serhii'

// console.log('obj', obj);
// console.log('obj2', obj2);

// const fruits = ['apple', 'orange', 'banana'];
// fruits.push('grape');

// console.log(fruits);

// 3.2. Числа та рядки
console.log("3.2. Числа та рядки:")
const line1 = 'Lorem ipsum dolor sit amet'
const line2 = 'consectetur adipiscing elit'
const line3 = 'sed do eiusmod tempor incididunt ut labore et'
console.log(line2 + line3 + line1); 

// 3.3. Розкласти п'ятизначне число
console.log("3.3. Розкласти п'ятизначне число:")
const index = 77531
function splitNumber(index) {
    return index
        .toString()
        .split("")
        .join(" ")
}
const splindex = splitNumber(index);
console.log(splindex); // 7 7 5 3 1