const express =require("express");
const router =express.Router();
const task =require("../Controllers/taskController")


router.route("/").get(task.getTasks).post(task.postTask)
router.route("/:id").get(task.getTask).put(task.putTask).delete(task.deleteTask)



module.exports =router