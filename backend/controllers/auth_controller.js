const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Staff = require("../models/Staff_model");

//@desc Login
//@route POST /staff/login
const login = asyncHandler(async (req, resp) => {
  const { email, password } = req.body;

  //Finding the staff memeber from our staff model
  const user = await Staff.findOne({ email });
  const passwordStatus = await bcrypt.compare(password, user.password);
  if (user && passwordStatus === true) {
    resp.json({
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.emailAdress,
      password: user.password,
      status: user.status,
      role: user.role,
      token: generateToken(user._id),
    });
    resp.status(200);
    console.log("User has been logged in");
  } else {
    resp.status(400);
    throw new Error("Invalid credentials");
  }
});

//@desc Add
//@route POST /staff/add
const add = asyncHandler(async (req, resp) => {
  const { firstname, lastname, telephoneNumber, email, employeeManager } =
    req.body;
  const password = "Password123#";

  //Check that the user enterd all the data that is required
  if (
    !firstname ||
    !lastname ||
    !telephoneNumber ||
    !email ||
    !employeeManager
  ) {
    resp.status(400);
    throw new Error("Please enter all the required field");
  }

  //Check that the staff model to make sure that the user does not exist already inside our database
  const userExist = await Staff.findOne({ email });
  if (userExist) {
    resp.status(400);
    throw new Error("User already exist");
  }

  //Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Create the new user
  const user = Staff.create({
    firstname,
    lastname,
    email,
    telephoneNumber,
    employeeManager,
    password: hashedPassword,
  });

  if (user) {
    resp.status(200).send({
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.emailAdress,
      employeeManager: user.employeeManager,
      role: user.role,
      status: user.status,
      token: generateToken(user._id),
    });
  } else {
    resp.status(400);
    throw new Error("Invalid user data");
  }
});

//Generate token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });
};

module.exports = {
  login,
  add,
};
