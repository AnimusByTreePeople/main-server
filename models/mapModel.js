const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mapSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  map: {
    data: Buffer,
    contentType: String,
  },
  UID: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Map", mapSchema);