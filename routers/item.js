const express = require("express");
const {
    createItem,
    getItem,
    updateItem,
    deleteItem,
    getItems,
} = require("../controllers/item");

const item = express.Router();

item.post("/create-item", createItem);
item.get("/get-items", getItems);
item.get("/get-item/:id", getItem);
item.patch("/update-item/:id", updateItem);
item.delete("/delete-item/:id", deleteItem);

module.exports = item;
