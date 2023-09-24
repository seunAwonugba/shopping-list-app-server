const Item = require("../models/itemsModel/item_model");
const { StatusCodes } = require("http-status-codes");

const ItemController = {
  // Retrieve all items

  getItems: async (req, res) => {
    await Item.sync(); // This creates the table if it doesn't exist

    try {
      const item = await Item.findAll();

      return res.status(StatusCodes.OK).send(item);
    } catch (error) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: error.message });
    }
  },

  // Create a new item

  createItem: async (req, res) => {
    await Item.sync(); // This creates the table if it doesn't exist

    try {
      const newItem = await Item.create(req.body);

      return res.status(StatusCodes.CREATED).json(newItem);
    } catch (error) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: error.message });
    }
  },

  // Retrieve a specific item by ID
  getItemById: async (req, res) => {
    await Item.sync(); // This creates the table if it doesn't exist

    const { itemId } = req.params; //Pick item_id from url params

    try {
      const item = await Item.findByPk(itemId);

      if (!item) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: "Item Not Found" });
      }

      return res.status(StatusCodes.OK).send(item);
    } catch (error) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: error.message });
    }
  },

  // Update an item by ID

  updateItem: async (req, res) => {
    await Item.sync(); // This creates the table if it doesn't exist

    const { itemId } = req.params; //Pick item_id from url params

    try {
      const item = await Item.findByPk(itemId);
      if (!item) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: "Item Not Found" });
      }
      await item.update(req.body);

      return res.status(StatusCodes.OK).json({ message: "Item Updated" });
    } catch (error) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: error.message });
    }
  },

  // Delete an item by ID

  deleteItem: async (req, res) => {
    await Item.sync(); // This creates the table if it doesn't exist

    const { itemId } = req.params; //Pick item_id from url params

    try {
      const item = await Item.findByPk(itemId);
      if (!item) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: "Item Not Found" });
      }
      await item.destroy();

      return res
        .status(StatusCodes.NO_CONTENT)
        .json({ message: "Item Deleted" });
    } catch (error) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: error.message });
    }
  },
};

module.exports = ItemController;
