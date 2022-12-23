// const {DataTypes}=require ("sequelize");
// const sequelize=require("../database/index");
// const Resume=sequelize.define("Resumes",{
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
//     },
//     password:{
//         type:DataTypes.STRING,
//         allownull:false,
//     },
//     address:{
//         type:DataTypes.STRING,
//         allownull:false,
//     },
//     sslc:{
//         type:DataTypes.STRING,
//         allownull:false,
//     },
//     sslcpercentage:{
//         type:DataTypes.STRING,
//         allownull:false,
//     },
//     hsc:{
//         type:DataTypes.STRING,
//         allownull:false,
//     },
//     hscpercentage:{
//         type:DataTypes.STRING,
//         allownull:false,
//     },
//     ug:{
//         type:DataTypes.STRING,
//         allownull:false,
//     },
//     ugpercentage:{
//         type:DataTypes.STRING,
//         allownull:false,
//     },
//     pg:{
//         type:DataTypes.STRING,
//         allownull:false,
//     },
//     pgpercentage:{
//         type:DataTypes.STRING,
//         allownull:false,
//     },
//     experience:{
//         type:DataTypes.STRING,
//         allownull:false,
//     },
//     skills:{
//         type:DataTypes.STRING,
//         allownull:false,
//     },
//     admin: {
//         type: DataTypes.INTEGER,
//         defaultValue: 0,
//       },
// })
// module.exports=Resume;