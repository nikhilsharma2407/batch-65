const { UserModel } = require("../models/UserModels");
const { responseCreator } = require("../utils/responseHandler");

const getCartItems = async (req, res, next) => {
  const { username } = res.locals.userdata;
  const data = await UserModel.getCartItems(username);

  res.send(responseCreator("Cart items fetched successfully", data));
};

const clearCart = async (req, res, next) => {
  const { username } = res.locals.userdata;
  const data = await UserModel.clearCart(username);

  res.send(responseCreator("Cart items cleared successfully", data));
};

const addToCart = async (req, res, next) => {
  const { username } = res.locals.userdata;
  const product = req.body;
  const data = await UserModel.addToCart(username, product);

  res.send(responseCreator(`${product.title} added to cart`, data));
};

const increment = async (req, res, next) => {
  const { username } = res.locals.userdata;
  const product = req.body;
  const data = await UserModel.increment(username, product);

  res.send(responseCreator(`${product.title} added to cart`, data));
};

const decrement = async (req, res, next) => {
  const { username } = res.locals.userdata;
  const product = req.body;
  const data = await UserModel.decrement(username, product);

  res.send(responseCreator(`${product.title} qty decreased from cart`, data));
};

const removeFromCart = async (req, res, next) => {
  const { username } = res.locals.userdata;
  const { id, title } = req.query;
  const data = await UserModel.removeFromCart(username, parseInt(id));

  res.send(responseCreator(`${title} removed from cart`, data));
};

module.exports = {
  getCartItems,
  increment,
  decrement,
  addToCart,
  removeFromCart,
  clearCart,
};
