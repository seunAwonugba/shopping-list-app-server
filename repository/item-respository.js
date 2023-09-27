const { Item } = require("../models");

class ItemRepository {
  async createItem(data) {
    const createItem = await Item.create(data);

    return createItem;
  }

  async getAllItems() {
    const items = await Item.findAll();

    return items;
  }

  async getItem(id) {
    const item = await Item.findByPk(id);

    return item;
  }

  async updateItem(data, id) {
    const updateItem = await Item.update(data, { where: { id: id } });

    return updateItem;
  }

  async deleteItem(id) {
    const deleteItem = await Item.destroy({ where: { id: id } });

    return deleteItem;
  }
}

module.exports = ItemRepository;
