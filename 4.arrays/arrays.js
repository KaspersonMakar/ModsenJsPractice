function arrayMultiplier(arr) {
    // for (let num of arr){
    //     num *=1.1;
    // }
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= 1.1;
    }
}

let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [9, 8, 7, 6, 5, 0];

arrayMultiplier(array1);
arrayMultiplier(array2);
console.log(array1);
console.log(array2);