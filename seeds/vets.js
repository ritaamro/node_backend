exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("Vets")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("Vets").insert([
				{ Name: "Dr. Muller", PhoneNumber: "+36 12 234 2343" }
			]);
		});
};
