'use strict';
import { QueryInterface, DataTypes } from 'sequelize';

export async function up(queryInterface : QueryInterface , Sequelize : typeof import('sequelize')):Promise<void>{
  await queryInterface.createTable('OwnerShops',{
    ownerid:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false
    },
    shopid:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false
    },
    status:{
      type:DataTypes.BOOLEAN,
      allowNull:false,
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

export async function down(queryInterface : QueryInterface, Sequelize : typeof import('sequelize')):Promise<void>{
  await queryInterface.dropTable('OwnerShops');
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
