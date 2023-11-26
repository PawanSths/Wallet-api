const express = require("express");
const userregister = require("./Controllers/userregister");
const userlogin = require("./Controllers/userlogin");
const userDashboard = require("./Controllers/userdashboard");
const auth = require("../../middlewares/auth");

const userrouter = express.Router();
userrouter.post("/register", userregister);
userrouter.post("/login", userlogin);

userrouter.use(auth);
userrouter.get("/dashboard", userDashboard);

module.exports = userrouter;
