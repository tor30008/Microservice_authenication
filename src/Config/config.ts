import { Dialect } from 'sequelize';

interface DBConfigAttributes { 
    username: string;
    password: string;
    database: string;
    host: string;
    dialect: Dialect;
    timezone:string;
}

interface DBConfig {
    development: DBConfigAttributes;
    test: DBConfigAttributes;
    production: DBConfigAttributes;
}

const config: DBConfig = {
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
}
export default config; 
