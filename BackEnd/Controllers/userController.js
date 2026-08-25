const asyncHandler = require("express-async-handler");
const User = require("../models/userModel")





const getUsers = asyncHandler(async (req, res) => {

  const Users = await User.find()
  res.status(200).json({ message: `Get users ` ,Users});
});

const getUser = asyncHandler(async (req, res) => {
  const user = await User.findOne({ userid: req.params.userid }).select("-password");

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  res.status(200).json(user);
});

// const postUser = asyncHandler(async (req, res) => {
//   const { username,  password, role} = req.body;
//   if (!username || !password ||!role) {
//     res.status(400);
//     throw new Error("Missing body");
//   }
//   const user = await User.create({ username, password, role });

//   res.status(201).json(user);
// });
const postUser = asyncHandler(async (req, res) => {
  const { username, password, role } = req.body;
  if (!username || !password || !role) {
    res.status(400);
    throw new Error("Missing body");
  }

  // Create the user
  const user = await User.create({ username, password, role });

  // Mirror _id into userid
  user.userid = user._id;
  await user.save();

  res.status(201).json(user);
});


const putUser = asyncHandler(async (req, res) => {
  const updates = {};
  const allowedFields = ["username", "description"];

  for (const field of allowedFields) {
    if (req.body[field] !== undefined) {
      updates[field] = req.body[field];
    }
  }

  if (Object.keys(updates).length === 0) {
    res.status(400);
    throw new Error("Provide username or description to update");
  }

  const user = await User.findOneAndUpdate(
    { userid: req.params.userid },
    updates,
    { new: true, runValidators: true }
  ).select("-password");

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  res.status(200).json(user);
});

const deleteUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete user ${req.params.id}` });
});

module.exports = { getUsers, getUser, postUser, putUser, deleteUser };
