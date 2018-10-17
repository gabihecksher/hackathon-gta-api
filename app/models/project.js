
module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      img: DataTypes.BLOB({length: 'medium'}),
      video: DataTypes.BLOB({length: 'medium'}),
      likes: DataTypes.INTEGER,
      text: DataTypes.BLOB({length: 'medium'})
      
    });
    Project.associate = models => {
      Project.belongsToMany(models.User, { through: 'UserProjects' });
      Project.belongsToMany(models.TopicSubject, { through: 'ProjectTopics' });
      Project.hasMany(models.Comment);
    };
    return Project;
  }