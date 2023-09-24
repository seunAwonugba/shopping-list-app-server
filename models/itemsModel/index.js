const { sequelize, Sequelize } = require("../index");
const Item = require("../item_model");

const ItemModel = Item(sequelize, Sequelize);

module.exports = ItemModel;
