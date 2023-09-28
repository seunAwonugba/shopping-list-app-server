"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {}
    }
    User.init(
        {
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "First Name is required",
                    },
                    notNull: {
                        msg: "First Name can not be null",
                    },
                },
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Last Name is required",
                    },
                    notNull: {
                        msg: "Last Name can not be null",
                    },
                },
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Email is required",
                    },
                    notNull: {
                        msg: "Email can not be null",
                    },
                    isEmail: {
                        msg: "Please use a valid email",
                    },
                },
                unique: {
                    msg: "Email already exists",
                    arg: true,
                },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: {
                        args: [6],
                        msg: "Password min length is 6",
                    },
                    notEmpty: {
                        msg: "Password is required",
                    },
                    notNull: {
                        msg: "Password can not be null",
                    },
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
