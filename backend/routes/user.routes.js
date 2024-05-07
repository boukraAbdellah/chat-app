const express = require("express");
const protectRoute = require("../middleware/protectRoute.js");
const { getUsersForSidebar } = require("../controllers/user.controller.js");

const userRouter = express.Router();

userRouter.get("/", protectRoute, getUsersForSidebar);

module.exports = userRouter;
