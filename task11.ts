// Employee Payroll System:

// Create an Employee class with properties such as id, name, position, and salary.
// Add a method to calculate the annual bonus based on their position.
// Use an enum for employee positions (e.g., Junior, Mid, Senior).
enum EmployeePosition {
  Junior = "Junior",
  Mid = "Mid",
  Senior = "Senior",
}
class Employee {
  constructor(
    public id: number,
    public name: string,
    public position: string,
    public salary: number,
    public EmployeePosition: EmployeePosition
  ) {}
  calculateBonusAmout(): number {
    if (this.EmployeePosition === EmployeePosition.Junior) {
      return this.salary * 10;
    } else if (this.EmployeePosition === EmployeePosition.Mid) {
      return this.salary * 20;
    } else {
      return this.salary * 30;
    }
  }
  Profileinfo(): void {
    console.log(
      `Employee ID: ${this.id}, Name: ${this.name}, Position: ${this.position}, Salary: ${this.salary}`
    );
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
