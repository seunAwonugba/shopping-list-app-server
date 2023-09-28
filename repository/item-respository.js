const { Item } = require("../models");

class ItemRepository {
    async createItem(data) {
        const createItem = await Item.create(data);

        return createItem;
    }

    async getItems() {
        const items = await Item.findAll();

        return items;
    }

    async getItem(id) {
        const item = await Item.findByPk(id);

        return item;
    }

    async updateItem(data, id) {
        const updateItem = await Item.update(data, {
            where: {
                id,
            },
            returning: true,
        });

        const [_numAffectedRows, [updatedData]] = updateItem;

        return updatedData;
    }

    async deleteItem(id) {
        const deleteItem = await Item.destroy({ where: { id: id } });

        return deleteItem;
    }
}

module.exports = ItemRepository;
