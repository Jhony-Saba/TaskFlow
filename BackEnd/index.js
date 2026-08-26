const express = require("express");
require("dotenv").config();
const erroHandler =require("./middleware/erroHandler")
const db =require("./config/db")

const mongoose = require('mongoose');
const dns = require("node:dns/promises");
const connectDB = require("./config/db");
dns.setServers(["1.1.1.1", "1.0.0.1"]);

// const mongoose =require("mongoose");



const app = express();
const PORT = process.env.PORT || 8000 ; //PORT of my backend 
app.use(express.json());


app.use("/user",require("./routes/userRoute"))
app.use("/project", require("./routes/projectRoute"))
app.use("/task", require("./routes/taskRoute"))
app.use(erroHandler);


const run =async()=>{
     if( await connectDB()==1)
     await app.listen(PORT,()=> {console.log("server is running")})
      else console.log("erro bro")
}
run();



