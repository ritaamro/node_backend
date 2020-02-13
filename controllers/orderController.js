const { validationResult } = require("express-validator");
const knex = require("../knexClient");
const errorHandler = require("../util/errorHandler");

exports.getOrders = async (req, res, next) => {
	const errors = validationResult(req);

	try {
		errorHandler.handleValidationErrors(errors);

		const userID = parseInt(req.query.userID);
		const petID = parseInt(req.query.petID);

		const limit = req.query.limit ? parseInt(req.query.limit) : -1;
		const offset = req.query.offset ? parseInt(req.query.offset) : -1;

		const orders = await knex
			.from("Orders")
			.where("PetID", petID)
			.andWhere("UserID", userID)
			.select(
				"Orders.OrderID",
				"Orders.Status",
				"Orders.OrderedAt",
				"VevetoProducts.Name as Name"
			)
			.innerJoin("VevetoProducts", "Orders.ProdID", "VevetoProducts.ProdID")
			.limit(limit)
			.offset(offset);

		if (orders.length) res.status(200).json({ orders });
		else res.status(204).send();
	} catch (error) {
		next(error);
	}
};
