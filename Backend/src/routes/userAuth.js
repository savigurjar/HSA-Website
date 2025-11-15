const express = require("express");
const authRouter = express.Router();
const {userSignup,userLogin,getProfile, deleteProfile, adminSignup, logout} = require("../controllers/userAuthenticate");
const userMiddleware = require("../middleware/userMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware")

authRouter.post("/signup",userSignup);
authRouter.post("/login",userMiddleware,userLogin);
authRouter.get("/getProfile",userMiddleware,getProfile);
authRouter.delete("/deleteProfile/:id",userMiddleware,deleteProfile);
authRouter.post("/adminSignup",adminMiddleware,adminSignup);
authRouter.post("/logout",userMiddleware,logout)

module.exports = authRouter;