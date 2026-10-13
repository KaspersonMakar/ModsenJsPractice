function factorial(number) {
    "use strict";
    if(number === 0) return 1;
    if (number === 1) {
        return 1;
    }
    else return number * factorial(number - 1);
}

console.log(factorial(0));
console.log(factorial(4));