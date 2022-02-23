const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
    },
    sortname: {
      type: String,
    },
    name: {
      type: String,
    },
    states: [
      {
        type: Number,
        ref: "state",
      },
    ],
  },
  {
    collection: "country",
  }
);

const Country = mongoose.model("country", countrySchema);

module.exports = {
  Country,
};
