const asyncHandler = require("express-async-handler");
const task =require("../models/taskModel")







const getTasks = asyncHandler(async (req, res) => {
  const tasks = await task.find();
  res.status(200).json({ message: `Get tasks ${tasks}` });
});

const getTask = asyncHandler(async (req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: `Get taskid ${id}` });
});

const postTask = asyncHandler(async (req, res) => {
   const{tittle ,projectId ,context ,status} = req.body;
  
   if (   !tittle || !projectId || !context || !status) {
    res.status(400);
    throw new Error("Missing body");
  }
  const createTask =await task.create({tittle,projectId,context,status})
  res.status(200).json(createTask);
});

const putTask = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update task ${req.params.id}` });
});

const deleteTask = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete task ${req.params.id}` });
});

module.exports = { getTasks, getTask, postTask, putTask, deleteTask };