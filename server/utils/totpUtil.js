const speakeasy = require("speakeasy");
const QRcode = require("qrcode");

const encoding = "base32";

const generateQRCode = async (username) => {
  const { base32: secret } = speakeasy.generateSecret();
  const otpauth_url = speakeasy.otpauthURL({
    secret,
    label: username,
    encoding,
    issuer: "AmazeCart",
  });

  const qrCode = await QRcode.toDataURL(otpauth_url);
  console.log(qrCode);
  return { qrCode, secret };
};

const verifyOtp = (secret, otp) => {
  const isVerified = speakeasy.totp.verify({
    secret,
    encoding,
    token: otp,
  });

  return isVerified;
};

module.exports = { generateQRCode, verifyOtp };
