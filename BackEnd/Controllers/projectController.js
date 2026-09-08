const asyncHandler = require('express-async-handler');
const Project = require('../models/projectModel');
const Task =require('../models/taskModel')




const getProjects = asyncHandler(async (req, res) => {

const { user } = req.user;

	const projects = await Project.find({userId:user.userid})
	res.status(200).json(projects);
});



const createProject = asyncHandler(async (req, res) => {
  const { title, context } = req.body;

  if (!title) {
    res.status(400);
    throw new Error('Title is required');
  }

	const { user } = req.user;

  const project = await Project.create({
    title,
    context,
	userId: user.userid
  });

  res.status(201).json(project);
});


const putProject = asyncHandler(async (req, res) => {
	const updates = {};
	const allowedFields = ['title', 'context'];
	const { user } = req.user;

	for (const field of allowedFields) {
		if (req.body[field] !== undefined) {
			updates[field] = req.body[field];
		}
	}

	if (Object.keys(updates).length === 0) {
		res.status(400);
		throw new Error('Provide title or context to update');
	}

	const project = await Project.findOneAndUpdate(
		{ _id: req.params.id, userId: user.userid },
		updates,
		{ new: true, runValidators: true }
	).populate('userId', '-password');

	if (!project) {
		res.status(404);
		throw new Error('Project not found');
	}

	res.status(200).json(project);
});

const deleteProject = asyncHandler(async (req, res) => {
	const {user}=req.user;
	const projectId = req.params.id;
	const project = await Project.findById(projectId).deleteOne({ userId: user.userid });
	const task =await Task.find({projectId:projectId}).deleteMany({projectId:projectId});
	if (!project) {
		res.status(404);
		throw new Error('Project not found');
	}
	if(!task){
		res.status(404);
		throw new Error('Tasks not found it');
	}

	res.status(200).json({ message: 'Project deleted successfully' });
});

module.exports = {
	getProjects,
	createProject,
	putProject,
	deleteProject
};
