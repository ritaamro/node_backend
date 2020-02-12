module.exports = {
	handleValidationErrors: function(errors) {
		if (!errors.isEmpty()) {
			const error = prepareValidationError(errors);
			throw error;
		}
	}
};

const prepareValidationError = function(errors) {
	const error = new Error("Request validation failed.");
	error.statusCode = 422;
	error.data = errors.array() || [];
	return error;
};
