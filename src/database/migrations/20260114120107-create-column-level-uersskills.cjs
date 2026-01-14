"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("usersSkills", "level", {
      type: Sequelize.ENUM("Iniciante", "Intermediario", "Avançado"),
      allowNull: false,
      defaultValue: "Iniciante",
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn("usersSkills", "level");
  },
};
