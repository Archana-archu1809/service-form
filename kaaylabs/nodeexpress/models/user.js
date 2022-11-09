const {DataTypes}=require ("sequelize");
const sequelize=require("../database/index");
const User=sequelize.define("Users",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,

    },
    name:{
        type:DataTypes.STRING,
        allownull:false,
    },
    email:{
        type:DataTypes.STRING,
        allownull:false,
    },
    password:{
        type:DataTypes.STRING,
        allownull:false,
    },
    gender:{
        type:DataTypes.STRING,
        allownull:false,
    },
    experience:{
        type:DataTypes.STRING,
        allownull:false,
    },
    technology:{
        type:DataTypes.STRING,
        allownull:false,
    },
    rating:{
        type:DataTypes.STRING,
        allownull:false,
    },
    admin: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
})
module.exports=User;