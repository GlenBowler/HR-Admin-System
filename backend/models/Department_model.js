const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema for all my models
const deptSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter the name of the department"],
    unique: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  manager: {
    type: String,
    required: [true, "Please provide a manager for this department"],
  },
});

const Dept = mongoose.model("dept", deptSchema);
module.exports = Dept;
