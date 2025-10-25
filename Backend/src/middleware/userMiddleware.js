const User = require("../models/user");
const jwt = require("jsonwebtoken");

const userMidd = async (req, res, next) => {
    try {
        // Extract token from cookies
        const token = req.cookies?.token;
        if (!token) throw new Error("Token is missing");

        //  Verify token using your secret key
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        if (!payload?._id) throw new Error("Invalid token payload");

        //  Fetch user by ID
        const result = await User.findById(payload._id);
        if (!result) throw new Error("User not found")
            
        //  Attach user to the request for later use
        req.result = result
        //  Move to next middleware
        next();
    } catch (err) {
        res.status(401).send({ error: err.message });
    }
};

module.exports = userMidd;
