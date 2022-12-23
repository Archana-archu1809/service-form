// const {DataTypes}=require ("sequelize");

// const sequelize=require("../database/index");
// const Data = require("./data");
// const Register=sequelize.define("Registers",{
//     id:{
//         type:DataTypes.INTEGER,
//         autoIncrement:true,
//         primaryKey:true,

//     },
//     name:{
//         type:DataTypes.STRING,
//         allownull:false,  
//     },
//     email:{
//         type:DataTypes.STRING,
//         allownull:false,  
//     },password:{
//         type:DataTypes.STRING,
//         allownull:false, 

//     },
//     phonenumber:{
//         type:DataTypes.STRING,
//         allownull:false, 
//     },
//     workstatus:{
//         type:DataTypes.STRING,
//         allowNuall:false
//     },
//     resume:{
//         type:DataTypes.BLOB,
//         allowNull:false
//     },
//     checkbox:{
//         type:DataTypes.STRING,
//         allowNull:false
//     },
//     admin: {
//         type: DataTypes.INTEGER,
//         defaultValue: 0,
//       },
     
// });
// Register.hasOne(Data,{
//     onDelete:"cascade",  
// });
// Data.belongsTo(Register);

// module.exports=Register;