const express = require("express");
const router = express.Router();

const categoryRoute = require("./category");
const countryRoute = require("./country");
const postRoute = require("./post");
const commentRoute = require("./comments");

router.use("/category", categoryRoute);
router.use("/country", countryRoute);
router.use("/post", postRoute);
router.use("/comments", commentRoute);

module.exports = router;
