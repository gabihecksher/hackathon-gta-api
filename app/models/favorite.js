module.exports = (sequelize, DataTypes) => {
    const Favorite = sequelize.define('Favorite', {
      idUser: DataTypes.INTEGER,
      idProject: DataTypes.INTEGER
    });
  
    return Favorite;
  }