'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Product belongsToMany Tag
    // Project belongsToMany Users
    return queryInterface.createTable(
      'ProjectUsers',
      {
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        ProjectId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        UserId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    // remove table
    return queryInterface.dropTable('ProjectUsers');
  },
};