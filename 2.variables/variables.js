function someRandomFunc() {
    let x = 1;
    const y = 2;
    var z = 3
    {
        let x = 10;
        const y = 20;
        var z = 30;

        console.log("X inside the block: " + x);
        console.log("Y inside the block: " + y);
        console.log("Z inside the block: " + z);
    }
    console.log("X outside the block: " + x);
    console.log("Y outside the block: " + y);
    console.log("Z outside the block: " + z);
}
someRandomFunc();