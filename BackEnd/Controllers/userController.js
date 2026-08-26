const asyncHandler = require("express-async-handler");
const bcrypt = require("../node_modules/bcrypt");

const User = require("../models/userModel")


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
  const {username,password}=req.body;
   if (!username || !password  ) {
    res.status(400);
    throw new Error("Missing body");
  }

  res.status(200).json(user);
});

module.exports = { CurrentUser, Register, Login};
