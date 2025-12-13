const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const main = require("./Database/db");
const redisClient = require("./Database/redis");
const dotenv = require('dotenv')

app.use(express.json());
app.use(cookieParser());

const IntializeConnection = async () => {
    try {
        await Promise.all([main(), redisClient.connect()]);
        console.log("Connect to the Database and Redis");

        app.listen(process.env.PORT, () => {
            console.log(`server is listening on port ${process.env.PORT}`)
        })

    } catch (err) {
        console.log("Error "+err);
    }
}
IntializeConnection();




