const express = require("express");
const { login, add } = require("../controllers/auth_controller");
const {
  editStaffA,
  getStaffA,
  getStaffM,
  getStaffE,
  updateStatus,
  editStaffME,
  getManagers,
} = require("../controllers/crud_staff_controller");
const router = express.Router();

router.post("/", login);
router.post("/add", add);
router.post("/getStaffM", getStaffM);
router.post("/getStaffE", getStaffE);
router.patch("/edit/:id", editStaffA);
router.patch("/updateStatus/:id", updateStatus);
router.patch("/editMe/:id", editStaffME);
router.get("/getManagers", getManagers);
router.get("/getStaffA", getStaffA);

module.exports = router;
