const asyncHandler = require('express-async-handler');
const Project = require('../models/projectModel');

const getProjects = asyncHandler(async (req, res) => {
	
	const projects = await Project.find().populate('userId', '-password');
	res.status(200).json(projects);
});

const getProject = asyncHandler(async (req, res) => {
	const project = await Project.findOne({ projectid: req.params.projectid })
		.populate('userId', '-password');

	if (!project) {
		res.status(404);
		throw new Error('Project not found');
	}

	res.status(200).json(project);
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
	userid: user.userid
  });

  res.status(201).json(project);
});


const putProject = asyncHandler(async (req, res) => {
	const updates = {};
	const allowedFields = ['title', 'context', 'userId'];

	for (const field of allowedFields) {
		if (req.body[field] !== undefined) {
			updates[field] = req.body[field];
		}
	}

	if (Object.keys(updates).length === 0) {
		res.status(400);
		throw new Error('Provide title, context, or userId to update');
	}

	const project = await Project.findOneAndUpdate(
		{ projectid: req.params.projectid },
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
	const project = await Project.findOneAndDelete({ projectid: req.params.projectid });

	if (!project) {
		res.status(404);
		throw new Error('Project not found');
	}

	res.status(200).json({ message: 'Project deleted successfully' });
});

module.exports = {
	getProjects,
	getProject,
	createProject,
	putProject,
	deleteProject
};
