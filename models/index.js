const { Sequelize } = require('sequelize');
const config = require('../config/config');
const productModel = require('./product');

const environment = process.env.NODE_ENV || 'development';
const databaseConfig = config[environment];

if (!databaseConfig) {
  throw new Error(`Unsupported NODE_ENV: ${environment}`);
}

const sequelize = new Sequelize(databaseConfig);
const Product = productModel(sequelize);

module.exports = {
  sequelize,
  Sequelize,
  Product
};
