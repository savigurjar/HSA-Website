const express = require('express');
const appRouter = express.Router();

appRouter.post("/register",signup);

module.exports = appRouter;