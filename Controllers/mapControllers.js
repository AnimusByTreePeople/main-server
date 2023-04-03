const Map = require("../models/mapModel");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./maps"),
  filename: (req, file, cb) => {
    cb(null, file.originalName);
  },
});
const upload = multer({
  storage: storage,
});

const createMap = async (req, res) => {
  const { uid } = req.params;
  const { name, map } = req.body;
  console.log(map);
  try {
    const mapNew = await Map.create({
      name,
      map,
      UID: uid,
    });
    res.status(200).json(mapNew);
    console.log("done");
  } catch (e) {
    res.status(400).json({ error: e.message + "hi hi" });
  }
};
const getMaps = async (req, res) => {
  const maps = await Map.find({}).sort({ createdAt: -1 });
  res.status(200).json(maps);
};

module.exports = { createMap, upload, getMaps };
