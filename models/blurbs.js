'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class blurbs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.blurbs.belongsTo(models.users, {foreignKey: 'userID'})
      models.blurbs.belongsTo(models.nationalParks, {foreignKey: 'parkID'})
    }
  }
  blurbs.init({
    userID: DataTypes.INTEGER,
    parkID: DataTypes.INTEGER,
    blurbContent: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'blurbs',
  });
  return blurbs;
};