const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    },
    country: {
      type: Number,
      ref: "country",
    },
    state: {
      type: Number,
      ref: "state",
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    name: {
      type: String,
    },
    mobileNumber: {
      type: String,
    },
    email: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    isPublic: {
      type: Boolean,
      default: true,
    },
  },
  {
    collection: "post",
  }
);

const Post = mongoose.model("post", postSchema);

module.exports = {
  Post,
};
