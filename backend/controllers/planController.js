
const Plan = require("../models/Plan");
const Product = require("../models/Product");

// CREATE SUBSCRIPTION PLAN
const createPlan = async (req, res) => {
  try {
    const { name, description, price, duration, product } = req.body;

    if (!name || !description || price === undefined || !duration || !product) {
      return res.status(400).json({
        message: "Please fill all required fields",
      });
    }

    if (
      !Number.isFinite(Number(price)) ||
      Number(price) < 0 ||
      !Number.isInteger(Number(duration)) ||
      Number(duration) <= 0
    ) {
      return res.status(400).json({
        message: "Enter a valid price and duration",
      });
    }

    const existingProduct = await Product.findById(product);

    if (!existingProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    const plan = await Plan.create({
      name,
      description,
      price: Number(price),
      duration: Number(duration),
      product,
    });

    res.status(201).json({
      message: "Plan created successfully",
      plan,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL PLANS
const getAllPlans = async (req, res) => {
  try {
    const plans = await Plan.find()
      .populate("product", "name")
      .sort({ createdAt: -1 });

    res.status(200).json({
      message: "Plans retrieved successfully",
      count: plans.length,
      plans,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE PLAN
const updatePlan = async (req, res) => {
  try {
    const { name, description, price, duration, product } = req.body;

    const updates = {};

    if (name !== undefined) updates.name = name;
    if (description !== undefined) updates.description = description;

    if (price !== undefined) {
      if (price === "" || !Number.isFinite(Number(price)) || Number(price) < 0) {
        return res.status(400).json({
          message: "Price must be a valid non-negative number",
        });
      }
      updates.price = Number(price);
    }

    if (duration !== undefined) {
      if (!Number.isInteger(Number(duration)) || Number(duration) <= 0) {
        return res.status(400).json({
          message: "Duration must be a positive whole number",
        });
      }
      updates.duration = Number(duration);
    }

    if (product !== undefined) {
      const existingProduct = await Product.findById(product);

      if (!existingProduct) {
        return res.status(404).json({
          message: "Product not found",
        });
      }

      updates.product = product;
    }

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({
        message: "Please provide at least one field to update",
      });
    }

    const plan = await Plan.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true, runValidators: true }
    ).populate("product", "name");

    if (!plan) {
      return res.status(404).json({
        message: "Plan not found",
      });
    }

    res.status(200).json({
      message: "Plan updated successfully",
      plan,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE PLAN
const deletePlan = async (req, res) => {
  try {
    const plan = await Plan.findById(req.params.id);

    if (!plan) {
      return res.status(404).json({
        message: "Plan not found",
      });
    }

    const Subscription = require("../models/Subscription");
    const existingSubscription = await Subscription.findOne({
      plan: plan._id,
    });

    if (existingSubscription) {
      return res.status(400).json({
        message: "Cannot delete a plan that has subscriptions",
      });
    }

    await plan.deleteOne();

    res.status(200).json({
      message: "Plan deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPlan,
  getAllPlans,
  updatePlan,
  deletePlan,
};
