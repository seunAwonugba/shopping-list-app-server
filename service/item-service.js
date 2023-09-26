const ItemRepository = require("../repository/item-respository");

class ItemService {
  constructor() {
    this.ItemRepository = new ItemRepository();
  }

  async create(data) {
    const createItem = await this.ItemRepository.createItem(data);

    return { success: true, data: createItem };
  }
}

module.exports = ItemService;
