"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_config_1 = require("../Config/db.config");
class Owner extends sequelize_1.Model {
}
Owner.init({
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED
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
        allowNull: false
    },
    hashpassword: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false
    },
}, {
    sequelize: db_config_1.dbInstance,
    tableName: "Owners",
    timestamps: true
});
exports.default = Owner;
