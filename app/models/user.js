
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      img: DataTypes.STRING,
      scholarship: DataTypes.INTEGER,
      birthDate: DataTypes.DATEONLY,
      gender: DataTypes.INTEGER,
    }
    
    );

  User.associate = models => {
    User.belongsTo(models.CourseUniversity);
    User.belongsToMany(models.Project, { through: 'UserProjects' });
    User.hasMany(models.Comment);
  };
  return User;
}




