function deleyedFunctionCall(callback){
console.log('Sync operation (1)');
setTimeout(callback,2000);
console.log('another sync operation (2)');
}

function logRandomNumber(){
    console.log(Math.random());
}

deleyedFunctionCall(logRandomNumber);