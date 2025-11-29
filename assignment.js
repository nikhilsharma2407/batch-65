// const nestedArray = [[1], [[2]], [3, [4]]];

// const flatten = (array, depth = 1) => {
//   const result = [];
//   if (Array.isArray(array)) {
//     array.forEach((val) => {
//       if (Array.isArray(val) && depth > 0) {
//         result.push(...flatten(val, depth - 1));
//       } else {
//         result.push(val);
//       }
//     });
//   }
//   return result;
// };
// console.log("🚀 ~ nestedArray:", nestedArray);
// console.log(flatten(nestedArray, 2));

// const user = {
//   id: 1,
//   name: "Leanne Graham",
//   username: "Bret",
//   email: "Sincere@april.biz",
//   address: {
//     street: "Kulas Light",
//     suite: "Apt. 556",
//     city: "Gwenborough",
//     zipcode: "92998-3874",
//     geo: {
//       lat: "-37.3159",
//       lng: "81.1496",
//     },
//   },
//   phone: "1-770-736-8031 x56442",
//   website: "hildegard.org",
//   company: {
//     name: "Romaguera-Crona",
//     catchPhrase: "Multi-layered client-server neural-net",
//     bs: "harness real-time e-markets",
//   },
//   bankAccounts: ["icici", "hdfc", "citi bank"],
//   dept: null,
// };
// let num1 = 1;
// let num2 = num1;

// const cloneDeep = (obj) => {
//   if (obj === null || obj === undefined || typeof obj !== "object") {
//     return obj;
//   }
//   const result = Array.isArray(obj) ? [] : {};
//   Object.entries(obj).forEach(([key, val]) => {
//     result[key] = cloneDeep(val);
//   });
//   return result;
// };
// cloneDeep(user);

// const newArr = cloneDeep(nestedArray);
// const shallowCopy = [...nestedArray];
// newArr[1][0] = 999;
// shallowCopy[1][0] = 'shallow';
// console.log("🚀 ~ shallowCopy:", shallowCopy)
// console.log("🚀 ~ nestedArray:", nestedArray)
// console.log("🚀 ~ newArr:", newArr)

const obj = {
  name: "abcd",
  greet() {
    console.log(this.name);
  },
  greetIIFE: (function () {
    return () => {
      console.log(" l 74 IIFE", this);
    };
  })(),
};

obj.greetIIFE;
console.log("🚀 ~ obj.greetIIFE:", typeof obj.greetIIFE);
// greet->0x500

// obj -> 0x100 {
// name:
// greet-> 0x500
// }

// greetFn -> 0x500
// const greetFn = obj.greet;
// greetFn();

// // IIFE -> Immediately Invoked Function Expression

// (() => console.log("fn execution"))();

function add(n1, n2) {
  console.log(n1 + n2);
}

const addArrow = (n1, n2) => {
  console.log(n1 + n2);
};

const add10 = add.bind(this, 10, 5);
const add10Arrow = (num) => addArrow(10, num);

add10();
add10Arrow();

// add(1,2,3)

// add.call(this, 1, 2, 3);
// add.apply(this, [1, 2, 3]);
