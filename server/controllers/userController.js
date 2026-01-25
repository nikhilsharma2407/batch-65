const { genPasswordHash, verifyPassword } = require("../utils/passwordUtil");
const { errorCreator, responseCreator } = require("../utils/responseHandler");
const { UserModel, sanitizeUserData } = require("../models/UserModels");
const { generateToken, verifyToken } = require("../utils/jwtUtils");

const { Request, Response } = require("express");
const { generateQRCode, verifyOtp } = require("../utils/totpUtil");

const signup = async (req, res, next) => {
  try {
    const { password, ...userdata } = req.body;
    const passwordHash = await genPasswordHash(password);
    userdata.password = passwordHash;
    const { qrCode, secret } = await generateQRCode(userdata.username);
    userdata.secret = secret;
    const data = await UserModel.createUserAcc(userdata);
    if (data) {
      res.send(
        responseCreator(`${userdata?.name} signed up successfully`, qrCode),
      );
    }

    //   pwdUtil -> password hashing

    //   token-> api-> validate token -> make db call and fetch user data
  } catch (error) {
    next(error);
  }
};

/**
 * @param {Request} req
 * @param {Response} res
 * @param {*} next
 */
const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const userData = await UserModel.findUser(username, 1);
    const isPasswordValid = await verifyPassword({
      password,
      passwordHash: userData.password,
    });
    if (!isPasswordValid) {
      errorCreator("Invalid Credentials", 401);
    }

    const token = generateToken(userData);

    // save the token in the cookie
    res.cookie("authToken", token, {
      maxAge: 3600_000,
      httpOnly: true,
    });

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

/**
 * @param {Request} req
 * @param {Response} res
 * @param {*} next
 */

const loginWithCookie = async (req, res, next) => {
  try {
    const { authToken } = req.cookies;
    const { username } = verifyToken(authToken);
    const userdata = await UserModel.findUser(username);

    res.send(
      responseCreator("Loggedin via cookie", sanitizeUserData(userdata)),
    );
  } catch (error) {
    next(error);
  }
};

/**
 * @param {Request} req
 * @param {Response} res
 * @param {*} next
 */

const logout = async (req, res, next) => {
  try {
    res.clearCookie("authToken");
    res.locals = {};
    res.send(responseCreator("Logged out successfully"));
  } catch (error) {
    next(error);
  }
};

const resetPassword = async (req, res, next) => {
  try {
    const { username, newPassword, otp } = req.body;
    const userData = await UserModel.findUser(username);
    const isOtpValid = verifyOtp(userData.secret, otp);

    if (isOtpValid) {
      const isPasswordSame = await verifyPassword({
        password: newPassword,
        passwordHash: userData.password,
      });
      if (isPasswordSame) {
        errorCreator("New password cannot be same as old password", 401);
      }
      const hashedPwd = await genPasswordHash(newPassword);
      const data = await UserModel.updatePassword(username, hashedPwd);
      if (data) {
        res.send(responseCreator("Password reset successfully!!!"));
      }
    } else {
      errorCreator("Invalid OTP", 403);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signup,
  login,
  loginWithCookie,
  logout,
  resetPassword,
};
