'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Product belongsToMany TopicSubject
    // TopicSubject belongsToMany Product

    return queryInterface.createTable(
      'ProjectTopics',
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
        TopicSubjectId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ProjectTopics');
  }
};

