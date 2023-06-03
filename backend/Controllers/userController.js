const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

//Create Token
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1h" });
};

//Login User
const loginuser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(res);
  }
};

//Signup User
const signupuser = async (req, res) => {
  const { name, email, phone, password } = req.body;
  try {
    const user = await User.signup(name, email, phone, password);
    const token = createToken(user._id);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(res);
  }
};

module.exports = { loginuser, signupuser };
