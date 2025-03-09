


const empl1 = {name: "Vasya", basicSalary: 10000,
    computeSalaryFun: function() {
        return this.basicSalary
    },
    computeSalaryArrow: () => {
        return this.basicSalary;
    }


}

const SalaryFun = empl1.computeSalaryFun();
const SalaryArrow = empl1.computeSalaryArrow();
let a;
