const express =require("express");
const router =express.Router();
const user =require("../Controllers/userController")





router.route("/").get(user.getUsers).post(user.postUser)
router.route("/:id").get(user.getUser).put(user.putUser).delete(user.deleteUser)



 
module.exports =router
