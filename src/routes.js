const { Router } = require("express");
const UserModel = require("./apps/models/users");

const routes = new Router();

routes.get("/users", async (_req, res) => {
  const allUsers = await UserModel.findAll();
  res.send({ users: allUsers });
});

routes.get("/start", (_, res) => {
  return res.send({ messege: "Connected with success in port 3000!" });
});

module.exports = routes;
