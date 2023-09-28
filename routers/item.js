const express = require("express");
const {
  createItem,
  getAllItems,
  getItem,
  updateItem,
  deleteItem,
} = require("../controllers/item");

const item = express.Router();

item.route("/").get(getAllItems).post(createItem);
item.route("/:id").get(getItem).patch(updateItem).delete(deleteItem);

module.exports = item;
