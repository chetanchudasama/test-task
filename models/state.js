const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
    },
    name: {
      type: String,
    },
    country: {
      type: Number,
      ref: "country",
    },
  },
  {
    collection: "state",
  }
);

const states = mongoose.model("state", countrySchema);

module.exports = {
  states,
};
