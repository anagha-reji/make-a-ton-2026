
const express = require("express");
const router = express.Router();

const {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

// CREATE PRODUCT
router.post("/", protect, authorize("admin"), createProduct);

// GET ALL PRODUCTS
router.get("/", protect, authorize("admin", "staff"), getAllProducts);

// UPDATE PRODUCT
router.put("/:id", protect, authorize("admin"), updateProduct);

// DELETE PRODUCT
router.delete("/:id", protect, authorize("admin"), deleteProduct);

module.exports = router;
