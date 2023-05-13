const bcrypt = require("bcrypt");
const cors = require("cors");

//express related block
const express = require("express");
const app = express();
app.use(express.json());

//env file configuration
require("dotenv").config();

//mongoose
const mongoose = require("mongoose");

//connect to database
mongoose.connect(process.env.MONGOURL).then(() => {
  console.log("Connection to Database Successfull");
});
app.use(
  cors({
    origin: "*",
  })
);
//routes
const UserRouter = require("./routes/users.routes");
const HomePageRouter = require("./routes/home.routes");
app.use("/user", UserRouter);
app.use("/home", HomePageRouter);

//connection to server
const port = process.env.PORT;
app.listen(port, () => {
  console.log("server is running");
});
