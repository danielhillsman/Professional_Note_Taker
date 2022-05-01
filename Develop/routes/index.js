// Improting modules and routes
const express = require("express").Router();
const apiRoutes = require("./notes");
const htmlRoutes = require("./htmlroutes");
// Express api routes
express.use("/api", apiRoutes);
express.use("/", htmlRoutes);
// Importing Express
module.exports = express;