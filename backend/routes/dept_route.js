const express = require("express");
const {
  add,
  getDept,
  editDept,
  updateStatus,
} = require("../controllers/crud_dept_controller");
const router = express.Router();

router.get("/", getDept);
router.post("/add", add);
router.patch("/:id", editDept);
router.patch("/updateStatus/:id", updateStatus);

module.exports = router;
