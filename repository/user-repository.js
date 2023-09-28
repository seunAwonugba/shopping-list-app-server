const { user } = require("../models");

class UserRepository {
    async createUser(data) {
        const createUser = await user.create(data);

        return createUser;
    }
}

module.exports = UserRepository;
