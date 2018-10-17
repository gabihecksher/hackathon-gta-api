
module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      img: DataTypes.STRING,
      video: DataTypes.STRING,
      likes: DataTypes.INTEGER,
      text: DataTypes.STRING
      
    });
    Project.associate = models => {
      Project.belongsToMany(models.User, { through: 'UserProjects' });
      Project.belongsToMany(models.TopicSubject, { through: 'ProjectTopics' });
      Project.hasMany(models.Comment);
    };
    return Project;
  }