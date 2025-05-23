const { Router } = require("express");
const routes = new Router();

routes.get("/start", (_, res) => {
  return res.send({ messege: "Connected with success in port 3000!" });
});

module.exports = routes;
