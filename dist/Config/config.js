"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    development: {
        username: 'root',
        password: 'root',
        database: 'Authenication',
        host: 'db',
        dialect: 'mysql',
        timezone: '+07:00'
    },
    test: {
        username: 'root',
        password: '',
        database: 'test',
        host: '127.0.0.1',
        dialect: 'mysql',
        timezone: '+07:00'
    },
    production: {
        username: 'root',
        password: '',
        database: 'test',
        host: '127.0.0.1',
        dialect: 'mysql',
        timezone: '+07:00'
    },
};
exports.default = config;
