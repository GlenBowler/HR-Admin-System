const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema for my staff
const staffSchema = new Schema({
  firstname: {
    type: String,
    required: [true, "Please enter your first name"],
  },
  lastname: {
    type: String,
    required: [true, "Please enter your last name"],
  },
  telephoneNumber: {
    type: String,
    required: [true, "Please enter your telephone number"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email adress"],
    unique: true,
  },
  employeeManager: {
    type: String,
  },
  status: {
    type: Boolean,
    default: true,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    enum: ["admin", "manager", "employee"],
    default: "employee",
  },
});

const Staff = mongoose.model("staff", staffSchema);

module.exports = Staff;
