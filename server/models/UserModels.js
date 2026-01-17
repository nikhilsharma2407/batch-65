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
    totalQuantity: Number,
    totalPrice: Schema.Types.Decimal128,
  },
});

const sanitizeUserData = (userdata) => {
  const { password, ...sanitizedUserData } = userdata.toObject();
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

const UserModel = mongoose.model("User", userSchema);

module.exports = {
  UserModel,
  sanitizeUserData,
};
