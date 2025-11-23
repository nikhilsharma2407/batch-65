const emp1 = {
  empId: " E101",
  address: {
    street: "123 Main St",
    city: "Metropolis",
    zip: "12345",
  },
  name: "emp1",
  dept: {
    deptName: "Engineering",
    deptId: "D101",
  },
  greet() {
    // this-> emp1
    return () => {
      // take this from the parent enclosing fn
      console.log(`Hello, my name is ${this.name}`);
    };
  },
  greetArrowFn: () => {
    console.log(`Hello, my name is ArrowFn -  ${this.name}`);
  },
};

emp1.greetArrowFn();

// bind-> returns a new function with 'this' set to the provided value
// call (1,2,3) apply ([1,2,3]) invokes the function with 'this' set to the provided value

// explicit binding
const greetArrowMethod = emp1.greetArrowFn.bind(emp1);
// greetArrowMethod();

const greetMethod = emp1.greet.bind(emp1);
// emp1.greet()();

const emp2 = {
  empId: " E102",
  address: {
    street: "123 Main St",
    city: "Metropolis",
    zip: "12345",
  },
  name: "emp2",
  dept: {
    deptName: "Engineering",
    deptId: "D102",
  },
  greet: greetMethod,
};

// implicit binding
// emp2.greet();

// explicit binding with call
emp1.greet.call(emp2)();

const arrowFnOutside = () => {
  console.log(this.name, "  arrowFnOutside");
};

function funDeclaration() {
  console.log(this.name, " funDeclaration");
  const arrowFnInside = () => {
    console.log(this.name, " arrowFnInside");
  };

  return arrowFnInside;
}

const obj = {
  name: "GfG",
  arrowFnOutside,
  funDeclaration,
};

obj.arrowFnOutside();
obj.funDeclaration()();

class Employee {
  constructor(empId, name) {
    this.empId = empId;
    this.name = name;
  }

  greetMethod() {
    console.log(`Hello, my name is ${this.name}`);
  }
  greet = () => {
    console.log(`Hello, my name is ${this.name}`);
  };
}

const emp123 = new Employee("E123", "emp123");
emp123.greet();
emp123.greetMethod();
console.log("🚀 ~ typeof Employee:", typeof Employee);
console.log("🚀 ~ emp123 instanceof Employee:", emp123 instanceof Employee)
