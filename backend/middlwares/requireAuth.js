const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const requireAuth = async (req, res, next) => {
  //Verify Authentication
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Auth token required" });
  }
  const token = authorization.split(" ")[1];
  try {
    const { _id } = jwt.verify(token, process.env.SECRET);
    req.user = await User.findOne({ _id });
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request not Authorized" });
  }
};

module.exports = requireAuth;
