const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const blacklistTokenModel = require("../models/blacklist.model");

const authUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Token not provided" });
    }

    const isBlacklisted = await blacklistTokenModel.findOne({ token });
    if (isBlacklisted) {
      return res.status(401).json({ message: "Token is invalid" });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decodedToken) {
      return res.status(401).json({ message: "Token is invalid" });
    }

    const user = await userModel.findById(decodedToken.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Error in auth middleware:", error);
    res.status(500).json({ error: "Failed to authenticate user" });
  }
};

module.exports = { authUser };
