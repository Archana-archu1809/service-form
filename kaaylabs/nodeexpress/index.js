const express=require("express");
const mysql=require("mysql");
const cors=require("cors");
const app=express();
app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Archu@1809",
  database: "formdata",
});
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Mysql is connected");
});
app.post("/Register",(req,res)=>{
  const name=req.body.name;
  const email=req.body.email;
  const password=req.body.password;
  db.query("INSERT INTO Register(name,email,password) VALUES(?,?,?)",[name,email,password],(err,result)=>{
    if(err) throw err;
    console.log(result)
    return res.send({
      
    Id:result.insertId,
    name:name,
    message:'New user has been added successfully'
    })

  })
})
app.listen("8000", () => {
  console.log("server started on 8000");
});
