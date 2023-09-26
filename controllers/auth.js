const UserService = require("../service/user-service");

const userService = new UserService();

const signUp = async (req, res, next) => {
  const { email, password, firstName, lastName, phoneNumber } = req.body;
  try {
    const signUp = await userService.signUp(req.body);

    return res.status(201).json(signUp);
  } catch (error) {
    next(error);
  }
};

module.exports = signUp;
