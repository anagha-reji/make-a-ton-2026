
const express = require("express");
const router = express.Router();

const {
  createPlan,
  getAllPlans,
  updatePlan,
  deletePlan,
} = require("../controllers/planController");

const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

// CREATE PLAN
router.post("/", protect, authorize("admin"), createPlan);

// GET ALL PLANS
router.get("/", protect, authorize("admin", "staff"), getAllPlans);

// UPDATE PLAN
router.put("/:id", protect, authorize("admin"), updatePlan);

// DELETE PLAN
router.delete("/:id", protect, authorize("admin"), deletePlan);

module.exports = router;
