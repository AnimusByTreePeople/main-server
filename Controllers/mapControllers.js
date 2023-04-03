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
  console.log("Creating");
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
const getMap = async (req, res) => {
  const { uid } = req.params;
  const map = await Map.findOne({ UID: uid });
  if (map) {
    res.status(200).json(map);
  } else {
    res.status(200).json(null);
  }
};
const updateMap = async (req, res) => {
  const { uid } = req.params;
  try {
    const mapNew = await Map.findOneAndUpdate(
      { UID: uid },
      { ...req.body },
      {
        returnOriginal: false,
      }
    );
    res.status(200).json(mapNew);
    console.log("done");
  } catch (e) {
    console.log(e.message);
    res.status(400).json({ error: e.message + "hi hi" });
  }
};
module.exports = { createMap, upload, getMaps, getMap, updateMap };
