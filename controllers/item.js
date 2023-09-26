const ItemService = require("../service/item-service");

const itemService = new ItemService();

const createItem = async (req, res, next) => {
  try {
    const createItem = await itemService.create(req.body);

    return res.status(200).json(createItem);
  } catch (error) {
    next(error);
  }
};

module.exports = createItem;
