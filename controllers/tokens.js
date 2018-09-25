const kx = require("../db/connection");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const TokensController = {
  async create(req, res, next) {
    const { email, password } = req.body;
    try {
      const user = await kx
        .first()
        .from("users")
        .where({ email });

      if (user && (await bcrypt.compare(password, user.passwordDigest))) {
        const payload = {
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 2, // * 1000 = 2hrs
          user: user
        };
        token = jwt.sign(payload, "supersecret");
        res.json({ jwt: token });
      } else {
        res.json({ invalidUser: "Your email or password is incorrect." });
      }
    } catch (error) {
      next(error);
    }
  }
};

module.exports = TokensController;
