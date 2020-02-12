const express = require("express");
const { param } = require("express-validator");
const userController = require("../controllers/userController");

const router = express.Router();

router.get(
	"/:userID",
	[
		param("userID")
			.exists()
			.isInt()
			.custom(value => value > 0)
	],
	userController.getUserByID
);

router.get(
	"/pets/:userID",
	[
		param("userID")
			.exists()
			.isInt()
			.custom(value => value > 0)
	],
	userController.getUserPets
);

module.exports = router;
