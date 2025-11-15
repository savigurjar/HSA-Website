const User = require("../models/user");
const validUser = require("../utils/validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const redisClient = require("../Database/redis");

// =================== SIGNUP ===================
const userSignup = async (req, res) => {
  try {
    await validUser(req.body);
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const newUser = await User.create(req.body);

    const token = jwt.sign(
      {
        _id: newUser._id,
        emailId: newUser.emailId,
        role: newUser.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax"

    });

    res.status(201).send({
      message: "User registered successfully",
      user: {
        _id: newUser._id,
        firstName: newUser.firstName,
        emailId: newUser.emailId,
        role: newUser.role,
      },
    });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

// =================== LOGIN ===================
const userLogin = async (req, res) => {
  try {
    const { emailId, password } = req.body;
    const user = await User.findOne({ emailId });
    if (!user) return res.status(401).send({ error: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).send({ error: "Invalid credentials" });

    const token = jwt.sign(
      {
        _id: user._id,
        emailId: user.emailId,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax"

    });

    res.status(200).send({
      message: "Login successful",
      user: {
        _id: user._id,
        firstName: user.firstName,
        emailId: user.emailId,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

// =================== PROFILE ===================
const getProfile = async (req, res) => {
  try {
    const user = req.result;
    if (!user) return res.status(401).send({ error: "Unauthorized" });

    res.status(200).send({
      message: "Profile fetched successfully",
      profile: {
        _id: user._id,
        firstName: user.firstName,
        emailId: user.emailId,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// =================== DELETE PROFILE ===================
const deleteProfile = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send({ error: "User ID required" });

    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) return res.status(404).send({ error: "User not found" });

    res.status(200).send({
      message: "User deleted successfully",
      user: deletedUser,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// =================== LOGOUT ===================
const logout = async (req, res) => {
  try {
    const { token } = req.cookies;
    if (!token) throw new Error("Token is missing");

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    await redisClient.set(`token:${token}`, "Blocked");
    await redisClient.expireAt(`token:${token}`, payload.exp);

    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax"

    });

    res.status(200).send({ message: "Logged out successfully" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

// =================== ADMIN SIGNUP ===================
const adminSignup = async (req, res) => {
  try {
    await validUser(req.body);
    req.body.password = await bcrypt.hash(req.body.password, 10);
    req.body.role = "admin";

    const newAdmin = await User.create(req.body);

    const token = jwt.sign(
      {
        _id: newAdmin._id,
        emailId: newAdmin.emailId,
        role: newAdmin.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax"

    });

    res.status(201).send({
      message: "Admin registered successfully",
      user: newAdmin,
    });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = {
  userSignup,
  userLogin,
  getProfile,
  deleteProfile,
  
  adminSignup,
};
