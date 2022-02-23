const express = require("express");
const router = express.Router();
const product = require("../../controllers/product");

router.route("/add").post(product.addProduct);

router.route("/details/:id").get(product.getProductById);

router.route("/list").get(product.getProductList);

module.exports = router;
