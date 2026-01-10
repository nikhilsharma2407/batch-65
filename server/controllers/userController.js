const signup = async (req, res) => {
  const userdata = req.body;

  const data = await new Promise((res) => {
    setTimeout(() => {
      res({
        data,
      });
    }, 2000);
  });
  
  //   pwdUtil -> password hashing

  //   token-> api-> validate token -> make db call and fetch user data

  res.send({
    success: true,
    message: "User signed up successfully",
    data: userdata,
  });
};

const login = async (req, res) => {
  // jwtUtil -> token generation
};

module.exports = {
  signup,
  login,
};
