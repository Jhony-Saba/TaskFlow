const express = require('express');
const project = require('../Controllers/projectController');
const validation =require('../middleware/validateTokenHandler')
const router = express.Router();

router.route('/').get(project.getProjects,validation).post(project.postProject);
router.route('/:projectid')
  .get(project.getProject)
  .put(project.putProject)
  .delete(project.deleteProject);

module.exports = router;
