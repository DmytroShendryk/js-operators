let numFirst = +prompt ("enter number");
let numSecond = +prompt ("enter number");
let operator = prompt("enter operator"); // any: +, -, *, /, %
function calcResult(numFirst, numSecond, operator){
    switch (operator) {
        case '+':
          return numFirst + numSecond;
        case '-':
          return numFirst - numSecond;
        case '*':
          return numFirst * numSecond;
        case '/':
          return numFirst / numSecond;
        case '<':
          return numFirst < numSecond;
        case '>':
          return numFirst > numSecond;
      }
}
alert(calcResult(numFirst, numSecond, operator));

console.log(numFirst);
console.log(numSecond);
console.log(calcResult);
