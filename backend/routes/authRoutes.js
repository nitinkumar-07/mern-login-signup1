const express = require("express");
const userModel = require("../models/userModel");
const { signupValidation, loginValidation } = require("../middlewares/authValidation");
const { signup, login } = require("../controllers/authContollers");

const router = express.Router();


router.post("/signup", signupValidation , signup);
router.post("/login", loginValidation , login);


module.exports = router;