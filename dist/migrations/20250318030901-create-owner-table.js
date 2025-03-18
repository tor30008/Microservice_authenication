'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = up;
exports.down = down;
// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up (queryInterface, Sequelize) {
//     /**
//      * Add altering commands here.
//      *
//      * Example:
//      * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
//      */
//   },
//   async down (queryInterface, Sequelize) {
//     /**
//      * Add reverting commands here.
//      *
//      * Example:
//      * await queryInterface.dropTable('users');
//      */
//   }
// };
const sequelize_1 = require("sequelize");
async function up(queryInterface, Sequelize) {
    await queryInterface.createTable('Owners', {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        firstname: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        hashpassword: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        createAt: Sequelize.DATE,
        updateAt: Sequelize.DATE
    });
}
async function down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Owners');
}
