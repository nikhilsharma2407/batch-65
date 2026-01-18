const express = require("express");
const { getCartItems } = require("../controllers/cartControllers");
const cartRouter = express.Router();

cartRouter.get("/get-cart", getCartItems);

module.exports = cartRouter;
