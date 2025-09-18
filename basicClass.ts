class Person {
    name: string;
    age: number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    greet () {
        console.log(`Hello, My name is ${this.name} and I am a cute a boy, My age is ${this.age}`) 
    }
}

let person1 = new Person("Mahatab", 20)
person1.greet();
