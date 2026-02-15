const express = require("express");
require("dotenv").config();
require("./dbConnection");
const cookieParser = require("cookie-parser");
const router = require("./routes/router");
const userRouter = require("./routes/userRouter");
const errorHandler = require("./utils/errorHandler");
const cartRouter = require("./routes/cartRouter");
const {
  authController,
  adminController,
} = require("./controllers/authController");
const { responseCreator } = require("./utils/responseHandler");
const app = express();
const cors = require("cors");
const path = require("path");
const stripeRouter = require("./routes/stripeRouter");
// Middlewares, imtermediate request handlers

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

app.use("/router", router);
app.use("/user", userRouter);
app.use("/cart", authController, cartRouter);
app.use("/order", authController, stripeRouter);
app.use("/admin", authController, adminController, (req, res, next) => {
  res.send(responseCreator("admin route"));
});

app.use(express.static(path.join(__dirname, "public")));

// regex for accept everything
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.use(errorHandler);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.clear();
  console.log(`Server started running on Port - ${PORT}`);
});
