
const express = require("express");
const router = express.Router();

const { createStaff, getAllStaff } = require("../controllers/staffController");
const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

// Create staff account
router.post("/", protect, authorize("admin"), createStaff);

// View all staff
router.get("/", protect, authorize("admin"), getAllStaff);

module.exports = router;
