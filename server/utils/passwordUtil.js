const { compare, genSalt, hash } = require("bcrypt");

const genPasswordHash = async (password) => {
  const salt = await genSalt(10);
  console.log("🚀 ~ genPasswordHash ~ salt:", salt);
  const passwordHash = await hash(password, salt);
  return passwordHash;
};

const verifyPassword = async ({ password, passwordHash }) => {
  return await compare(password, passwordHash);
};

module.exports = {
  genPasswordHash,
  verifyPassword,
};
