'use strict';

import { QueryInterface, Sequelize, DataTypes } from 'sequelize';

export async function up (queryInterface:QueryInterface ,Sequelize : Sequelize):Promise<void> {
  await queryInterface.createTable('Staffs', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    firstname:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lastname:{
        type:DataTypes.STRING,
        allowNull:false
    },
    phone:{
        type:DataTypes.STRING,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    hashpassword:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    salt:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    shopid:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    roleid:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    createdAt:{
        type:DataTypes.DATE,
        allowNull:false,
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt:{
        type:DataTypes.DATE,
        allowNull:false,
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP')
    }
  })    
}

export async function down(queryInterface:QueryInterface,Sequelize:typeof import('sequelize')):Promise<void>{
    await queryInterface.dropTable('Staffs');
}


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
