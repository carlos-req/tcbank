const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
//route POST /api/users
//access Public
const registerUser = asyncHandler(async (req, res) => {
  res.json({
    message: "Register User",
  });
});

//route POST /api/users/login
//access Public
const loginUser = asyncHandler(async (req, res) => {
  res.json({
    message: "Login User",
  });
});

//route GET /api/users/me
//access Public
const getMe = asyncHandler(async (req, res) => {
  res.json({
    message: "User data retrieved",
  });
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
