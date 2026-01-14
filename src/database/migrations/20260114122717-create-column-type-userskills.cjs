"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("usersSkills", "type", {
      type: Sequelize.ENUM("Aprender", "Ensinar"),
      allowNull: false,
      defaultValue: "Aprender",
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn("usersSkills", "type");
  },
};
