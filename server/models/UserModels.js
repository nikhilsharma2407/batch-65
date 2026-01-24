const mongoose = require("mongoose");
const { errorCreator } = require("../utils/responseHandler");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "is required"],
  },
  name: {
    type: String,
    required: [true, "is required"],
  },
  email: {
    type: String,
    required: [true, "is required"],
  },
  password: {
    type: String,
    required: [true, "is required"],
  },
  cart: {
    items: [Object],
    totalQuantity: { type: Number, default: 0 },
    totalPrice: { type: Number, default: 0 },
  },
  role: {
    type: String,
    default: "user",
  },
  secret: String,
});

const sanitizeUserData = (userdata) => {
  const { secret, password, ...sanitizedUserData } = userdata.toObject();
  return sanitizedUserData;
};

userSchema.statics.findUser = async function (username) {
  const user = await this.findOne({ username }, { _id: 0, __v: 0 });
  if (!user) {
    // const err = new Error("Username doesn't exists");
    // err.status = 404;
    // throw err;
    errorCreator("Username doesn't exists", 404);
  }

  return user;
};

userSchema.statics.createUserAcc = async function (userdata) {
  const user = await this.create(userdata);
  return user;
};

userSchema.statics.updatePassword = async function (username, password) {
  const data = await this.updateOne(
    { username },
    {
      $set: { password },
    },
  );

  if (data.modifiedCount) {
    return true;
  }
};

// Cart Methods
userSchema.statics.getCartItems = async function (username) {
  const user = await this.findOne({ username }, { cart: 1 });

  return user.cart;
};

userSchema.statics.clearCart = async function (username) {
  const user = await this.findOneAndUpdate(
    { username },
    {
      $set: {
        cart: { items: [], totalQuantity: 0, totalPrice: 0 },
      },
    },
    { new: true },
  );

  return user.cart;
};

userSchema.statics.addToCart = async function (username, product) {
  const user = await this.findOneAndUpdate(
    { username },
    {
      $addToSet: {
        "cart.items": { ...product, quantity: 1 },
      },
      $inc: {
        "cart.totalQuantity": 1,
        "cart.totalPrice": product.price,
      },
    },
    { new: true },
  );
  return user.cart;
};

// 5 items -> remove from cart
// delete icon

// tab1 -> 5 items->remove ->qty5
// tab2-> 3 items
userSchema.statics.removeFromCart = async function (username, product) {
  const { cart } = await this.findOne(
    { username, "cart.items.id": product.id },
  );
  console.log("🚀 ~ cart:", cart);
  const user = await this.findOneAndUpdate(
    { username, "cart.items.id": product.id },
    {
      $pull: {
        "cart.items.id": product.id,
      },
      $inc: {
        "cart.totalQuantity": -"cart.items.$.quantity",
        "cart.totalPrice": product.price,
      },
    },
    { new: true },
  );
  console.log("🚀 ~ user:", user)
};

const UserModel = mongoose.model("User", userSchema);

module.exports = {
  UserModel,
  sanitizeUserData,
};

const product1 = {
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
UserModel.removeFromCart("test", product1);
