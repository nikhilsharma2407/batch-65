const { UserModel } = require("../models/UserModels");
const { responseCreator } = require("../utils/responseHandler");

const getCartItems = async (req, res, next) => {
  const { username } = res.locals.userdata;
  const data = await UserModel.getCartItems(username);

  res.send(responseCreator("Cart items fetched successfully", data));
};

module.exports = { getCartItems };
