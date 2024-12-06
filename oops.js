//Array methods make it easier to manipulate and work with arrays
let fruits=["apple", "banana"];     //Using the push method
fruits.push("kiwi");// push add the element.
console.log(fruits);

let lastfruit=fruits.pop();
console.log(lastfruit);
console.log(fruits);


//oops 
//define the person class
class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    //Method to display person's detail
    displayDetails(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    } 
}
class Employee extends Person{
    constructor(name, age, jobtitle,salary) {
        super(name ,age);
        this.jobtitle=jobtitle;
        this.salary=salary;
    }
    //Method to display the employee details
    displayDetails(){
        console.log(`Name:${this.name}, Age: ${this.age}, Jobtitle: ${this.jobtitle}, Salary: ${this.salary}`);
    }
    giveraise(amount){
        this.salary+=amount;
        console.log(`${this.name} got the raise!!${this.salary}`);
    }
}
//let employee = new Person("John",30);
let employee= new Employee("John", 28,"Software Engineer", 500000000);
employee.displayDetails();
employee.giveraise(500000);
employee.displayDetails();

