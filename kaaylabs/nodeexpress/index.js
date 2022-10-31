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
  const gender=req.body.gender;
  const experienc=req.body.experienc;
  const technology=req.body.technology;
  const rating=req.body.rating;

  db.query("INSERT INTO Sign(name,email,password,gender, experienc, technology, rating) VALUES(?,?,?,?,?,?,?)",[name,email,password,gender, experienc, technology, rating],(err,result)=>{
    if(err) throw err;
    console.log(result)
    return res.send({
      err:false,
      
    Id:result.insertId,
    name:name,
    message:'New user has been added successfully'
    })

  })
})
app.post("/login",(req,res)=>{
  const email=req.body.email;
  const password=req.body.password;
  db.query("SELECT * FROM Sign WHERE email = ? AND password = ?",
  [email,password],
  (err,result)=>{
   if (err){
    throw err
   }
   if(result.length > 0){
    res.send(result);
   }else{
    res.send({message:"Wrong password nd email combination"})
   }
  })
})
app.listen("8000", () => {
  console.log("server started on 8000");
});
