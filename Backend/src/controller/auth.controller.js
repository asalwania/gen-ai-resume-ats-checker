const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const blacklistTokenModel = require("../models/blacklist.model");

/**
 * @name registerUserController
 * @description Register a new user
 * @access Public
 */
const registerUserController = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ error: "Please provide username, email and password" });
    }

    const userExists = await userModel.findOne({
      $or: [{ username }, { email }],
    });
    if (userExists) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await userModel.create({ username, email, password: hash });

    const token = jwt.sign(
      { id: user._id, username },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1d",
      },
    );

    res.cookie("token", token);

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Failed to register user" });
  }
};

/**
 * @name loginUserController
 * @description Login a user with email and password
 * @access Public
 */
const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Please provide username and password" });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1d",
      },
    );

    res.cookie("token", token);

    res.status(200).json({
      message: "User logged in successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ error: "Failed to login user" });
  }
};

/**
 * @name logoutUserController
 * @description Logout a user and clear token from user cookie and add the token to blacklist
 * @access Public
 */
const logoutUserController = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (token) {
      await blacklistTokenModel.create({ token });
      res.clearCookie("token");
      return res.status(200).json({ message: "User logged out successfully" });
    }
    return res.status(401).json({ error: "No token found" });
  } catch (error) {
    console.error("Error logging out user:", error);
    res.status(500).json({ error: "Failed to logout user" });
  }
};

const getMeController = async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({
      message: "User found successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error getting current user:", error);
    res.status(500).json({ error: "Failed to get current user" });
  }
};

module.exports = {
  registerUserController,
  loginUserController,
  logoutUserController,
  getMeController,
};
