const express = require("express");
const app = express();
const main = require("./Database/db");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const authRouter = require("./routes/userAuth");

//  Middleware
app.use(express.json());
app.use(cookieParser());

//  Routes
app.use("/auth", authRouter);

// Connect to DB and start server
main()
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(` Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(" Database connection failed:", err);
  });
