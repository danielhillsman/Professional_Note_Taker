// Importing Files
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const notes = require("express").Router();
// GET route /notes
notes.get("/notes", (req, res) => {
    console.info(`${req.method} Requesting notes!`);
    fs.readFile("./db/db.json", (err, data) => res.json(JSON.parse(data)));
  });
// POST route for /notes
notes.post("/notes", (req, res) => {
    console.info(`${req.method} request received to add a note`);
    // requesting body the title and text for notes
  const { title, text } = req.body;
    //requesting new note
  if (req.body) {
    const newNote = {
      title,
      text,
    //  Added unique ID
      id: uuidv4(),
    };
    // fs reading db.josn file
    fs.readFile("./db/db.json", (err, data) => {
        let storedData = JSON.parse(data);
        storedData.push(newNote);
        // fs
        fs.writeFile(`./db/db.json`, JSON.stringify(storedData), (err) =>
        err
          ? console.error(err)
          : res.json(`New note added to db.json!`)
      );



        });
    }
});
// Exporting notes
module.exports = notes;