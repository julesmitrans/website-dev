const five = 2 + 3;
const result1 = "2 + 3 = " + five;
console.log(result1);

const result2 = `2 + 3 = ${2 + 3}`;
console.log(result2);

const username = "alice";
const greeting1 = `Welcome home ${username}`;
console.log(greeting1);

const loggedIn = false;
const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;
console.log(greeting2);

global1 = 10;
var functionScoped = 2;
let blockScoped = 5;
const constant1 = global1 + functionScoped -
  blockScoped;

let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];
let variableArray1 = [
  functionScoped,
  blockScoped,
  constant1,
  numberArray1,
  stringArray1
];
console.log(numberArray1);
console.log(stringArray1);
console.log(variableArray1);

numberArray1.push(6);
stringArray1.push('string3');

console.log(numberArray1);
console.log(stringArray1);

const square = (x) => x * x;
const squares = numberArray1.map(square);
const cubes = numberArray1.map(a => a * a * a);

console.log('Squares');
console.log(squares);
console.log('Cubes');
console.log(cubes);

const four = numberArray1.find(a => a === 4);
const string3 = stringArray1.find(a => a === 'string3');

console.log('four', four);
console.log('string3', string3);




const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);


const subtract = (a, b) => {
  return a - b;
}
const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);


function add (a, b) {
  return a + b;
}
const twoPlusFour = add(2, 4);
console.log(twoPlusFour);


console.log('Ternary');
const greeting = loggedIn ? 'Welcome!' : 'Please login';
console.log(greeting)



console.log('Variable types');
let numberVariable = 123;
let floatingPointNumber = 234.345;
let stringVariable = 'Hello World!';
let booleanVariable = true;
let isNumber = typeof numberVariable;
let isString = typeof stringVariable;
let isBoolean = typeof booleanVariable;

console.log(numberVariable);
console.log(floatingPointNumber);
console.log(stringVariable);
console.log(booleanVariable);
console.log(isNumber);
console.log(isString);
console.log(isBoolean);
