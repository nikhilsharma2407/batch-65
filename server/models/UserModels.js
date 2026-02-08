const mongoose = require("mongoose");
const { errorCreator } = require("../utils/responseHandler");
const {
  Schema,
  Types: { Decimal128 },
} = mongoose;

const userSchema = new Schema(
  {
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
      totalPrice: {
        type: Decimal128,
        get: (v) => parseFloat(v),
        set: (v) => new Decimal128(v.toFixed(2)),
        default: 0,
      },
      totalQuantity: { type: Number, default: 0 },
    },
    role: {
      type: String,
      default: "user",
    },
    secret: String,
    orders: [Object],
  },
  {
    toObject: { getters: true },
  },
);

const sanitizeUserData = (userdata, key = null) => {
  const { secret, password, ...sanitizedUserData } = userdata.toObject();
  if (key) {
    return sanitizedUserData[key];
  }
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

  return sanitizeUserData(user, "cart");
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

  return sanitizeUserData(user, "cart");
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
  return sanitizeUserData(user, "cart");
};

userSchema.statics.increment = async function (username, product) {
  const user = await this.findOneAndUpdate(
    { username, "cart.items.id": product.id },
    {
      $inc: {
        "cart.totalPrice": product.price,
        "cart.items.$.price": product.price,
        "cart.totalQuantity": 1,
        "cart.items.$.quantity": 1,
      },
    },
    { new: true },
  );
  return sanitizeUserData(user, "cart");
};

userSchema.statics.removeFromCart = async function (username, productId) {
  const userData = await this.aggregate([
    {
      $match: {
        username,
      },
    },
    {
      $unwind: {
        path: "$cart.items",
      },
    },
    {
      $match: {
        "cart.items.id": productId,
      },
    },
    {
      $project: {
        "cart.items.quantity": true,
        "cart.items.price": true,
      },
    },
  ]);
  console.log("🚀 ~ userData:", userData)

  const cart = userData[0].cart;
  console.log("🚀 ~ cart:", cart)

  const user = await this.findOneAndUpdate(
    { username},
    {
      $pull: {
        "cart.items": { id: productId },
      },
      $inc: {
        "cart.totalQuantity": -cart.items?.quantity,
        "cart.totalPrice": -cart.items?.price,
      },
    },
    { new: true },
  );
  return sanitizeUserData(user, "cart");
};

userSchema.statics.decrement = async function (username, product) {
  const user = await this.findOne({ username }, { cart: 1 });
  const productInCart = user.cart.items.find(({ id }) => product.id === id);
  if (productInCart?.quantity === 1) {
    console.log("🚀 ~ productInCart:", productInCart);
    return this.removeFromCart(username, product.id);
  }
  const userData = await this.findOneAndUpdate(
    { username, "cart.items.id": product.id },
    {
      $inc: {
        "cart.totalPrice": -product.price,
        "cart.items.$.price": -product.price,
        "cart.items.$.quantity": -1,
        "cart.totalQuantity": -1,
      },
    },
    { new: true },
  );

  return sanitizeUserData(userData, "cart");
};

const UserModel = mongoose.model("User", userSchema);

module.exports = {
  UserModel,
  sanitizeUserData,
};
