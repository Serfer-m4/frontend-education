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

const bigInteger = 7538475439957945125n
console.log(typeof bigInteger); // bigint 

const symb = Symbol('unieqeId')
console.log(typeof symb); //symbol


const obj = {
    name: "Serfer",
    age: 36,
    job: "it"
};

console.log(typeof obj); // object

const arr = [1, 2, 3]; 
console.log(typeof arr); // object

function example() { 
    console.log("Hello world!"); 
} 
console.log(typeof example); // function