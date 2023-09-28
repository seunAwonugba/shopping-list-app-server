const { BadRequest } = require("../error");
const ItemRepository = require("../repository/item-respository");
const customError = require("../utils/custom-error");

class ItemService {
    constructor() {
        this.itemRepository = new ItemRepository();
    }

    async create(data) {
        const createItem = await this.itemRepository.createItem(data);

        return { success: true, data: createItem };
    }

    async getItems() {
        const items = await this.itemRepository.getItems();

        return { success: true, data: items };
    }

    async getItem(id) {
        const item = await this.itemRepository.getItem(id);

        if (!item) {
            throw new BadRequest("Item not found");
        }

        return { success: true, data: item };
    }

    async updateItem(id, data) {
        const item = await this.itemRepository.getItem(id);

        if (!item) {
            throw new BadRequest("Item not found");
        }

        const updatedItem = await this.itemRepository.updateItem(data, id);

        return { success: true, data: updatedItem };
    }

    async deleteItem(id) {
        const item = await this.getItem(id);

        if (!item.success) {
            return customError("Item not found", "404", "Not Found");
        }

        await this.itemRepository.deleteItem(id);

        return { success: true, data: "Item deleted successfully" };
    }
}

module.exports = ItemService;
