const express = require("express");
const createItem = require("../controllers/item");

const item = express.Router();

item.post("/create", createItem);

module.exports = item;
