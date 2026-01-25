const express = require("express");
const {
  getCartItems,
  addToCart,
  removeFromCart,
  clearCart,
  increment,
  decrement,
} = require("../controllers/cartControllers");
const cartRouter = express.Router();

cartRouter.get("/get-cart", getCartItems);
cartRouter.post("/add-to-cart", addToCart);
cartRouter.delete("/remove", removeFromCart);
cartRouter.patch("/increment", increment);
cartRouter.patch("/decrement", decrement);
cartRouter.delete("/clear-cart", clearCart);

module.exports = cartRouter;
