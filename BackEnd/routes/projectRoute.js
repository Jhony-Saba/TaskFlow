const express = require('express');
const project = require('../Controllers/projectController');
const {validateToken} =require('../middleware/validateTokenHandler')
const router = express.Router();

router.route('/').get(validateToken, project.getProjects).post(validateToken,project.createProject);
router.route('/')
  .put(project.putProject)
  .delete(validateToken,project.deleteProject);

module.exports = router;
