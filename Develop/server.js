// Requires all the packages 
const express = require("express");
const routes = require("./routes");



const app = express();
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);