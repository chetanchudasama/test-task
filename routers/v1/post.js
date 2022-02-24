const express = require("express");
const router = express.Router();
const post = require("../../controllers/post");

router.route("/add").post(post.addPost);

router.route("/details/:id").get(post.getPostById);

router.route("/list").get(post.getPostList);

module.exports = router;
