const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const partnersRouter = require("./routerComponents/partnersRoute");

const port = 8080;
const app = express();

app.use(bodyParser.urlencoded());
app.use(cors());
app.use("/partners", partnersRouter);

app.listen(port, () => {
  console.log("Server is up and running");
});
