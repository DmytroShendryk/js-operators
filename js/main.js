const numFirst = +prompt ("enter number");
const operator = prompt("enter operator"); // any: +, -, *, /, %
const numSecond = +prompt ("enter number");
alert ("user entered" + (numFirst + operator + numSecond))
let addition = numFirst + numSecond;
let subtraction = numFirst - numSecond;
let multiplication = numFirst * numSecond;
let division = numFirst / numSecond;
console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(division);