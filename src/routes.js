const { Router } = require("express");
const schemaValidator = require("./apps/middlewares/schemaValidator");

const UserController = require("./apps/controllers/userController");
const userSchema = require("./schema/create.user.schema.json");

const routes = new Router();

routes.post("/user", schemaValidator(userSchema), UserController.create);

routes.get("/start", (_, res) => {
  return res.send({ messege: "Connected with success in port 3000!" });
});

module.exports = routes;
