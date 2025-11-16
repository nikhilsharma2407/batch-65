// // var name;
// // var in js

// // var, let const ES6
// // var name = "Global var Variable";
// // let someVar;
// // scope -
// // var name = "Global var Variable";
// // var - function scope, hoisted
// // let - block scope, not hoisted
// // const - block scope, not hoisted, constant value

// // redeclaration
// // var - allowed even in same scope
// // let - not allowed in same scope
// // const - not allowed

// function fn() {
//   console.log("🚀 ~ fn ~ name:", name);

//   //   TDZ - Temporal Dead Zone

//   //   let name = "Function scope var variable";
//   if (true) {
//     let name = "if block";
//     console.log("🚀 ~ fn ~ name:", name);
//   }
//   console.log("🚀 ~ fn ~ name:", name);
// }
// // fn();

// // const username = "john_doe";
// // fn();

// // console.log("🚀 ~ name:", name);

// // Datatypes in js
// // primitive - number, string, boolean, NaN IEE754 , null, undefined,
// // non-primitive - object, array, function

// let intNum = 123;
// let num = "123.529abcd999";

// console.log("🚀 ~ +num:", +num);
// // console.log("🚀 ~ num.toFixed(2):", num.toFixed(2));
// console.log("🚀 ~ parseInt(num):", parseInt(num));
// console.log("🚀 ~ parseFloat(num):", parseFloat(num));
// console.log("🚀 ~ Math.round(num):", Math.round(num));
// // console.log(`🚀 ~ parseInt("100",2):`, parseInt("101", 2));
// const amount = 10_000_000;
// console.log("🚀 ~ amount:", amount.toLocaleString("en-in"));

// let str = "Hello World!";
// str[0] = "h";
// str = "abcd";
// str;
// let str1 = "Hello World!";

// str.indexOf("o"); // 4
// str.lastIndexOf("o"); // 7

// // const name  = 'nikhil sharma';

// // console.log("🚀 ~ name.split(' '):", name.split(' '));
// const email = "nikhil123@gmail.com";
// const username = email.split("@")[0];
// const domain = email.split("@")[1];
// console.log("🚀 ~ domain:", domain);

// const authToken =
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30";
// const token = authToken.split(" ")[1];
// console.log("🚀 ~ token:", token);
// const newUsername = username.toUpperCase();
// console.log("🚀 ~ newUsername:", newUsername);
// console.log("🚀 ~ username:", username);

// // template strings;
// const visitorNumber = 100;

// const message = `Congrats!!!, ${username} you are Visitor number - ${visitorNumber}`;
// const emailMessage = `Hello,
// Welcome to our platform.
// Thank you for registration.
// Thank you!`;

// const normalEmailMessage  = "Hello,\nWelcome to our platform.\nThank you for registration.\nThank you!"
// console.log("🚀 ~ emailMessage:", emailMessage);

// boolean // true, false
// falsy values - 0, "", NaN , null, undefined,
// truthy
// const loggedInUser = username || "Guest User";

if (0) {
  console.log(0 + " is Truthy");
} else {
  console.log(0 + " is Falsy");
}
if ("") {
  console.log("" + " is Truthy");
} else {
  console.log("" + " is Falsy");
}
if (null) {
  console.log(null + " is Truthy");
} else {
  console.log(null + " is Falsy");
}
if (undefined) {
  console.log(undefined + " is Truthy");
} else {
  console.log(undefined + " is Falsy");
}
if (NaN) {
  console.log(NaN + " is Truthy");
} else {
  console.log(NaN + " is Falsy");
}
if ([]) {
  console.log([] + " is Truthy");
} else {
  console.log([] + " is Falsy");
}
if ({}) {
  console.log({} + " is Truthy");
} else {
  console.log({} + " is Falsy");
}

// 123*
NaN; // not a number;
123 * "a";
// console.log("🚀 ~ typeof NaN:", typeof NaN)
console.log("🚀 ~ NaN == NaN:", NaN == NaN);
console.log("🚀 ~ isNaN(NaN):", isNaN(NaN));
// isNaN(NaN)

let someVarAbcd;

const str = "hello";
console.log("🚀 ~ str[100]:", str[100]);

function greet(name) {
  console.log("Hello, " + name);
}

const message = greet("Nikhil");
console.log("🚀 ~ message:", message);

console.log("🚀 ~ typeof undefined:", typeof undefined);

// null vs undefined
let loggedInUser = {
  username: "john_doe",
  email: "john_doe@example.com",
};

loggedInUser = {};
console.log("🚀 ~ typeof null:", typeof null);
