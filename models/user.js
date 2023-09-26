"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: "First Name is required",
          notNull: "First Name can not be null",
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: "Last Name is required",
          notNull: "Last Name can not be null",
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: "Email is required",
          notNull: "Email can not be null",
          isEmail: "Please use a valid email",
        },
        unique: { msg: "Email already exists", arg: true },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          min: 6,
        },
      },
      phoneNumber: { type: DataTypes.STRING, allowNull: true },
    },
    {
      sequelize,
      tableName: "users",
      modelName: "user",
    }
  );
  return User;
};
