const express=require("express");
const mysql=require("mysql");
const db=require('./models');
const cors=require("cors");
const app=express();
const api=require("./api/index")

app.use(express.json());
app.use(cors());
require("./models/user")
require("dotenv").config();

app.use(api);
app.listen("8000", () => {
  console.log("server started on 8000");
});
