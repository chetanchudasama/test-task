const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
    comments: {
      type: String,
    },
  },
  {
    collection: "comment",
  }
);

const Comments = mongoose.model("comment", commentsSchema);

module.exports = {
  Comments,
};
