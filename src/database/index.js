const { Sequelize } = require("sequelize");
const Users = require("../apps/models/users");
const databaseConfig = require("../configs/db");

const models = [Users];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(
      databaseConfig.database,
      databaseConfig.username,
      databaseConfig.password,
      {
        host: databaseConfig.host,
        dialect: databaseConfig.dialect,
        port: databaseConfig.port,
        define: databaseConfig.define,
      }
    );

    models.map((model) => model.init(this.connection));
  }
}

module.exports = new Database();
