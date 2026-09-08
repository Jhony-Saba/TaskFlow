const express = require('express');
const router = express.Router();
const task = require('../Controllers/taskController');
const { validateToken } = require('../middleware/validateTokenHandler');

router.use(validateToken);
router.route('/').post(task.postTask);
router.route('/:id').get(task.getTask).put(task.putTask).patch(task.putTask).delete(task.deleteTask);
router.route('/percentage/:id').get(task.getPercentageOfTasks);

module.exports = router;