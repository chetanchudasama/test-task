const jwt = require("jsonwebtoken");
const expireAt =
  (process.env.JWT_EXPIRES &&
    process.env.JWT_EXPIRES.split("*").reduce((a, b) => a * b)) ||
  7 * 24 * 60 * 60; // token expires in 7 day(s) / (days * hours * minutes * seconds) seconds

const generateJWTToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: expireAt,
    issuer: process.env.JWT_ISSUER,
  });
  return token;
};

const verifyJWTToken = (token) => {
  const decodedData = jwt.verify(token, process.env.JWT_SECRET, {
    issuer: process.env.JWT_ISSUER,
  });
  return decodedData;
};

module.exports = {
  generateJWTToken,
  verifyJWTToken,
};
