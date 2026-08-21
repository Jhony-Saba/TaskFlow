const express =require("express");
const router =express.Router();





router.route("/").get((req, res) => {


res.status(200).json({ message: `Get users` })
})

router.route("/").post((req, res) => {


 res.status(200).json({ message: `Add user` })
})

router.route("/:id").put((req, res) => {

     
 res.status(200).json({ message: `update user ${req.params.id}` })
})

router.route("/:id").delete((req, res) => {


res.status(200).json({ message: `delete user ${req.params.id}` })
})

 
module.exports =router
