// Basics of class

class Department {
  //   name: string;
  //  private employees: string[];
  constructor(public name: string, private employees: string[]) {
    // shorthand
    // this.name = n;
    // this.employees = [];
  }
  describe(this: Department) {
    console.log("Department", this.name);
  }
  addEmployee(...emp: string[]) {
    this.employees.push(...emp);
  }
  printEmployeeInformation() {
    console.log("Number of emp", this.employees.length);
    console.log(this.employees);
  }
}

const dept = new Department("Accounting", []);
dept.describe();

dept.addEmployee("Aazim", "Sadan");

dept.printEmployeeInformation();

// readonly

class Department2 {
  public name: string;
  protected employees: string[];
  private readonly id: string;

  constructor(id: string, n: string) {
    this.name = n;
    this.id = id; // only once you can initialize
    this.employees = [];
  }

  describe(this: Department2) {
    console.log(`Department(${this.id}) ${this.name}`);
  }

  addEmployee(...emp: string[]) {
    this.employees.push(...emp);
  }

  printEmployeeInformation() {
    console.log("Number of emp", this.employees.length);
    console.log(this.employees);
  }
}

// Inheritance
// Override properties & protected access modifier
// setter & getter method
class AccountingDepartment extends Department2 {
  //   reports: string[] = [];
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(...emp: string[]): void {
    if (emp.includes("Aazim")) {
      return;
    }
    this.employees.push(...emp);
  }

  get getReports() {
    if (this.reports.length > 0) {
      return this.reports;
    }
    throw new Error("Report not found");
  }

  set setReports(value: string) {
    if (!value) {
      throw new Error("Please pass valid value");
    }
    this.reports.push(value);
  }
}

const accDep = new AccountingDepartment("d1", []);
accDep.addReport("Bugs");
accDep.printReports();
accDep.describe();
accDep.addEmployee("Sadan");
accDep.printEmployeeInformation();

// setter & getter
console.log(accDep.getReports);
accDep.setReports = "";

// static method

class Department3 {
  //   name: string;
  //  private employees: string[];
  constructor(public name: string, private employees: string[]) {
    // shorthand
    // this.name = n;
    // this.employees = [];
  }

  describe(this: Department3) {
    console.log("Department", this.name);
  }

  addEmployee(...emp: string[]) {
    this.employees.push(...emp);
  }

  printEmployeeInformation() {
    console.log("Number of emp", this.employees.length);
    console.log(this.employees);
  }

  static getSalary() {
    return { salary: 500000 };
  }
}

const salary = Department3.getSalary(); // without creating abject we can access by its class name
console.log(salary);

// abstract classes

abstract class Department4 {
  name: string;
  protected employees: string[] = [];
  protected readonly id: string;

  constructor(id: string, n: string) {
    this.id = id;
    this.name = n;
  }

  abstract describe(this: Department4): void;
  abstract displayName() : void;
}

class Subclass extends Department4{
    constructor(id:string, private reports : string[]){
        super(id, "Accounting");
    }
    describe(): void {
        console.log("Department", this.id);  
    }
    displayName(): void {
        console.log(this.name);
    }
}
const subClass = new Subclass("D1", []);
subClass.describe();