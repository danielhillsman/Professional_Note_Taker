// Importing path and router Express
const path = require("path");
const router = require("express").Router();
// Path for notes.html
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});
// Path for public.html
router.get("*", (req, res) => {
  console.log("Server Started!");
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
// Exporting Router
module.exports = router;