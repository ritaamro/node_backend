const express = require("express");
const { param } = require("express-validator");
const petController = require("../controllers/petController");

const router = express.Router();

router.get(
	"/:petID",
	[
		param("petID")
			.exists()
			.isInt()
			.custom(value => value > 0)
	],
	petController.getPetByID
);

module.exports = router;
