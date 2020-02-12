const express = require("express");
const { query } = require("express-validator");
const diaryController = require("../controllers/diaryController");

const router = express.Router();

router.get(
	"/",
	[
		query("userID")
			.exists()
			.isInt({ gt: 0 })
			.custom(value => value > 0),
		query("petID")
			.exists()
			.isInt({ gt: 0 })
			.custom(value => value > 0),
		query("limit")
			.optional()
			.isInt({ gt: 0 }),
		query("offset")
			.optional()
			.isInt({ gt: 0 })
	],
	diaryController.getLogs
);

module.exports = router;
