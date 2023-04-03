const express = require("express");

const {
  createMap,
  getMaps,
  getMap,
  updateMap,
} = require("../Controllers/mapControllers");

const router = express.Router();

router.post("/:uid", createMap);
router.put("/:uid", updateMap);
router.get("/:uid", getMap);
router.get("/", getMaps);

module.exports = router;
