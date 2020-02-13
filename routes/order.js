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
			.isInt({ gt: 0 }),
		query("offset")
			.optional()
			.isInt({ gt: 0 })
	],
	orderController.getOrders
);

module.exports = router;
