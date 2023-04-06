'use strict';

const { Sequelize, DataTypes } = require('sequelize');

require('dotenv').config();

const SQL_URL = process.env.SQL_URL || "sqlite:memory";

const sequelize = new Sequelize(SQL_URL);

const Clothes = sequelize.define("Clothes", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sleeves: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    size: {
        type: DataTypes.ENUM('small', 'medium', 'large'),
        allowNull: false
    },
    color: {
        type: DataTypes.ENUM('green', 'blue', 'red', 'black', 'white'),
        allowNull: false
    }
});

module.exports = {
    sequelize,
    Clothes,
};