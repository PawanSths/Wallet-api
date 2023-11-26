const express = require("express");
const auth = require("../../middlewares/auth");
const addincome = require("./controller/addincome");

const incomerouter = express.Router();

incomerouter.use(auth);
incomerouter.post("/add", addincome);
module.exports = incomerouter;
