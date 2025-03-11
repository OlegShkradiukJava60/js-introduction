export default class Company {
    constructor() {
        this.employees = {};
    }

    addEmployee(empl) {
        this.employees[empl.name] = empl;
    }

    deleteEmployee(emplName) {
        delete this.employees[emplName];
        return this; // Возвращаем объект компании для дальнейших цепочек вызовов
    }

    getDepBudget(department) {
        return this.getEmployeesDepartment(department)
            .reduce((acc, empl) => acc + empl.computeSalary(), 0);
    }

    getEmployeesMaxSalary() {
        const employeesList = Object.values(this.employees);
        if (employeesList.length === 0) return [];

        const maxSalary = Math.max(...employeesList.map(empl => empl.computeSalary()));
        return employeesList.filter(empl => empl.computeSalary() === maxSalary)
    }

    getEmployeesDepartment(department) {
        return Object.values(this.employees).filter((empl) => empl.department === department);
    }
}
