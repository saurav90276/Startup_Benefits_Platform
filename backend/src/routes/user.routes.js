const express = require("express");
const { verifyUser } = require("../controllers/user.controller");

const router = express.Router();

router.patch("/verify/:userId", verifyUser);

module.exports = router;
