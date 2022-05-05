const Staff = require("../models/Staff_model");
const asyncHandler = require("express-async-handler");

//All the admin routes
//@desc  Admin Edit staff
//@route PUT /staff/edit/:id
const editStaffA = asyncHandler(async (req, resp) => {
  const {
    firstname,
    lastname,
    telephoneNumber,
    email,
    employeeManager,
    status,
  } = req.body;

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

  const updateStaff = await Staff.updateOne(
    { _id: req.params.id },
    {
      $set: {
        firstname,
        lastname,
        telephoneNumber,
        email,
        employeeManager,
        status,
      },
    }
  );
  if (updateStaff) {
    resp.status(200).json(updateStaff);
  } else {
    resp.status(400);
    throw new Error("Could not change the edited staff member");
  }
});

//@desc Admin Get staff details
//@route GET /staff/getStaffA
const getStaffA = asyncHandler(async (req, resp) => {
  const staff = await Staff.find();
  if (staff) {
    resp.status(200).json(staff);
  } else {
    resp.status(400);
    throw new Error("Could not get all the users for you");
  }
});

//@desc Getting all the managers
//@route GET /staff/role=manager
const getManagers = asyncHandler(async (req, resp) => {
  const getManagers = await Staff.find({ role: "manager" });
  if (getManagers) {
    resp.status(200).json(getManagers);
  } else {
    resp.status(400);
    throw new Error("Could not get managers");
  }
});

//@desc Changing the status of a user
//@route PATCH /staff/updateStatus/:id
const updateStatus = asyncHandler(async (req, resp) => {
  const staffStatus = await Staff.updateOne(
    { _id: req.params.id },
    {
      $set: {
        status: req.body.status,
      },
    }
  );
  if (staffStatus) {
    resp.status(200).json(staffStatus);
  } else {
    resp.status(400);
    throw new Error("Could not update status");
  }
});

//All the staff and manager routes
//@desc Manager or Employee edit their details
//@route PUT /staff/editME/:id
const editStaffME = asyncHandler(async (req, resp) => {
  const { firstname, lastname, email, telephoneNumber } = req.body;

  if (!firstname || !lastname || !email || !telephoneNumber) {
    resp.status(401);
    throw new Error(
      "Please make sure you entered all the fields that is required"
    );
  }

  const staff = await Staff.updateOne(
    { _id: req.params.id },
    {
      $set: {
        firstname,
        lastname,
        telephoneNumber,
        email,
      },
    }
  );
  if (staff) {
    resp.status(200).json(staff);
  } else {
    resp.status(400);
    throw new Error("Could not update this user you are trying to update");
  }
});

//@desc Employe getting their details
//@route GET /staff/:id
const getStaffE = asyncHandler(async (req, resp) => {
  const staff = await Staff.find({ _id: req.body.id });
  if (staff) {
    resp.status(200).json(staff);
  } else {
    resp.status(400);
    throw new Error("Could not find this user");
  }
});

//@desc Manager Get staff details
//@route GET /staff/getStaffM/:employeeManager
//@access protected
const getStaffM = asyncHandler(async (req, resp) => {
  const staff = await Staff.find({ employeeManager: req.body.manager });
  if (staff) {
    resp.status(200).json(staff);
  } else {
    resp.status(400);
    throw new Error("Could not find this manager");
  }
});

module.exports = {
  editStaffA,
  getStaffA,
  getStaffM,
  getStaffE,
  updateStatus,
  editStaffME,
  getManagers,
};
