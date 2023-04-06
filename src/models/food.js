'use strict';

const { Sequelize, DataTypes } = require('sequelize');

require('dotenv').config();

const SQL_URL = process.env.SQL_URL || "sqlite:memory";

const sequelize = new Sequelize(SQL_URL);

const Food = sequelize.define("Food", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    savory: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    originCountry: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = {
    sequelize,
    Food,
};