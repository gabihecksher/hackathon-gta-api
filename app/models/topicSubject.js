module.exports = (sequelize, DataTypes) => {
    const TopicSubject = sequelize.define('TopicSubject', {
      nameTopic: DataTypes.STRING,
      nameSubject: DataTypes.STRING
    });
    TopicSubject.associate = models => {
      TopicSubject.belongsToMany(models.Project, { through: 'ProjectTopics' });
    };
    return TopicSubject;
  }