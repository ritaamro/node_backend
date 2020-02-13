exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("VevetoProducts")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("VevetoProducts").insert([
				{ Name: "Wurmtest Pro" },
				{ Name: "Wurmtest Basic" }
			]);
		});
};
