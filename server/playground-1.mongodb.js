/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.

db.sales.drop();
// Insert a few documents into the sales collection.
db.getCollection("sales").insertMany([
  {
    item: "abc",
    price: 10,
    quantity: 2,
    date: new Date("2014-03-01T08:00:00Z"),
  },
  {
    item: "jkl",
    price: 20,
    quantity: 1,
    date: new Date("2014-03-01T09:00:00Z"),
  },
  {
    item: "xyz",
    price: 5,
    quantity: 10,
    date: new Date("2014-03-15T09:00:00Z"),
  },
  {
    item: "xyz",
    price: 5,
    quantity: 20,
    date: new Date("2014-04-04T11:21:39.736Z"),
  },
  {
    item: "abc",
    price: 10,
    quantity: 10,
    date: new Date("2014-04-04T21:23:13.331Z"),
  },
  {
    item: "def",
    price: 7.5,
    quantity: 5,
    date: new Date("2015-06-04T05:08:13Z"),
  },
  {
    item: "def",
    price: 7.5,
    quantity: 10,
    date: new Date("2015-09-10T08:43:00Z"),
  },
  {
    item: "abc",
    price: 10,
    quantity: 5,
    date: new Date("2016-02-06T20:20:13Z"),
  },
]);

// SELECT * FROM TABLE
// db.sales.find({ item: "abc" });
use("mongodbVSCodePlaygroundDB");
db.sales.find({ item: "abc" }, { _id: 0, date: 0 });

// comparison operators -
/**
 * $gt - greater than
 * $lt - less than
 * $gte - greater than equal to
 * $lte - less than equal to
 * $ne - not equal to
 */

db.sales.find({ quantity: { $lte: 5 } }, { _id: 0 });

db.sales.find({ price: { $gte: 10 } }, { _id: 0, price: 1 });

// multiple conditions
// $or
// $and

db.sales.find(
  {
    $or: [{ quantity: { $lt: 5 } }, { price: { $gte: 10 } }],
  },
  { _id: 0, date: 0 },
);

db.sales.find(
  {
    $and: [{ quantity: { $lt: 5 } }, { price: { $gte: 10 } }],
  },
  { _id: 0, date: 0 },
);

db.sales.find(
  { quantity: { $lt: 5 }, price: { $gte: 10 } },
  { _id: 0, date: 0 },
);

// update queries
// order 10 more items where qty < 5
db.sales.updateMany(
  { quantity: { $gt: 10 } },
  {
    $inc: { quantity: -10 },
  },
);

db.sales.find({}, { _id: 0, date: 0 });

// 10 % discount on items priced >=10

db.sales.updateMany(
  { price: { $gte: 10 } },
  {
    $mul: { price: 0.9 },
  },
);
db.sales.find({}, { _id: 0, date: 0 });

var product1 = {
  price: 109.95,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  id: 1,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  category: "men's clothing",
  rating: {
    rate: 3.9,
    count: 120,
  },
  quantity: 1,
};

var product2 = {
  id: 2,
  title: "Mens Casual Premium Slim Fit T-Shirts ",
  price: 22.3,
  description:
    "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  category: "men's clothing",
  rating: { rate: 4.1, count: 259 },
  image:
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
  quantity: 1,
};

const user = {
  username: "test",
  cart: {
    items: [product1, product2],
  },
};

db.users.drop();

db.users.insertOne(user);

const p3 = {
  id: 3,
  title: "Mens Cotton Jacket",
  price: 55.99,
  description:
    "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
  rating: { rate: 4.7, count: 500 },
};

// array operators

/**
 * $push - adds an element to an array
 * $pull - removes an element from an array
 * $pullAll - removes multiple elements from an array
 * $addToSet - adds an element to an array if it doesn't already exist
 * $pop - removes the first or last element from an array
 *
 */
//

