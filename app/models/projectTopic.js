module.exports = (sequelize, DataTypes) => {
    const ProjectTopic = sequelize.define('ProjectTopic', {
      idTopic: DataTypes.INTEGER,
      idProject: DataTypes.INTEGER
    });
  
    return ProjectTopic;
  }