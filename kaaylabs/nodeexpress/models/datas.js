const {DataTypes}=require ("sequelize");
const sequelize=require("../database/index");
const resumeData=sequelize.define("resumeData",{
    ResumeHeadline:{
        type:DataTypes.STRING,
        allowNull:false
       },
   skills:{
    type:DataTypes.STRING,
    allowNull:false

   },
   currentEmp:{
    type:DataTypes.STRING,
    allowNull:false

   },
   empType:{
    type:DataTypes.STRING,
    allowNull:false

   },
   cmpyName:{
    type:DataTypes.STRING,
    allowNull:false

   },
   designation:{
    type:DataTypes.STRING,
    allowNull:false

   },
   skillsUsed:{
    type:DataTypes.STRING,
    allowNull:false

   },
   joiningDate:{
    type:DataTypes.STRING,
    allowNull:false
   },
  WorkedTill:{
    type:DataTypes.STRING,
    allowNull:false
   },
   jobProfile:{
    type:DataTypes.STRING,
    allowNull:false

   },
   education:{
    type:DataTypes.STRING,
    allowNull:false

   },
   university:{
    type:DataTypes.STRING,
    allowNull:false
   },
   course:{
    type:DataTypes.STRING,
    allowNull:false
   },
   courseDuration:{
    type:DataTypes.STRING,
    allowNull:false

   },softwareName:{
    type:DataTypes.STRING,
    allowNull:false
   },
   softwareVersion:{
    type:DataTypes.STRING,
    allowNull:false

   },
   Experience:{
    type:DataTypes.STRING,
    allowNull:false

   },
   project:{
    type:DataTypes.STRING,
    allowNull:false

   },
   client:{
    type:DataTypes.STRING,
    allowNull:false

   },
   projectStatus:{
    type:DataTypes.STRING,
    allowNull:false
   },
   DetailsProject:{
    type:DataTypes.STRING,
    allowNull:false
   },

   profileSummary:{
    type:DataTypes.STRING,
    allowNull:false
   },
   SocialProfile:{
    type:DataTypes.STRING,
    allowNull:false
   },
  socialUrl:{
    type:DataTypes.STRING,
    allowNull:false
   },
   SocialDescription:{
    type:DataTypes.STRING,
    allowNull:false
   },workTitle:{
    type:DataTypes.STRING,
    allowNull:false
   },workUrl:{
    type:DataTypes.STRING,
    allowNull:false
   },WorkDescription:{
    type:DataTypes.STRING,
    allowNull:false
   },
   presentationTitle:{
    type:DataTypes.STRING,
    allowNull:false
   },presentationUrl:{
    type:DataTypes.STRING,
    allowNull:false
   },presentationDescription:{
    type:DataTypes.STRING,
    allowNull:false
   },
   certificationTitle:{
    type:DataTypes.STRING,
    allowNull:false
   },certificationComplettionID:{
    type:DataTypes.STRING,
    allowNull:false
   },certificationId:{
    type:DataTypes.STRING,
    allowNull:false
   },
 CurrentIndsutry:{
    type:DataTypes.STRING,
    allowNull:false
 },
 Department:{
    type:DataTypes.STRING,
    allowNull:false
 },
 RoleCategory:{
    type:DataTypes.STRING,
    allowNull:false
 },
 jobRole:{
    type:DataTypes.STRING,
    allowNull:false
 },
preferredType:{
    type:DataTypes.STRING,
    allowNull:false
 },

preferredWorkLocation:{
    type:DataTypes.STRING,
    allowNull:false
},
desiredJobType:{
    type:DataTypes.STRING,
    allowNull:false
},desiredEmploymentType:{
    type:DataTypes.STRING,
    allowNull:false
},
expectedSalary:{
    type:DataTypes.STRING,
    allowNull:false
},gender:{
    type:DataTypes.STRING,
    allowNull:false
},maritalStatus:{
    type:DataTypes.STRING,
    allowNull:false
},
DOb:{
    type:DataTypes.STRING,
    allowNull:false
},
Address:{
    type:DataTypes.STRING,
    allowNull:false
},
homeTown:{
    type:DataTypes.STRING,
    allowNull:false
},
pinCode:{ type:DataTypes.STRING,
    allowNull:false}
});

module.exports=resumeData;