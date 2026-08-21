

// const express = require("express");

// const mongoose =require("mongoose")


// const app = express();
// const PORT = process.env.PORT || 8000;
// const MONGODB_URI = process.env.MONGODB_URI;

// mongoose.connect("mongodb+srv://<Jhonysaba>:<jhony>@cluster0.w1efkle.mongodb.net/?appName=Cluster0")
// .then().catch()


// app.get("/", (req, res) => {
  
//    res.render("index.ejs", { sum:100  });
// });

// app.get("/db-status", (req, res) => {
//   return res.json({
//     ok: true,
//     readyState: mongoose.connection.readyState,
//     connected: mongoose.connection.readyState === 1,
//   });
// });

// app.get("/project", (req, res) => {
 
//   return res.json({
//     ok: true,
//     message: "TaskFlow backend is running",
//     dbReady: mongoose.connection.readyState === 1,
//   });
// });
 
// app.listen(PORT,()=>{console.log("V")})

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

mongoose.connect(String(MONGODB_URI))
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.render("index", { sum: 100 });
});

app.get("/db-status", (req, res) => {
  res.json({
    ok: true,
    readyState: mongoose.connection.readyState,
    connected: mongoose.connection.readyState === 1,
  });
});

app.get("/project", (req, res) => {
  res.json({
    ok: true,
    message: "TaskFlow backend is running",
    dbReady: mongoose.connection.readyState === 1,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



