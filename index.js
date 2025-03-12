import { testframework } from './testframework.js';
import WageEmployee from './WageEmployee.js';
import Employee from './employee.js';
import Manager from './Manager.js';
import Company from './Company.js';

const myCompany = new Company();
myCompany.addEmployee(new Employee("Alice", 1000, "HR"));
myCompany.addEmployee(new Manager("Bob", 3200, "Marketing", 6));
myCompany.addEmployee(new WageEmployee("Charlie", 2800, "IT", 90, 180));
myCompany.addEmployee(new WageEmployee("Diana", 3000, "Sales", 85, 150));

testframework(
  "Company ",
  `
    const myCompany = new Company();
    
    myCompany.addEmployee(new Employee("Alice", 2500, "HR"));
    myCompany.addEmployee(new Manager("Bob", 3200, "Marketing", 6)); // Увеличиваем коэффициент для Bob
    myCompany.addEmployee(new WageEmployee("Charlie", 2800, "IT", 90, 180));
    myCompany.addEmployee(new WageEmployee("Diana", 3000, "Sales", 85, 150));
  `,
  [
    `myCompany.getDepBudget("IT")`,
    `myCompany.getDepBudget("Marketing")`,
    `myCompany.getDepBudget("Sales")`,
    `myCompany.getEmployeesMaxSalary()`,
    `myCompany.getEmployeesMaxSalary()[0].name`,
    `myCompany.getEmployeesDepartment("IT")`,
    `myCompany.getEmployeesDepartment("Sales")`,
    `myCompany.getEmployeesDepartment("HR").length`,
    `myCompany.deleteEmployee("Alice").employees`,
  ],
  [
    2800 + (90 * 180), // IT департамент (Charlie)
    3200 * 6, // Marketing департамент (Bob) увеличили коэффициент
    3000 + (85 * 150), // Sales департамент (Diana)
    [{ name: "Bob", basicSalary: 3200, department: "Marketing", factor: 6 }], // Теперь Bob с максимальной зарплатой
    "Bob",
    [
      { name: "Charlie", basicSalary: 2800, department: "IT", hours: 90, wage: 180 }
    ],
    [
      { name: "Diana", basicSalary: 3000, department: "Sales", hours: 85, wage: 150 }
    ],
    1, // HR департамент содержит только одного сотрудника
    {
      Bob: {
        name: "Bob",
        basicSalary: 3200,
        department: "Marketing",
        factor: 6
      },
      Charlie: {
        name: "Charlie",
        basicSalary: 2800,
        department: "IT",
        hours: 90,
        wage: 180
      },
      Diana: {
        name: "Diana",
        basicSalary: 3000,
        department: "Sales",
        hours: 85,
        wage: 150
      },
    },
  ]
);
