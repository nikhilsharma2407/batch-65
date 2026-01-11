const express = require("express");
require('dotenv').config();

const router = require("./routes/router");
const app = express();

// Middlewares, imtermediate request handlers
app.use(express.json());


console.log(process.env.DB_URL)

app.use("/router", router);

const PORT = 4000;

app.listen(PORT, () => {
  // console.clear();
  console.log(`Server started running on Port - ${PORT}`);
});
