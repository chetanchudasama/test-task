const express = require("express");
const router = express.Router();

const categoryRoute = require("./category");
const countryRoute = require("./country");
const productRoute = require("./product");
const commentRoute = require("./comments");

router.use("/category", categoryRoute);
router.use("/country", countryRoute);
router.use("/product", productRoute);
router.use("/comments", commentRoute);

module.exports = router;
