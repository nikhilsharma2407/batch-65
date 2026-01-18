const { UserModel } = require("../models/UserModels");
const { verifyToken } = require("../utils/jwtUtils");

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const authController = async (req, res, next) => {
  try {
    const { authToken } = req.cookies;
    const { username } = verifyToken(authToken);
    const userdata = await UserModel.findUser(username);
    // res.local placeholder for storing any temp data
    res.locals.userdata = userdata;
    next();
  } catch (error) {
    next(error);
  }
};

const adminController = (req, res, next) => {
  const { role } = verifyToken(req.cookies.authToken);
  if (role !== "admin") {
    const err = new Error("Access denied, admin only route");
    err.status = 403;
    throw err;
  }
  next();
};

module.exports = { authController, adminController };
