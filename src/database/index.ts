//const Sequelize = require('sequelize');
import { Sequelize, DataTypes } from 'sequelize'
const dbConfig = require('../config/database');
const sequelize = new Sequelize(dbConfig);
import User from '../models/User'

User.userInit(sequelize)

//User.associate(connection.models);
export default sequelize;