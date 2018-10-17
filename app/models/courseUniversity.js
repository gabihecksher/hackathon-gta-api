module.exports = (sequelize, DataTypes) => {
    const CourseUniversity = sequelize.define('CourseUniversity', {
      nameUniversity: DataTypes.STRING,
      nameCourse: DataTypes.STRING
    });
    CourseUniversity.associate = models => {
      CourseUniversity.hasMany(models.User);
    };
    return CourseUniversity;
}