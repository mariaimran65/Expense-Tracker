const mongoose = require("mongoose");

const trackerSchema = new mongoose.Schema({
  description: String,
  amount: String,
});

const trackerModel = mongoose.model("tracker", trackerSchema);
module.exports = trackerModel;
