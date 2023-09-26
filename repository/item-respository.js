const { Item } = require("../models");

console.log(Item);

class ItemRepository {
  async createItem(data) {
    const createItem = await Item.create(data);

    return createItem;
  }
}

module.exports = ItemRepository;
