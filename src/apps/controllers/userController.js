const users = require("../models/users");
const bcrypt = require("bcryptjs");

class UserController {
  async create(req, res) {
    const { name, user_name, email, password } = req.body;

    // Verifica se o usuário já existe
    const verifyUser = await users.findOne({
      where: { email },
    });

    if (verifyUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    // Gera o hash da senha
    const password_hash = await bcrypt.hash(password, 10);

    // Cria o usuário com o campo correto
    const user = await users.create({
      name,
      user_name,
      email,
      password_hash,
    });

    if (!user) {
      return res.status(400).json({ message: "Failed to create a user!" });
    }

    return res.status(201).json({ message: "User created!" });
  }
}

module.exports = new UserController();
