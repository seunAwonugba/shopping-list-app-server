const express = require("express");
const signUp = require("../controllers/auth");

const user = express.Router();

user.post("/sign-up", signUp);

module.exports = user;
