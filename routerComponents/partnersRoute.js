const express = require("express");
const router = express.Router();
const pool = require("../dataBase/dataBase");

const displayCard = (req, res, next) => {
  pool
    .query('SELECT * FROM "partners";')
    .then((data) => res.send(data).json())
    .catch((error) => console.log(error));
};

router.get("/", displayCard);

module.exports = router;
