module.exports = (sequelize, DataTypes) => {
    const UserProject = sequelize.define('UserProject', {
      idUser: DataTypes.INTEGER,
      idProject: DataTypes.INTEGER
    });
  
    return UserProject;
  }