'use strict';
module.exports = (sequelize, DataTypes) => {
  const FishData = sequelize.define('FishData', {
    userId: DataTypes.INTEGER,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    fishname: DataTypes.STRING,
    fishsize: DataTypes.STRING,
    lurebait: DataTypes.STRING,
    linestrength: DataTypes.STRING,
    rod: DataTypes.STRING,
    reel: DataTypes.STRING,
    weather: DataTypes.STRING
  }, {});
  FishData.associate = function(models) {
    FishData.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'id',
      onDelete: 'CASCADE'
    })
  };
  return FishData;
};
