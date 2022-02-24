const express = require("express");
const router = express.Router();
const country = require("../../controllers/country");

router.route("/list").get(country.countryList);

router.route("/state/list").get(country.stateList);

module.exports = router;
