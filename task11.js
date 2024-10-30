"use strict";
// Employee Payroll System:
// Create an Employee class with properties such as id, name, position, and salary.
// Add a method to calculate the annual bonus based on their position.
// Use an enum for employee positions (e.g., Junior, Mid, Senior).
var EmployeePosition;
(function (EmployeePosition) {
    EmployeePosition["Junior"] = "Junior";
    EmployeePosition["Mid"] = "Mid";
    EmployeePosition["Senior"] = "Senior";
})(EmployeePosition || (EmployeePosition = {}));
class Employee {
    constructor(id, name, position, salary, EmployeePosition) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.salary = salary;
        this.EmployeePosition = EmployeePosition;
    }
    calculateBonusAmout() {
        if (this.EmployeePosition === EmployeePosition.Junior) {
            return this.salary * 10;
        }
        else if (this.EmployeePosition === EmployeePosition.Mid) {
            return this.salary * 20;
        }
        else {
            return this.salary * 30;
        }
    }
    Profileinfo() {
        console.log(`Employee ID: ${this.id}, Name: ${this.name}, Position: ${this.position}, Salary: ${this.salary}`);
    }
}
const employee = [
    new Employee(1, "Ali", "Junior", 50000, EmployeePosition.Junior),
    new Employee(2, "Ahmed", "Mid", 70000, EmployeePosition.Mid),
    new Employee(3, "Hassan", "Senior", 90000, EmployeePosition.Senior),
    new Employee(4, "Hassan", "Senior", 90000, EmployeePosition.Senior),
];
employee.forEach((employee) => {
    employee.Profileinfo();
    console.log(`Bonus Amount: ${employee.calculateBonusAmout()}`);
});
