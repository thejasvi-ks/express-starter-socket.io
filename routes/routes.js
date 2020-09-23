const express = require("express");
const controller = require("../controllers/controller");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/get-data", controller.getDetails);

module.exports = router;
