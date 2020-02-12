exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("Pets")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("Pets").insert([
				{ Name: "Simba", UserID: 1, VetID: 1 },
				{ Name: "Max", UserID: 2, VetID: 1 }
			]);
		});
};
