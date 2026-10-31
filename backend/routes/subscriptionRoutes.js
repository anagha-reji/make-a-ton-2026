const express = require("express");
const router = express.Router();

const {
  createSubscription,
  getMySubscriptions,
  getAllSubscriptions,
} = require("../controllers/subscriptionController");

const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

// Customer creates subscription
router.post("/", protect, authorize("customer"), createSubscription);

// Customer views own subscriptions
router.get("/my", protect, authorize("customer"), getMySubscriptions);

// Admin and staff view all subscriptions
router.get("/", protect, authorize("admin", "staff"), getAllSubscriptions);

module.exports = router;