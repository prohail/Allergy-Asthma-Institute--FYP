const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

//Static Login Method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Invalid email");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Invalid Password");
  }

  return user;
};

//Static Signup Method
userSchema.statics.signup = async function (name, email, phone, password) {
  //Validation
  if (!name || !email || !phone || !password) {
    throw Error("All Fields Must be Filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not Valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Please use a strong Password");
  }

  const exists = await this.findOne({ email, phone });
  if (exists) {
    throw Error("Email or Phone Number Already in Use");
  }

  const salt = await bcrypt.genSalt(3);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ name, email, phone, password: hash });
  return user;
};

module.exports = mongoose.model("User", userSchema);
