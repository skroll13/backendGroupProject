'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('nationalParks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      parkName: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      userID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('nationalParks');
  }
};