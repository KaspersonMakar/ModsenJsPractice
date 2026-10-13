class person {
    constructor(firstName, age, country) {
        this.firstName = firstName;
        this.age = age;
        this.country = country;
    }
    showInfo() {
        console.log(`Name: ${this.firstName}, Age: ${this.age}, Country: ${this.country}`);
    }
}

let Vanya = new person("Ivan", 18, "Belarus");
Vanya.showInfo();

let Jon = new person("Jon", 26, "UK");
Jon.showInfo();

