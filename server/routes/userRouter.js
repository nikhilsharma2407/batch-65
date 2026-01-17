const express = require("express");
const { signup, login } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login, (req, res, next) => {
  console.log("next handler after login");

  res.send("res from next handler after login");
});

module.exports = userRouter;
