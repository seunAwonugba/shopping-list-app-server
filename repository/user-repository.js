const { user } = require("../models");

console.log(user);
class UserRepository {
  async createUser(data) {
    const createUser = await user.create(data);

    return createUser;
  }
}

module.exports = UserRepository;
