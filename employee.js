

const empl1 = {name: "Vasya", basicSalary: 10000,
    computeSalary: function() {
        return this.basicSalary
    }
}
// factory method - method creating Obj is not used if an object has methods
// фабричный метод — метод создания Obj не используется, если у объекта есть методы
function createEmployee(name, basicSalary) {
    const res = { name, basicSalary};
    res.computeSalary = function() {
        return this.basicSalary
    }
}

function Employee(name, basicSalary) {
    this.name = name;
    this.basicSalary = basicSalary;
}

Employee.prototype.computeSalary = function () {
    return this.basicSalary;
}

const empl2 = new Employee("Petya, 10000");
const empl3 = new Employee("Sara, 12000");
const epml2Salary = empl2.computeSalary();
const empl3Salary = empl3.computeSalary();
let a;
