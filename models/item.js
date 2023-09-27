"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Item.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      quantity: DataTypes.STRING,
      category: DataTypes.STRING,
      price: DataTypes.STRING,
      completed: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      tableName: "items",
      modelName: "Item",
    }
  );
  return Item;
};
