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
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Product Name is required",
                    },
                    notNull: {
                        msg: "Product Name can not be null",
                    },
                },
            },
            quantity: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Quantity is required",
                    },
                    notNull: {
                        msg: "Quantity can not be null",
                    },
                },
            },
            notes: {
                type: DataTypes.STRING,
                allowNull: true,
            },
        },
        {
            sequelize,
            tableName: "items",
            modelName: "Item",
        }
    );
    return Item;
};
