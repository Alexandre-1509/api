import Sequelize, { Model } from "sequelize";

class UserSkill extends Model {
  static init(sequelize) {
    super.init(
      {
        skill_id: Sequelize.INTEGER,
        level: Sequelize.ENUM("Iniciante", "Intermediario", "Avançado"),
        type: Sequelize.ENUM("Aprender", "Ensinar"),
      },
      {
        sequelize,
        tableName: "usersSkills",
      }
    );

    return this;
  }
}

export default UserSkill;
