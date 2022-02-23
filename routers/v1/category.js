const express = require('express');
const router = express.Router();
const site = require('../../controllers/category');

router
  .route('/list')
  .get(site.categoryList)

module.exports = router