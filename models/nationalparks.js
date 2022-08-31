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
      models.nationalParks.belongsTo(models.users, {foreignKey: 'userID'})
    }
  }
  nationalParks.init({
    parkName: DataTypes.STRING,
    description: DataTypes.STRING,
    state: DataTypes.STRING,
    userID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'nationalParks',
  });
  return nationalParks;
};