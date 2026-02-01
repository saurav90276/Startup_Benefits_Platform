const express = require("express");
const {
  getDeals,
  getDealById,
} = require("../controllers/deal.controller");

const router = express.Router();

/**
 * @route   GET /api/deals
 * @desc    Get all deals (with filters & search)
 * @access  Public
 */
router.get("/", getDeals);

/**
 * @route   GET /api/deals/:id
 * @desc    Get single deal by ID
 * @access  Public
 */
router.get("/:id", getDealById);

module.exports = router;
