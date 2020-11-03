//const Sequelize = require('sequelize');
import { Sequelize, DataTypes } from 'sequelize'
const dbConfig = require('../config/database');
const sequelize = new Sequelize(dbConfig);
import User from '../models/User'
import { v4 } from 'uuid'
//const { v4: uuid, validate: isUuid } = require('uuid');
//sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
//yarn create-model User --attributes firstName:string,lastName:string,email:string
//const User = require('../models/User');

User.init(
    {
    id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        unique: true,
        allowNull: false,
        defaultValue: () => v4()
    },
      email: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      firstName: {
        type: new DataTypes.STRING(128),
        allowNull: true,
      },
      lastName: {
        type: new DataTypes.STRING(128),
        allowNull: true,
      },
    },
    {
        sequelize,
        tableName: "users",
    }
  );


//User.associate(connection.models);

module.exports = sequelize;