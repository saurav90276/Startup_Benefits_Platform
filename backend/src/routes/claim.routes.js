const express = require("express");
const protect = require("../middleware/auth.middleware");
const {
  claimDeal,
  getMyClaims,
} = require("../controllers/claim.controller");

const router = express.Router();

router.post("/:dealId", protect, claimDeal);
router.get("/me", protect, getMyClaims);

module.exports = router;
