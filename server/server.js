const express = require("express");
require("dotenv").config();
require("./dbConnection");

const router = require("./routes/router");
const userRouter = require("./routes/userRouter");
const errorHandler = require("./utils/errorHandler");
const app = express();

// Middlewares, imtermediate request handlers
app.use(express.json());

app.use("/router", router);
app.use("/user", userRouter);

app.use(errorHandler);

const PORT = 4000;

app.listen(PORT, () => {
  console.clear();
  console.log(`Server started running on Port - ${PORT}`);
});
