const { validationResult } = require("express-validator");
const knex = require("../knexClient");
const errorHandler = require("../util/errorHandler");

exports.getLogs = async (req, res, next) => {
	const errors = validationResult(req);

	try {
		errorHandler.handleValidationErrors(errors);

		const userID = parseInt(req.query.userID);
		const petID = parseInt(req.query.petID);

		const limit = req.query.limit ? parseInt(req.query.limit) : -1;
		const offset = req.query.offset ? parseInt(req.query.offset) : -1;

		const logs = await knex
			.from("DiaryLogs")
			.where("PetID", petID)
			.andWhere("UserID", userID)
			.limit(limit)
			.offset(offset);

		if (logs.length) res.status(200).json({ logs });
		else res.status(204).send();
	} catch (error) {
		next(error);
	}
};
