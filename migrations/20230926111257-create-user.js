"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("users", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            firstName: {
                type: Sequelize.STRING,
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
                type: Sequelize.STRING,
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
                type: Sequelize.STRING,
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
                unique: true,
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    min: {
                        msg: "Password min length is 6",
                        args: [6],
                    },
                    notEmpty: {
                        msg: "Password is required",
                    },
                    notNull: {
                        msg: "Password can not be null",
                    },
                },
            },
            phoneNumber: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("users");
    },
};
