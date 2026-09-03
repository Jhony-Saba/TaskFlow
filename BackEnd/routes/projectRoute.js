const express = require('express');
const project = require('../Controllers/projectController');
const {validateToken} =require('../middleware/validateTokenHandler')
const router = express.Router();

router.use(validateToken)
router.route('/')
                  .get( project.getProjects)
                  .post(project.createProject)
                  .put( project.putProject)
 router.route('/:id').delete(project.deleteProject);

module.exports = router;
