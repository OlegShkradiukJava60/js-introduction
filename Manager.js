import Employee from "./employee.js";

export default class Manager extends Employee {
    constructor(name, basicSalary, department, factor) {
        super(name, basicSalary, department);
        this.factor = factor;
    }

    computeSalary() {
        return this.basicSalary * this.factor; // Исправленный расчет
    }
}    
