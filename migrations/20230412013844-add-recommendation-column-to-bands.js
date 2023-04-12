'use strict';

const { DataTypes } = require("sequelize");

/* define changes in up */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'band',
      'recommendation',
      { type: DataTypes.STRING }
    )
  },

  /* Add reverting commands here. Like undo*/
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      'band',
      'recommendation',
    );
  }
};
