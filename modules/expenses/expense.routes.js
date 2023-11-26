const express = require("express");
const auth = require("../../middlewares/auth");
const addexpense = require("./controlers/addexpense");

const expenserouter = express.Router();

expenserouter.use(auth);
expenserouter.post("/add", addexpense);
module.exports = expenserouter;
