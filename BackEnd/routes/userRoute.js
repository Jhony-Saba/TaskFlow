const express =require("express");
const router =express.Router();
const user =require("../Controllers/userController")





router.route("/current").get(user.CurrentUser)
router.route("/register").post(user.Register)
router.route("/Login").post(user.Login)



 
module.exports =router
