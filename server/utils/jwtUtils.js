const { sign, verify } = require("jsonwebtoken");
const { errorCreator } = require("./responseHandler");

const SECRET_KEY = process.env.JWT_SECRET;

const generateToken = (userdata, time='1h') => {
  const { username, role } = userdata;
  const token = sign({ username, role }, SECRET_KEY, { expiresIn: time });
  return token;
};

const verifyToken = (token) => {
  if (!token) {
    errorCreator("Token missing, please login again", 401);
  }
  return verify(token, SECRET_KEY);
};

module.exports = {
  generateToken,
  verifyToken,
};
