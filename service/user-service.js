const UserRepository = require("../repository/user-repository");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async signUp(data) {
    const createUser = await this.userRepository.createUser(data);

    // console.log("==user==", createUser);

    return { success: true, data: createUser };
  }
}

module.exports = UserService;
