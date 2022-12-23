const jwt = require("jsonwebtoken");
const dbConfig= require('../config/config.json')

const verifyToken = (req, res, next) => {
  const token =
   req.headers["x-access-token"];

  if (!token) {
    return res.send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, dbConfig.development.JWT_SECRET);
    req.user = decoded;
  } catch (err) {
    return res.send("Invalid Token");
  }
  return next();
};
module.exports=verifyToken;