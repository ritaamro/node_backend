const { validationResult } = require("express-validator");
const knex = require("../knexClient");
const errorHandler = require("../util/errorHandler");

exports.getUserByID = async (req, res, next) => {
	const errors = validationResult(req);

	try {
		errorHandler.handleValidationErrors(errors);

		const userID = parseInt(req.params.userID);

		const [user] = await knex.from("Users").where("Users.UserID", userID);

		if (user) res.status(200).json(user);
		else res.status(204).send();
	} catch (error) {
		next(error);
	}
};

exports.getUserPets = async (req, res, next) => {
	const errors = validationResult(req);

	try {
		errorHandler.handleValidationErrors(errors);

		const userID = parseInt(req.params.userID);

		const pets = await knex
			.from("Pets")
			.where("Pets.UserID", userID)
			.select("Pets.PetID", "Pets.Name", "Pets.ImageURL");

		if (pets.length) res.status(200).json({ pets });
		else res.status(204).send();
	} catch (error) {
		next(error);
	}
};
