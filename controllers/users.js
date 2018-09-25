const kx = require("../db/connection");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
        const payload = {
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 2, // * 1000 = 2hrs
          user: user
        };
        token = jwt.sign(payload, "supersecret");
        res.json({ jwt: token });
      } else {
        res.json({ error: "Something went wrong" });
      }
    } catch (error) {
      next(error);
    }
  }
};

module.exports = UsersController;
