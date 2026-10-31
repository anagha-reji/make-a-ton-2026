const Subscription = require("../models/Subscription");
const Plan = require("../models/Plan");

// CREATE SUBSCRIPTION
const createSubscription = async (req, res) => {
  try {
    const { planId } = req.body;

    if (!planId) {
      return res.status(400).json({
        message: "Please select a plan",
      });
    }

    const plan = await Plan.findById(planId);

    if (!plan || !plan.isActive) {
      return res.status(404).json({
        message: "Plan not found or inactive",
      });
    }

    const startDate = new Date();
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + plan.duration);

    const subscription = await Subscription.create({
      customer: req.user.id,
      plan: plan._id,
      startDate,
      endDate,
    });

    res.status(201).json({
      message: "Subscription created successfully",
      subscription,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET CUSTOMER'S SUBSCRIPTIONS
const getMySubscriptions = async (req, res) => {
  try {
    const subscriptions = await Subscription.find({
      customer: req.user.id,
    })
      .populate("plan")
      .sort({ createdAt: -1 });

    res.status(200).json({
      count: subscriptions.length,
      subscriptions,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL SUBSCRIPTIONS (ADMIN / STAFF)
const getAllSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Subscription.find()
      .populate("customer", "name email")
      .populate("plan")
      .sort({ createdAt: -1 });

    res.status(200).json({
      count: subscriptions.length,
      subscriptions,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createSubscription,
  getMySubscriptions,
  getAllSubscriptions,
};