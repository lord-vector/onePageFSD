const express = require("express");
const HomePageRouter = express.Router();

const { homePage } = require("../controller/home");

HomePageRouter.get("/", homePage);

module.exports = HomePageRouter;
