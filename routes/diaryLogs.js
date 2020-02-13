const express = require("express");
const { query } = require("express-validator");
const diaryController = require("../controllers/diaryController");

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
	diaryController.getLogs
);

module.exports = router;
