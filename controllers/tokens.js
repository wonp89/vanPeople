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
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
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

  //   currentUser(req, res, next) {
  //     res.send(req.currentUser);
  //   }
};

module.exports = TokensController;
