require('ts-node/register');
require('dotenv').config();
const config = require('./config.ts');
const envMode = process.env.NODE_ENV || 'development';
console.log(config.default[envMode]);
module.exports = config.default[envMode];
//console.log(config.default);