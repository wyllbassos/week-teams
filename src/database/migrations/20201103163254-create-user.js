'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                primaryKey: true,
                unique: true,
                type: Sequelize.UUID,
            },
            userLogin: {
                unique: true,
                allowNull: false,
                type: Sequelize.STRING
            },
            email: {
                unique: true,
                allowNull: false,
                type: Sequelize.STRING
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            workerId: {
                unique: true,
                type: Sequelize.UUID,
                references: {
                    model: 'workers', // name of Target model
                    key: 'id', // key in Target model that we're referencing
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('Users');
    }
};