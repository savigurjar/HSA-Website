const User = require("../models/user");
const validUser = require("../utils/validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// =================== SIGNUP ===================
const userSignup = async (req, res) => {
  try {
    //  Validate input
    await validUser(req.body);

    //  Hash password
    req.body.password = await bcrypt.hash(req.body.password, 10);

    //  Create user
    const newUser = await User.create(req.body);

    //  Generate JWT token
    const token = jwt.sign(
      {
        _id: newUser._id,
        emailId: newUser.emailId,
        role: newUser.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    //  Store token in cookie
    res.cookie("token", token, {
      httpOnly: true, // prevents client-side JS access
      secure: process.env.NODE_ENV === "production", // only send over HTTPS in prod
      sameSite: "strict", // CSRF protection
    });

    //  Response
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

    //  Find user by email
    const user = await User.findOne({ emailId });
    if (!user) return res.status(401).send("Invalid credentials");

    // Compare password
    const isAllowed = await bcrypt.compare(password, user.password);
    if (!isAllowed) return res.status(401).send("Invalid credentials");

    //  Generate JWT
    const token = jwt.sign(
      {
        _id: user._id,
        emailId: user.emailId,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    //  Set token cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    //  Send response
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

const getProfile = async (req, res) => {
  try {
    
    const user =  req.result;

    if (!user) {
      return res.status(401).send({ error: "Unauthorized: no user found in request" });
    }

    //  Return user profile data (omit password)
    res.status(200).send({
      message: "User profile fetched successfully",
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

const logout = async(req,res)=>{
    try{
        

    } catch (error) {
    res.status(400).send({ error: error.message });
  }
}


// =================== EXPORT ===================
module.exports = { userSignup, userLogin ,getProfile};
