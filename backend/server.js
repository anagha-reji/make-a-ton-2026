
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

// Database connection
const connectDB = require("./config/db");

// Middleware
const { protect } = require("./middleware/authMiddleware");
const { authorize } = require("./middleware/roleMiddleware");

// Routes
const authRoutes = require("./routes/authRoutes");
const staffRoutes = require("./routes/staffRoutes");
const customerRoutes = require("./routes/customerRoutes");
const productRoutes = require("./routes/productRoutes");
const planRoutes = require("./routes/planRoutes");
const subscriptionRoutes = require("./routes/subscriptionRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

// Initialize Express
const app = express();

// Global Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Subscription Management System API is running!");
});

// Authentication Routes
app.use("/api/auth", authRoutes);

// Admin Test Route
app.get(
  "/api/admin-test",
  protect,
  authorize("admin"),
  (req, res) => {
    res.json({
      message: "Welcome Admin!",
    });
  }
);

// Protected Test Route
app.get("/api/protected", protect, (req, res) => {
  res.json({
    message: "You accessed a protected route!",
    user: req.user,
  });
});

// Staff Management
app.use("/api/staff", staffRoutes);

// Customer Management
app.use("/api/customers", customerRoutes);

// Product Management
app.use("/api/products", productRoutes);

// Plan Management
app.use("/api/plans", planRoutes);

// Subscription Management
app.use("/api/subscriptions", subscriptionRoutes);

// Dashboard Statistics
app.use("/api/dashboard", dashboardRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
