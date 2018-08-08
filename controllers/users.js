const kx = require("../db/connection");
const bcrypt = require("bcrypt");

const UsersController = {
  new(req, res, next) {
    res.send("HELLO");
  },

  async create(req, res, next) {
    const { email, password, passwordConfirmation } = req.body;
    if (password !== passwordConfirmation) {
      res.json({ error: "Password does not match" });
    }
    try {
      const passwordDigest = await bcrypt.hash(password, 10);
      const [user] = await kx
        .insert({ email, passwordDigest })
        .into("users")
        .returning("*");
      if (user) {
        res.json(user);
      } else {
        res.json({ error: "Something went wrong" });
      }
    } catch (error) {
      next(error);
    }
  }
};

module.exports = UsersController;
