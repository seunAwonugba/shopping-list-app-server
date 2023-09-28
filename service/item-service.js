const ItemRepository = require("../repository/item-respository");
const customError = require("../utils/custom-error");

class ItemService {
  constructor() {
    this.ItemRepository = new ItemRepository();
  }

  async create(data) {
    const createItem = await this.ItemRepository.createItem(data);

    return { success: true, data: createItem };
  }

  async getAllItems() {
    const items = await this.ItemRepository.getAllItems();

    return { success: true, data: items };
  }

  async getItem(id) {
    const item = await this.ItemRepository.getItem(id);

    if (!item) {
      return customError("Item not found", "404", "Not Found");
    }

    return { success: true, data: item };
  }

  async updateItem(id, data) {
    const item = await this.getItem(id);

    if (!item.success) {
      return customError("Item not found", "404", "Not Found");
    }

    await this.ItemRepository.updateItem(data, id);

    return { success: true, data: "Item successfully updated" };
  }

  async deleteItem(id) {
    const item = await this.getItem(id);

    if (!item.success) {
      return customError("Item not found", "404", "Not Found");
    }

    await this.ItemRepository.deleteItem(id);

    return { success: true, data: "Item deleted successfully" };
  }
}

module.exports = ItemService;
