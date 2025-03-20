'use strict';
import { QueryInterface , Sequelize , DataTypes } from 'sequelize';

export async function up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
  await queryInterface.createTable('Roles', {
    id:{
      type:Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    name:{
      type:Sequelize.STRING,
      allowNull:false
    },
    shopid:{
      type:Sequelize.INTEGER,
      allowNull:false
    },
    permission:{
      type:Sequelize.TEXT,
      allowNull:true
    },
    paidbill:{
      type:Sequelize.BOOLEAN,
      allowNull:false,
      defaultValue:false
    },
    openbill:{
      type:Sequelize.BOOLEAN,
      allowNull:false,
      defaultValue:false
    },
    addproduct:{
      type:Sequelize.BOOLEAN,
      allowNull:false,
      defaultValue:false
    },
    addstock:{
      type:Sequelize.BOOLEAN,
      allowNull:false,
      defaultValue:false
    },
    addstaff:{
      type:Sequelize.BOOLEAN,
      allowNull:false,
      defaultValue:false
    
    },
    deletebill:{
      type:Sequelize.BOOLEAN,
      allowNull:false,
      defaultValue:false
    
    },
    createdAt:{
      type:Sequelize.DATE,
      allowNull:false
    },
    updatedAt:{
      type:Sequelize.DATE,
      allowNull:false
    }
  })
}

export async function down(queryInterface:QueryInterface,Sequelize:typeof DataTypes){
  await queryInterface.dropTable('Roles');
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
