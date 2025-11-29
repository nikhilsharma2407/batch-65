class Employee {
  static count = 0;
  #salary = "$1000";
  constructor(name, empId) {
    this.name = name;
    this.empId = empId;
  }

  greet() {
    console.log(`Hey I'm ${this.name} and my emp id is - ${this.empId}`);
  }

  getSalary() {
    console.log("🚀 ~ Employee ~ getSalary ~ this.#salary:", this.#salary);
    return this.#salary;
  }
  setSalary(newSalary) {
    this.#salary = newSalary;
  }
}

const emp1 = new Employee("abcd", 101);
console.log(typeof Employee);
emp1.greet();

emp1.getSalary();

// inheritence in js
class Manager extends Employee {
  constructor(name, empId, dept) {
    super(name, empId);
    this.dept = dept;
  }
  greet() {
    console.log(
      `Hey I'm ${this.name} and my emp id is - ${this.empId} and I manage ${this.dept}`
    );
  }
  getSalary() {
    const mgrSalary = super.getSalary();
    console.log("🚀 ~ Manager ~ getSalary ~ mgrSalary:", mgrSalary + "0");
  }
}

const mgr = new Manager("xyz", 201, "Sales");

// mgr.greet();
mgr.getSalary();
