"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkDB = exports.dbInstance = void 0;
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("./config"));
const env = process.env.NODE_ENV || 'development';
const dbConfig = config_1.default[env];
// export const dbConfig = new Sequelize('Authenication','root','root',{
//     dialect:'mysql',
//     host:'db',
//     timezone: '+07:00',
//     logging: console.log
// })
exports.dbInstance = new sequelize_1.Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    dialect: dbConfig.dialect,
    host: dbConfig.host,
    timezone: '+07:00',
    logging: console.log
});
// import '../Models/Owner.model';
const checkDB = async () => {
    try {
        await exports.dbInstance.authenticate();
        await exports.dbInstance.sync({ alter: true });
    }
    catch (error) {
        console.log(error);
        console.log("Not connect Database Authenication");
    }
};
exports.checkDB = checkDB;
