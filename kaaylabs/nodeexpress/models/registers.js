const {DataTypes}=require ("sequelize");

const sequelize=require("../database/index");
const resumeData = require("./datas");
const User=sequelize.define("User",{
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
    },password:{
        type:DataTypes.STRING,
        allownull:false, 

    },
    phonenumber:{
        type:DataTypes.STRING,
        allownull:false, 
    },
    workstatus:{
        type:DataTypes.STRING,
        allowNull:false
    },
    resume:{
        type:DataTypes.BLOB,
        allowNull:false
    },
    checkbox:{
        type:DataTypes.STRING,
        allowNull:false
    },
    admin: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
     
});
User.hasOne(resumeData,{
    onDelete:"cascade",  
});
resumeData.belongsTo(User);

module.exports=User;