// db.users.findOneAndUpdate(
//   { username: "test" },
//   {
//     $push: {
//       cart: {
//         ...{
//           id: 3,
//           title: "Mens Cotton Jacket",
//           price: 55.99,
//           description:
//             "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//           category: "men's clothing",
//           image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
//           rating: { rate: 4.7, count: 500 },
//         },
//         quantity: 1,
//       },
//     },
//   },
//   { new: true }
// );

// db.users.findOneAndUpdate(
//   { username: "test", "cart.id": 3 },
//   {
//     $inc: { "cart.$.quantity": 1 },
//   },
//   { new: true }
// );

// db.users.findOneAndUpdate(
//   { username: "test" },
//   {
//     $pullAll: { cart: [{ id: 3 }] },
//   },
//   { new: true }
// );

// db.users.findOneAndUpdate(
//   {
//     username: "test",
//   },
//   {
//     $set: { disounts: ["HDFC", "AXIS", "ICICI", "SBI"] },
//   },
//   { new: true }
// );

db.users.find();

// db.users.findOneAndUpdate(
//   {
//     username: "test",
//   },
//   {
//     $pull: {
//       cart: {
//         id: { $in: [1, 2] },
//       },
//     },
//   },
//   { new: true }
// );

var product1 = {
  price: 109.95,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  id: 1,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  category: "men's clothing",
  rating: {
    rate: 3.9,
    count: 120,
  },
  quantity: 1,
};

var product2 = {
  id: 2,
  title: "Mens Casual Premium Slim Fit T-Shirts ",
  price: 22.3,
  description:
    "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  category: "men's clothing",
  rating: { rate: 4.1, count: 259 },
  image:
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
  quantity: 1,
};

db.users.findOneAndUpdate(
  {
    username: "test",
  },
  {
    $pull: {
      cart: {
        id: { $in: [product1.id, product2.id] },
      },
    },
  },
  { new: true },
);

[product1, product2].reduce((acc, item) => acc + item.price * item.quantity, 0);

db.users.aggregate([
  {
    $match: {
      username: "test",
    },
  },
  {
    $addFields: {
      "cart.totalQuantity": {
        $reduce: {
          input: "$cart.items",
          initialValue: 0,
          in: {
            $add: ["$$value", "$$this.quantity"],
          },
        },
      },
      "cart.totalPrice": {
        $reduce: {
          input: "$cart.items",
          initialValue: 0,
          in: {
            $add: [
              "$$value",
              { $multiply: ["$$this.price", "$$this.quantity"] },
            ],
          },
        },
      },
    },
  },
]);

var product1 = {
  price: 109.95,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  id: 1,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  category: "men's clothing",
  rating: {
    rate: 3.9,
    count: 120,
  },
};
var product2 = {
  id: 2,
  title: "Mens Casual Premium Slim Fit T-Shirts ",
  price: 22.3,
  description:
    "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  category: "men's clothing",
  rating: { rate: 4.1, count: 259 },
  image:
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
  quantity: 1,
};

// db.users.findOneAndUpdate(
//   { username: "test" },
//   {
//     $addToSet: {
//       "cart.items": { ...product2, quantity: 1 },
//     },
//     $inc: {
//       "cart.totalQuantity": 1,
//       "cart.totalPrice": product2.price,
//     },
//   },
//   { new: true },
// );

// db.users.findOne({ username: "test","cart.items.id": product1.id });

db.users.aggregate([
  {
    $match: {
      username: "test",
    },
  },
  {
    $unwind: {
      path: "$cart.items",
    },
  },
]);

db.users.aggregate([
  {
    $match: {
      username: "test",
    },
  },
  // {
  //   $unwind: {
  //     path: "$cart.items",
  //   },
  // },
  // {
  //   $match: {
  //     "cart.items.id": 1,
  //   },
  // },
  // {
  //   $project: {
  //     "cart.items.quantity": true,
  //     "cart.items.price": true,
  //   },
  // },
]);

db.users.findOne({ username: "test", "cart.items.id": 1 });
