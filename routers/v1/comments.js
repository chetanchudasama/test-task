const express = require("express");
const router = express.Router();
const comment = require("../../controllers/comments");

router.route("/add").post(comment.addComment);

router.route("/details/:id").get(comment.getComments);

module.exports = router;
