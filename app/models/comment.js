module.exports = (sequelize, DataTypes) => {
    //coment = comment 
    const Coment = sequelize.define('Comment', {
      text: DataTypes.TEXT,
      
    });
    Coment.associate = models => {
      Coment.belongsTo(models.User);
      Coment.belongsTo(models.Project);
    };
    return Coment;
  }