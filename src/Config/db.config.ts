import { Sequelize } from "sequelize";
import config from './config';

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

// export const dbConfig = new Sequelize('Authenication','root','root',{
//     dialect:'mysql',
//     host:'db',
//     timezone: '+07:00',
//     logging: console.log
// })

export const dbInstance = new Sequelize(dbConfig.database,dbConfig.username,dbConfig.password,{
    dialect:dbConfig.dialect,
    host:dbConfig.host,
    timezone: '+07:00',
    logging: console.log
})

// import '../Models/Owner.model';
export const checkDB = async() => {
    try{
        await dbInstance.authenticate();
    }catch(error){
        console.log(error);
        console.log("Not connect Database Authenication");
    }
}

