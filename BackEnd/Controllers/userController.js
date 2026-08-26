const asyncHandler = require("express-async-handler");
const bcrypt = require("../node_modules/bcrypt");
const jwt =require('../node_modules/jsonwebtoken');
const User = require("../models/userModel");


const CurrentUser = asyncHandler(async (req, res) => {
  const user = await User.findOne({ userid: req.params.userid }).select("-password");

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  res.status(200).json(user);
});


const Register = asyncHandler(async (req, res) => {
  const { username, password,email, role } = req.body;
  if (!username || !password  ||!email || !role) {
    res.status(400);
    throw new Error("Missing body");
  }



  // Check if a user with the same username OR email exists
const userAvailable = await User.findOne({email});
if(userAvailable ){
res.status(401);
throw new Error ("User already registered !");

}
// hashing password
const HashPassword=await bcrypt.hash(password,10);
  // Create the user
  const createUser = await User.create({ username, password:HashPassword ,email , role });

  

  res.status(201).json(createUser);
});


const Login = asyncHandler(async (req, res) => {
  const {email,password}=req.body;
   if (!email || !password ) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
const user=await User.findOne({email});


if(user){

  const correctPassword = await bcrypt.compare(password,user.password);
  
  if(correctPassword){
Tokenaccess= await jwt.sign({user : {
  username:user.username,
  password:user.password,
  email :user.email,}},
  process.env.ASSECC_TOKEN_SECRET,
  {expiresIn :"1min"}
);
res.status(200).json({Tokenaccess})


  }else{res.status(400)
        throw new Error("Incorrect  password");     
  }
}else{res.send(400);
  throw new Error ("User not found")
}

});

module.exports = { CurrentUser, Register, Login};
