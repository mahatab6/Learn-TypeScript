class Person {
    public name: string;
    private age: number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    getAge(){
        return this.age
    }
}

class Employee extends Person {
    salary: number;

    constructor(name:string, age: number, salary: number){
        super(name, age)
        this.salary = salary;
    }

    showSalary (){
        console.log(`${this.name} is a good boy. He age is ${this.getAge()} and He salary is ${this.salary}`)
    }
}

let emp = new Employee ("Mahatab", 22, 50000)
emp.showSalary()
