const tasks = [
    () => new Promise(resolve =>
        setTimeout(() => {
            console.log('1');
            resolve();
        }, 1500)
    ),
    () => new Promise(resolve =>
        setTimeout(() => {
            console.log('2');
            resolve();
        }, 1000)
    ),
    () => new Promise(resolve =>
        setTimeout(() => {
            console.log('3');
            resolve();
        }, 500)
    )
];

Promise.resolve()
    .then(() => tasks[0]())
    .then(() => tasks[1]())
    .then(() => tasks[2]());