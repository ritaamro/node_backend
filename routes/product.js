const express = require("express");
const { param } = require("express-validator");
const productController = require("../controllers/productController");

const router = express.Router();

router.get(
	"/:prodID",
	[
		param("prodID")
			.exists()
			.isInt({ gt: 0 })
	],
	productController.getProductByID
);

router.get("/", productController.getProducts);

module.exports = router;
