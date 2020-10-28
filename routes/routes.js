const express = require("express");

const controller = require("../controllers/Controller");

const router = express.Router();

console.log("Reached here");

router.get("/disease", controller.getDisease);

router.post("/disease", controller.putDisease);

router.get("/diseaseage", controller.getDiseaseAge);

router.post("/resident", controller.putResident);

router.get("/getResidents", controller.getResidents);

router.post("/putResident", controller.putResident);

router.get("/statediseaseage", controller.getStateDiseaseAge);

router.post("/state", controller.putState);

module.exports = router;
