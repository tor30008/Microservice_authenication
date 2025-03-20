'use strict';
import { QueryInterface , DataTypes } from "sequelize";

export async function up(queryInterface: QueryInterface, Sequelize : typeof import('sequelize')):Promise<void> {
  await queryInterface.createTable('Shops', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    shopname:{
      type:DataTypes.STRING,
      allowNull:false
    },
    shoplogo:{
      type:DataTypes.TEXT,
      allowNull:true
    },
    shopaddress:{
      type:DataTypes.TEXT,
      allowNull:true
    },
    shopaddress1:{
      type:DataTypes.TEXT,
      allowNull:true
    },
    phone:{
      type:DataTypes.STRING,
      allowNull:true
    },
    fax:{
      type:DataTypes.STRING,
      allowNull:true
    },
    taxid:{
      type:DataTypes.STRING,
      allowNull:true      
    },
    latitude:{
      type:DataTypes.DECIMAL,
      allowNull:true
    },
    longitude:{
      type:DataTypes.DECIMAL,
      allowNull:true
    },
    status:{
      type:DataTypes.BOOLEAN,
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
    
  });
}

export async function down(queryInterface: QueryInterface, Sequelize : typeof import('sequelize')):Promise<void> {
  await queryInterface.dropTable('Shops');
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
