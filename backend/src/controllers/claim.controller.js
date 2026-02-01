const Claim = require("../models/Claim");
const Deal = require("../models/Deal");

exports.claimDeal = async (req, res) => {
  const deal = await Deal.findById(req.params.dealId);
  if (!deal) {
    return res.status(404).json({ message: "Deal not found" });
  }

  if (deal.isLocked && !req.user.isVerified) {
    return res.status(403).json({
      message: "Verification required to claim this deal",
    });
  }

  const claim = await Claim.create({
    userId: req.user._id,
    dealId: deal._id,
  });

  res.status(201).json(claim);
};

exports.getMyClaims = async (req, res) => {
  const claims = await Claim.find({ userId: req.user._id })
    .populate("dealId", "title category");

  
  const validClaims = claims.filter(c => c.dealId);

  res.json(validClaims);
};

