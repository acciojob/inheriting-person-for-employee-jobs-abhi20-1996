class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
    }
}

class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age);
        this.jobTitle = jobTitle;
    }

    jobGreet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    }
}
const temp_person = new Person("abc", 10); 
temp_person.greet(); 
const temp_employee = new Employee("def", 20, "Developer"); 
temp_employee.greet(); temp_employee.jobGreet();
// Do not change code below this line

window.Person = Person;
window.Employee = Employee;