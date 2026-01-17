const { genPasswordHash, verifyPassword } = require("../utils/passwordUtil");
const { errorCreator, responseCreator } = require("../utils/responseHandler");
const { UserModel, sanitizeUserData } = require("../models/UserModels");

const signup = async (req, res, next) => {
  try {
    const { password, ...userdata } = req.body;
    const passwordHash = await genPasswordHash(password);
    userdata.password = passwordHash;
    const data = await UserModel.createUserAcc(userdata);
    if (data) {
      res.send({
        success: true,
        message: `${userdata?.name} signed up successfully`,
      });
    }

    //   pwdUtil -> password hashing

    //   token-> api-> validate token -> make db call and fetch user data
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const userData = await UserModel.findUser(username, 1);
    const isPasswordValid = await verifyPassword({
      password,
      passwordHash: userData.password,
    });
    console.log("🚀 ~ login ~ isPasswordValid:", isPasswordValid);
    if (!isPasswordValid) {
      errorCreator("Invalid Credentials", 401);
    }
    res.send(
      responseCreator(
        `${username} logged in successfully`,
        sanitizeUserData(userData),
      ),
    );

    // res.send({ message: `${username} logged in successfully`, data: userData });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signup,
  login,
};
