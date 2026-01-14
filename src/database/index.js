import User from "./../app/models/User.js";
import Skill from "./../app/models/Skill.js";
import UserSkill from "../app/models/UserSkill.js";
import dbConfig from "./../config/database.cjs";
import { Sequelize } from "sequelize";

const models = [User, Skill, UserSkill];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
