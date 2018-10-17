module.exports = (sequelize, DataTypes) => {
    const UserUniversity = sequelize.define('UserUniversity', {
      idUser: DataTypes.INTEGER,
      idUniversity: DataTypes.INTEGER
    });
    
    return UserUniversity;
  }