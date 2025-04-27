//TODO
//Write simple test based on console.log functionality for testing Store class methods

import Predicate from "./Predicate";
import Store from "./Store";

//For example T msay be class Employee like
class Employee {
    constructor(public id: string, public name: string, public salary: number) {

    }
}
class SalaryGreaterThan implements Predicate<Employee> {
    constructor(private minSalary: number) { }
    test(item: Employee): boolean {
        return item.salary > this.minSalary;
    }
}
const store = new Store<Employee> ();
const emp1 = new Employee("1", "John Doe", 50000);
const emp2 = new Employee("2", "Bob Smith", 60000);
const emp3 = new Employee("3", "Alice Johnson", 70000);
const emp4 = new Employee("4", "Bob Brown", 80000);
const empleyees: Employee[] = [emp1, emp2, emp3, emp4];
empleyees.forEach(emp => store.add(emp));

console.log(store.getById("1"),'Should print Employee object with id "1"'); // Should print Employee object with id "1"
console.log(store.getById("5"),'Should print undefined'); // Should print undefined
console.log(store.find({  test:emp => emp.salary < 60000 }),'Should print array of Employee objects with salary less than 60000'); // Should print array of Employee objects with salary less than 60000  
console.log(store.find(new SalaryGreaterThan(50000)),'Should print array of Employee objects with salary greater than 50000'); // Should print array of Employee objects with salary greater than 50000
console.log(store.find({test: emp => emp.name.startsWith("Bob")}),'Should print Employees with ids: "2" and "4"'); // Should print Employees with ids: "2" and "4"
console.log(store.find(new SalaryGreaterThan(80000)),'Should print empty array'); // Should print empty array
console.log(store.remove("1"),'should print Employee with id "1" as result of removing employee with id "1"'); // Should remove Employee object with id "1"    
console.log(store.getById("1"),'Should print undefined after removing Employee with id "1"'); // Should print undefined