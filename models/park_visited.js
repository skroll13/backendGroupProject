'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class park_visited extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  park_visited.init({
    park_name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    date_visited: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'park_visited',
  });
  return park_visited;
};