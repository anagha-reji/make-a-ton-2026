const express = require("express");
const router = express.Router();

const {
  getAllCustomers,
  updateCustomerStatus,
} = require("../controllers/customerController");

const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

// Only Admin can view all customers
router.get("/", protect, authorize("admin"), getAllCustomers);

// Only Admin can activate/deactivate a customer
router.patch("/:id/status", protect, authorize("admin"), updateCustomerStatus);

module.exports = router;