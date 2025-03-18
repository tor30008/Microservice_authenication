import { DataTypes , Model , Optional } from "sequelize";
import { dbInstance } from '../Config/db.config';

interface OwnerAttributes {
    id: number;
    firstname: string;
    lastname: string;
    phone: string
    email: string
    hashpassword?:number
    createdAt?:Date;
    updatedAt?:Date;
}

interface OwnerCreateAttributes extends Optional<OwnerAttributes,'id'>{}

class Owner extends Model<OwnerAttributes,OwnerCreateAttributes> implements OwnerAttributes {
    public id!: number;
    public firstname!: string;
    public lastname!: string;
    public phone!: string;
    public email!: string;
    public hashpassword!: number;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Owner.init({
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER.UNSIGNED
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
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    hashpassword:{
        type:DataTypes.BIGINT,
        allowNull:false
    },
},{
    sequelize:dbInstance,
    tableName:"Owners",
    timestamps:true
})

export default Owner;