function integerCheck(num) {
    try {
        if (!Number.isInteger(num)) throw new Error ("notAnIntegerException");
        else (console.log(`${num} is an integer.`))
    }
    catch (e) {
        console.log(e.message);
    }
}

let n1 = 1;
let n2 = 3.4;

integerCheck(n1);
integerCheck(n2);