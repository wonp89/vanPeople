const { Router } = require("express");
const UsersController = require("../controllers/users");
const TokensController = require("../controllers/tokens");

const root = Router();
const users = Router();
const tokens = Router();

// Users Routes
root.use("/api/users", users);
root.use("/api/tokens", tokens);
users.get("/new", UsersController.new);
users.post("/", UsersController.create);
tokens.post("/", TokensController.create);

module.exports = root;
