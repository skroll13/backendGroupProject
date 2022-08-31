'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nationalParks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.roles.hasMany(models.nationalParks, {foreignKey: 'parkID'})
    }
  }
  nationalParks.init({
    parkName: DataTypes.STRING,
    description: DataTypes.STRING,
    state: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'nationalParks',
  });
  return nationalParks;
};