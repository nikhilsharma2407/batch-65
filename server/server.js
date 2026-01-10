const express = require("express");
const router = require("./routes/router");
const app = express();

// Middlewares, imtermediate request handlers
app.use(express.json());


// app.use("/abcd", (req, res) => {
//     res.send("Response from server-abcd");
// });

app.use("/router", router);

const PORT = 4000;

app.listen(PORT, () => {
  console.clear();
  console.log(`Server started running on Port - ${PORT}`);
});
