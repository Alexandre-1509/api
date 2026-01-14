import User from "./../models/User.js";
import Skill from "./../models/Skill.js";
import bcrypt from "bcrypt";
import { v4 } from "uuid";
import jwt from "jsonwebtoken";
import authConfig from "./../../config/authConfig.js";

class UserService {
  async registerUser(data) {
    const user = await User.findOne({
      where: {
        email: data.email,
      },
    });

    if (user) {
      throw new Error("Este e-mail já está cadastrado");
    }

    const hash = await bcrypt.hash(data.password, 10);

    const newUser = await User.create({
      id: v4(),
      ...data,
      password: hash,
    });

    return { newUser };
  }

  async loginUser(email, password) {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!email) {
      throw new Error("E-mail ou senha incorretos!");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("E-mail ou senha incorretos!");
    }

    const token = jwt.sign(
      { id: user.id, nome: user.nome },
      authConfig.secret,
      {
        expiresIn: authConfig.expiresIn,
      }
    );

    return { user, token };
  }

  async listUsers() {
    const users = await User.findAll({
      attributes: ["id", "nome", "email"],
    });

    return { users };
  }

  async updateUser(id, data) {
    const user = await User.findByPk(id);

    if (!user) {
      throw new Error("Não foi possivel atualizar informações");
    }

    const payload = { ...data };

    if (payload.password) {
      const hash = await bcrypt.hash(payload.password, 10);
      payload.password = hash;
    }

    await user.update(payload);

    return { user };
  }

  async deleteUser(id) {
    const user = await User.findByPk(id);

    if (!user) {
      throw new Error("Erro ao deletar usuário");
    }

    user.destroy();

    return { user };
  }

  async addNewSkill(userId, skill_id, level, type) {
    const skill = await Skill.findByPk(skill_id);
    const user = await User.findByPk(userId);
    // console.log(Object.keys(user.__proto__)); <- Mostra todos os métodos gerados pelo sequelize.

    const skillAdded = await user.addSkill(skill, {
      through: { level, type },
    });

    return { skillAdded };
  }
}

export default new UserService();
