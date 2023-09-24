const { Sequelize, sequelize } = require("../index");

const Item = sequelize.define("Item", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  category: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.INTEGER,
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false, // Default to not completed
  },
});

// Item.belongsTo(sequelize.models.user, {foreignKey: 'userId'})

module.exports = Item;
