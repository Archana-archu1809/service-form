const {Sequelize}=require ("sequelize");
const dbConfig= require('../config/config.json')
const sequelize=new Sequelize(dbConfig.development.database,dbConfig.development.username,dbConfig.development.password, {
    host:dbConfig.development.host,
    dialect:dbConfig.development.dialect
});
sequelize.sync();
(async ()=>{
    try{
        await sequelize.authenticate();
        console.log("Connection has beenestablished successfully")
    }catch(error){
        console.error("unable to connect the database",error)
    }
})();
module.exports=sequelize;
