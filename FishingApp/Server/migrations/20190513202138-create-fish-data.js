'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('FishData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      latitude: {
        type: Sequelize.FLOAT
      },
      longitude: {
        type: Sequelize.FLOAT
      },
      fishname: {
        type: Sequelize.STRING
      },
      fishsize: {
        type: Sequelize.STRING
      },
      lurebait: {
        type: Sequelize.STRING
      },
      linestrength: {
        type: Sequelize.STRING
      },
      rod: {
        type: Sequelize.STRING
      },
      reel: {
        type: Sequelize.STRING
      },
      weather: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('FishData');
  }
};