const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const accountSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    currency: {
      type: Number,
      default: 0,
    },
    score: {
      type: Number,
      default: 0,
    },
    mobile: {
      type: String,
      required: true,
    },
    UID: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Account", accountSchema);
