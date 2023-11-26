const express = require("express");
const mongoose = require("mongoose");
const userrouter = require("./modules/users/users.routes");
const incomerouter = require("./modules/Income/income.routes");
const expenserouter = require("./modules/expenses/expense.routes");
require("dotenv").config();
const app = express();
app.use(express.json());

require("./models/users.models");
require("./models/transition.model");
mongoose
  .connect(process.env.mongo_connect, {})
  .then(() => {
    console.log("Mongo connection was sucess");
  })
  .catch((e) => {
    console.log("Mongo error", e);
  });

app.use("/users", userrouter);
app.use("/income", incomerouter);
app.use("/expense", expenserouter);

app.listen(8000, () => {
  console.log("server started sucessfully!!");
});
