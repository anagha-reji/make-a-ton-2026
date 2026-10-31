const User = require("../models/User");
const Product = require("../models/Product");
const Plan = require("../models/Plan");
const Subscription = require("../models/Subscription");

const getDashboardStats = async (req, res) => {
  try {
    const [
      totalCustomers,
      totalStaff,
      totalProducts,
      totalPlans,
      activeSubscriptions,
      expiredSubscriptions,
      cancelledSubscriptions,
    ] = await Promise.all([
      User.countDocuments({ role: "customer" }),
      User.countDocuments({ role: "staff" }),
      Product.countDocuments(),
      Plan.countDocuments(),
      Subscription.countDocuments({ status: "active" }),
      Subscription.countDocuments({ status: "expired" }),
      Subscription.countDocuments({ status: "cancelled" }),
    ]);

    res.status(200).json({
      message: "Dashboard statistics retrieved successfully",
      stats: {
        totalCustomers,
        totalStaff,
        totalProducts,
        totalPlans,
        activeSubscriptions,
        expiredSubscriptions,
        cancelledSubscriptions,
        totalSubscriptions:
          activeSubscriptions + expiredSubscriptions + cancelledSubscriptions,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getDashboardStats };