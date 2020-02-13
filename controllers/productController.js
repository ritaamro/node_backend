const { validationResult } = require("express-validator");
const knex = require("../knexClient");
const errorHandler = require("../util/errorHandler");

exports.getProductByID = async (req, res, next) => {
	const errors = validationResult(req);

	try {
		errorHandler.handleValidationErrors(errors);

		const prodID = parseInt(req.params.prodID);

		const [product] = await knex.from("VevetoProducts").where("ProdID", prodID);

		if (product) res.status(200).json(product);
		else res.status(204).send();
	} catch (error) {
		next(error);
	}
};

exports.getProducts = async (req, res, next) => {
	const errors = validationResult(req);

	try {
		errorHandler.handleValidationErrors(errors);

		const products = await knex.select("ProdID", "Name").from("VevetoProducts");

		if (products.length) res.status(200).json({ products });
		else res.status(204).send();
	} catch (error) {
		next(error);
	}
};
