//route POST /api/users
//access Public
const registerUser = (req, res) => {
  res.json({
    message: "Register User",
  });
};

//route POST /api/users/login
//access Public
const loginUser = (req, res) => {
  res.json({
    message: "Login User",
  });
};

//route GET /api/users/me
//access Public
const getMe = (req, res) => {
  res.json({
    message: "User data retrieved",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
