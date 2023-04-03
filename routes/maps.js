const express = require("express");

const { createMap, getMaps } = require("../Controllers/mapControllers");

const router = express.Router();

router.post("/:uid", createMap);
router.get("/", getMaps);

module.exports = router;
