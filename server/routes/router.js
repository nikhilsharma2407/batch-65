const express = require("express");
const { signup, login } = require("../controllers/userController");
const router = express.Router();

// http://localhost:4000/router/

router.get("/", (req, res) => {
  res.send("Response from router");
});

router.get("/product/:id", (req, res) => {
  res.send("Response from router");
});

router.post("/test/:id", (req, res) => {
  const userData = req.body;

  console.log("🚀 ~ req.query:", req.query);
  console.log("🚀 ~ req.params:", req.params);
  console.log("🚀 ~ req.path:", req.path);
  console.log("🚀 ~ req.cookies:", req.cookies);
  console.log("🚀 ~ userData:", userData);
  res.send({
    success: true,
    message: `${userData?.name} signed up successfully`,
  });
});

router.post("/signup", signup);
router.post("/login", login);

router.all('/*splat', (req,res)=>{
  res.status(404);
  res.send('Invalid path')
})

// export default router;
module.exports = router;
