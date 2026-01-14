import Sequelize, { Model } from "sequelize";

class Skill extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        categoria: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: "skills",
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.User, {
      through: models.UserSkill,
      foreignKey: "skill_id",
      as: "user",
    });
  }
}

export default Skill;
