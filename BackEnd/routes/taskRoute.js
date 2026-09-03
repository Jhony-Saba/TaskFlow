const express = require('express');
const router = express.Router();
const task = require('../Controllers/taskController');
const { validateToken } = require('../middleware/validateTokenHandler');

router.use(validateToken);
router.route('/').get(task.getTasks).post(task.postTask);
router.route('/:id').get(task.getTask).patch(task.putTask).delete(task.deleteTask);

module.exports = router;