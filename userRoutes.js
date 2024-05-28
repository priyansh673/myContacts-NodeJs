const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getInfo,
} = require("./controllers/userControllers");

const validateToken = require("./middleware/validateToken");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current", validateToken, getInfo);

module.exports = router;
