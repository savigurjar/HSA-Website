const express = require("express");
const authRouter = express.Router();
const {userSignup,userLogin,getProfile} = require("../controllers/userAuthenticate");
const userMiddleware = require("../middleware/userMiddleware")

authRouter.post("/signup",userSignup);
authRouter.post("/login",userMiddleware,userLogin);
authRouter.get("/getProfile",userMiddleware,getProfile)

module.exports = authRouter;