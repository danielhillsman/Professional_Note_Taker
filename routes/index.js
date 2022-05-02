// Improting modules and routes
const express = require("express").Router();
const apiRoutes = require("./notes");
const html = require("./html");
// Express api routes
express.use("/api", apiRoutes);
express.use("/", html);
// Exporting Express
module.exports = express;