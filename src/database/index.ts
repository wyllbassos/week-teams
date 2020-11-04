//const Sequelize = require('sequelize');
import { Sequelize } from 'sequelize'
const dbConfig = require('../config/database');
const sequelize = new Sequelize(dbConfig);
import User from '../models/User'
import Worker from '../models/Worker';

User.userInit(sequelize)
Worker.workerInit(sequelize)

//User.associate(connection.models);
export default sequelize;