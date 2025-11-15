const express = require("express");
const app = express();
const main = require("./Database/db");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const redisClient = require("./Database/redis")

const authRouter = require("./routes/userAuth");

//  Middleware
app.use(express.json());
app.use(cookieParser());

//  Routes
app.use("/auth", authRouter);

const InitializeConnections = async () => {
    try {
        await Promise.all([main(), redisClient.connect()])
        console.log("DB Connected");

        app.listen(process.env.PORT, () => {
            console.log(`server listening at port ${process.env.PORT}`)
        })

    } catch (err) {
        console.log("err " + err)
    }
}
InitializeConnections()
