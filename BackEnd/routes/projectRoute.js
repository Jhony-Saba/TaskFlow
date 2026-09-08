const express = require('express');
const project = require('../Controllers/projectController');
const {validateToken} =require('../middleware/validateTokenHandler')
const router = express.Router();

router.use(validateToken)
router.route('/')
                  .get( project.getProjects)
                  .post(project.createProject);
router.route('/:id').put(project.putProject).delete(project.deleteProject);

module.exports = router;
