const express = require("express");
const dotenv =require("dotenv").config();
const erroHandler =require("./middleware/erroHandler")



const app = express();
const PORT = process.env.PORT || 8000 ; //PORT of my backend 
app.use(express.json());


app.use("/user",require("./routes/userRoute"))
app.use("/task", require("./routes/taskRoute"))
app.use(erroHandler);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



