import Sequelize, { Model } from "sequelize";

class User extends Model {
  toJSON() {
    const values = { ...this.get() };
    delete values.password;
    return values;
  }

  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: "users",
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Skill, {
      through: models.UserSkill,
      foreignKey: "user_id",
      as: "skill",
    });
  }
}

export default User;
