const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
    comment: {
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
