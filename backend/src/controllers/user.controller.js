const { users: User } = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

// @desc POST
// @route /api/v1/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  try {
    const { email, name, user_password, role } = req.body;

    // Check if user exists.
    const userExists = User.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).send({
        message: "User already exists",
      });
    }

    // Hashing user password.
    const salt = bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hash(user_password, salt);

    const user = {
      email,
      name,
      user_password: hashedPassword,
      role,
    };

    User.create(user)
      .then((data) => {
        return res.status(201).send({
          id: data.id,
          email: data.email,
          name: data.name,
          role: data.role,
          token: generateToken(data.id),
        });
      })
      .catch((err) => {
        return res.status(500).send({
          message: err.message,
        });
      });
  } catch (err) {
    return res.status(500).send({
      error: "Invalid Params",
    });
  }
});

const loginUser = asyncHandler(async (req, res) => {
  // store request params.
  const { email, user_password } = req.body;

  if (!email || !user_password) {
    return res.status(400).send({
      message: "All fields are required!",
    });
  }

  const user = await User.findOne({ where: { email } });

  if (user && bcrypt.compare(user_password, user.user_password)) {
    const userData = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: user.token,
    };

    return res.send(userData);
  } else {
    return res.status(400).send({
      message: "Invalid credentials",
    });
  }
});

const generateToken = (id) => {
  return jwt.sign(id, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

module.exports = {
  registerUser,
  loginUser,
};
