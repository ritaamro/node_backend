const { validationResult } = require("express-validator");
const knex = require("../knexClient");
const errorHandler = require("../util/errorHandler");

exports.getPetByID = async (req, res, next) => {
	const errors = validationResult(req);

	try {
		errorHandler.handleValidationErrors(errors);

		const petID = parseInt(req.params.petID);

		const [pet] = await knex
			.from("Pets")
			.where("Pets.PetID", petID)
			.select(
				"Pets.PetID",
				"Pets.Name",
				"Pets.ImageURL",
				"Vets.VetID",
				"Vets.Name as VetName",
				"Vets.PhoneNumber as VetPhoneNumber"
			)
			.innerJoin("Vets", "Pets.VetID", "Vets.VetID");

		if (pet) res.status(200).json(pet);
		else res.status(204).send();
	} catch (error) {
		next(error);
	}
};
