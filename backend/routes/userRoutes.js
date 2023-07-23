const express = require("express");
const router = express.Router();

//Controllers
const {
  loginuser,
  signupuser,
  findPatients,
} = require("../Controllers/userController");

//SignUp Route
router.post("/signup", signupuser);

//LoginRoute
router.post("/login", loginuser);

// Get Patients
router.get("/patients", findPatients);

module.exports = router;
