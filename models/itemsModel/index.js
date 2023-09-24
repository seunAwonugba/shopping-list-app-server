const { sequelize, Sequelize } = require("../index");
const Item = require("../item");

const ItemModel = Item(sequelize, Sequelize);

module.exports = ItemModel;
