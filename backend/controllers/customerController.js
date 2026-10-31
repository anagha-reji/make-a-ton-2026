const User = require("../models/User");

// GET ALL CUSTOMERS
// ACTIVATE / DEACTIVATE CUSTOMER
const updateCustomerStatus = async (req, res) => {
  try {
    const customer = await User.findOne({
      _id: req.params.id,
      role: "customer",
    });

    if (!customer) {
      return res.status(404).json({
        message: "Customer not found",
      });
    }

    customer.isActive = !customer.isActive;
    await customer.save();

    res.status(200).json({
      message: `Customer ${customer.isActive ? "activated" : "deactivated"} successfully`,
      customer: {
        id: customer._id,
        name: customer.name,
        email: customer.email,
        isActive: customer.isActive,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getAllCustomers = async (req, res) => {
  try {
    const customers = await User.find({ role: "customer" })
      .select("-password")
      .sort({ createdAt: -1 });

    res.status(200).json({
      message: "Customers retrieved successfully",
      count: customers.length,
      customers,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { getAllCustomers };
module.exports = { getAllCustomers, updateCustomerStatus };