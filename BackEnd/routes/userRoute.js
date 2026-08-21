const express =require("express");
const router =express.Router();





router.route("/").get((req, res) => {


 res.send("get users ")
})

router.route("/").post((req, res) => {


 res.send("Create user")
})

router.route("/").put((req, res) => {


 res.send("Put user")
})
router.route("/").patch((req, res) => {


 res.send("patch user")
})
router.route("/").delete((req, res) => {


 res.send("Delete user")
})


module.exports =router