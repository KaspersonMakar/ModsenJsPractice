const interval = setInterval(myCallback, 500);
let i = 0;
function myCallback() {
    console.log(i);
    i++;
}
