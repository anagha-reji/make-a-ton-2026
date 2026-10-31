
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

// Global middleware
app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Subscription Management System API is running!");
});

// Authentication routes
app.use("/api/auth", authRoutes);

// Admin test route
app.get("/api/admin-test", protect, authorize("admin"), (req, res) => {
  res.json({ message: "Welcome Admin!" });
});

// Protected test route
app.get("/api/protected", protect, (req, res) => {
  res.json({
    message: "You accessed a protected route!",
    user: req.user,
  });
});

// Application routes
app.use("/api/staff", staffRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/products", productRoutes);
app.use("/api/plans", planRoutes);
app.use("/api/subscriptions", subscriptionRoutes);
app.use("/api/dashboard", dashboardRoutes);

// Start server
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
