const model = require("./index");

module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define("Item", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false, // Default to not completed
    },
  });

  return Item;
};

// Item.belongsTo(sequelize.models.user, {foreignKey: 'userId'})

// module.exports = Item;
