const express=require("express");
const { register, login, updateUser } = require("../controllers/userController");
const { isAuthenticated } = require("../middleware/auth");
const router=express.Router();
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/update/:id").post(isAuthenticated,updateUser);
module.exports=router;