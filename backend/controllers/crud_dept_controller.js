const Dept = require("../models/Department_model");
const asyncHandler = require("express-async-handler");

//@desc add
//@route POST /dept/add
const add = asyncHandler(async (req, resp) => {
  const { name, manager } = req.body;

  //Making sure user typed in all the fields that is required to add new dept
  if (!name || !manager) {
    resp.status(400);
    throw new Error("Please enter the required field data");
  }

  //Making sure that the dept does not exist already
  const deptExist = await Dept.findOne({ name });
  if (deptExist) {
    resp.status(400);
    throw new Error("The departent already exist");
  }

  //Adding the dept to database
  const dept = await Dept.create({
    name,
    manager,
  });

  //If all was succesfull return the data in json format
  if (dept) {
    resp.status(200).send("Department was succesfully added");
  } else {
    resp.status(400);
    throw new Error("Something went wrong with adding new department");
  }
});

//@desc Get department
//@route GET /dept/
const getDept = asyncHandler(async (req, resp) => {
  const allDept = await Dept.find();
  if (allDept) {
    resp.status(200).json(allDept);
  } else {
    resp.status(400);
    throw new Error("Department not found");
  }
});

//@desc Edit department
//@route PUT /dept/:id
const editDept = asyncHandler(async (req, resp) => {
  const { name, manager, status } = req.body;

  if (!name || !manager) {
    resp.status(400);
    throw new Error("Please enter all the fields that was asked for");
  }
  const updateDept = await Dept.updateOne(
    { _id: req.params.id },
    {
      $set: {
        name,
        manager,
        status,
      },
    }
  );
  if (updateDept) {
    resp.status(200).json(updateDept);
  } else {
    resp.status(400);
    throw new Error("Something went wrong with finding your department");
  }
});

//@desc Update status by clicking on button
//@ route PATCH /dept/updatestatus/:id
const updateStatus = asyncHandler(async (req, resp) => {
  const deptStatus = await Dept.updateOne(
    { _id: req.params.id },
    {
      $set: {
        status: req.body.status,
      },
    }
  );
  if (deptStatus) {
    resp.status(200).json(deptStatus);
  } else {
    resp.status(400);
    throw new Error("Could not update status");
  }
});

module.exports = {
  add,
  getDept,
  editDept,
  updateStatus,
};
