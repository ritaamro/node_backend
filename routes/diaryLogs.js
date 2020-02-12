const express = require("express");
const { query } = require("express-validator");
const diaryController = require("../controllers/diaryController");

const router = express.Router();

router.get(
	"/",
	[
		query("userID")
			.exists()
			.isInt()
			.custom(value => value > 0),
		query("petID")
			.exists()
			.isInt()
			.custom(value => value > 0),
		query("limit")
			.optional()
			.isInt()
			.custom(value => value > 0)
	],
	diaryController.getLogs
);

module.exports = router;
