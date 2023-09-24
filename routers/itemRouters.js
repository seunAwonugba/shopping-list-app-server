const express = require("express");
const ItemController = require("../controllers/itemController");

const router = express.Router();

router
  .route("/item")
  .get(ItemController.getItems)
  .post(ItemController.createItem);

router
  .route("/item/:itemId")
  .get(ItemController.getItemById)
  .patch(ItemController.updateItem)
  .delete(ItemController.deleteItem);

module.exports = router;
