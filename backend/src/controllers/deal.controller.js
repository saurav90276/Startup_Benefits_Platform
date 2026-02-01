const Deal = require("../models/Deal");

exports.getDeals = async (req, res) => {
  const { category, locked, q } = req.query;

  let filter = {};

  if (category) filter.category = category;
  if (locked !== undefined) filter.isLocked = locked === "true";
  if (q) filter.title = { $regex: q, $options: "i" };

  const deals = await Deal.find(filter);
  res.json(deals);
};

exports.getDealById = async (req, res) => {
  const deal = await Deal.findById(req.params.id);
  if (!deal) {
    return res.status(404).json({ message: "Deal not found" });
  }
  res.json(deal);
};
