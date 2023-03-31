const Map = require("../models/mapModel");

const mongoose = require("mongoose");
const multer = require("multer");
const fs = require("fs");
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "maps"),
  filename: (req, file, cb) => {
    cb(null, file.originalName);
  },
});
const upload = multer({
  storage: storage,
});

const createMap = (req, res) => {
  const { name } = req.body;
  const saveImage = new Map({
    name,
    img: {
      data: fs.readFileSync("../maps/", req.filename),
      contentType: "image/png",
    },
  });
  saveImage
    .save()
    .then((res) => console.log("image saved"))
    .catch((err) => console.log(err.message));
};

module.exports = { createMap, upload };
