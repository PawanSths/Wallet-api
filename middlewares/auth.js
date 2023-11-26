const { request } = require("express");
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const authorizationheader = req.headers.authorization;
  if (!authorizationheader) {
    res.status(401).json({
      Status: "Failed",
      message: "No authorization found",
    });
    return;
  }
  const token = authorizationheader.split("Bearer ")[1];
  try {
    const checktoken = jwt.verify(token, process.env.jwt_salt);
    req.user = checktoken;
  } catch (e) {
    res.status(401).json({
      Status: "Failed",
      message: "No authorization found. Error found",
    });
    return;
  }
  next();
};
module.exports = auth;
