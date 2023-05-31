const express = require("express");
const router = express.Router();

//Controllers
const { loginuser, signupuser } = require("../Controllers/userController");

//SignUp Route
router.post("/signup", signupuser);

//LoginRoute
router.post("/login", loginuser);

module.exports = router;
