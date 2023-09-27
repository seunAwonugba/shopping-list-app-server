const ItemService = require("../service/item-service");
const { StatusCodes } = require("http-status-codes");

const itemService = new ItemService();

const createItem = async (req, res, next) => {
  try {
    const createItem = await itemService.create(req.body);

    return res.status(StatusCodes.CREATED).json(createItem);
  } catch (error) {
    next(error);
  }
};

const getAllItems = async (req, res, next) => {
  try {
    const items = await itemService.getAllItems();

    return res.status(StatusCodes.OK).json(items);
  } catch (error) {
    next(error);
  }
};

const getItem = async (req, res, next) => {
  try {
    const item = await itemService.getItem(req.params.id);

    return res.status(StatusCodes.OK).json(item);
  } catch (error) {
    next(error);
  }
};

const updateItem = async (req, res, next) => {
  try {
    const item = await itemService.updateItem(req.params.id, req.body);

    return res.status(StatusCodes.OK).json(item);
  } catch (error) {
    next(error);
  }
};

const deleteItem = async (req, res, next) => {
  try {
    const response = await itemService.deleteItem(req.params.id);

    return res.status(StatusCodes.OK).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = { createItem, getAllItems, getItem, updateItem, deleteItem };
