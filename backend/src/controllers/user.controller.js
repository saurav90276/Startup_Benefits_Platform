const User = require("../models/User");

exports.verifyUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { isVerified: true },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "User verified successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: "Verification failed" });
  }
};
