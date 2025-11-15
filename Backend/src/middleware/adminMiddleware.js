const User = require("../models/user");
const jwt = require("jsonwebtoken");
const redisClient = require("../Database/redis"); 

const adminMidd = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) throw new Error("Token is missing");

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    if (!payload?._id) throw new Error("Invalid token payload");

    const result = await User.findById(payload._id);
    if (!result) throw new Error("User not found");

    const isBlocked = await redisClient.exists(`token:${token}`);
    if (isBlocked) throw new Error("Invalid Token");

    req.result = result;
    next();
  } catch (err) {
    res.status(401).send({ error: err.message });
  }
};

module.exports = adminMidd;
