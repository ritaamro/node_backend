const express = require("express");
const { query } = require("express-validator");
const orderController = require("../controllers/orderController");

const router = express.Router();

router.get(
	"/",
	[
		query("userID")
			.exists()
			.isInt({ gt: 0 }),
		query("petID")
			.exists()
			.isInt({ gt: 0 }),
		query("limit")
			.optional()
			.isInt(),
		query("offset")
			.optional()
			.isInt()
	],
	orderController.getOrders
);

module.exports = router;
