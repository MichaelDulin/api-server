'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const food = require('./food');
const clothes = require('./clothes');

const SQL_URL = process.env.SQL_URL || "sqlite:memory";
const sequelize = new Sequelize(SQL_URL);

const foodModel = food(sequelize, DataTypes);
const clothesModel = clothes(sequelize, DataTypes);

module.export = {
    sequelize,
    foodModel,
    clothesModel
}