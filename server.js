const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 8080;
const app = express();

app.use(bodyParser.urlencoded());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("Server is up and running");
});
