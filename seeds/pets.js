exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("Pets")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("Pets").insert([
				{
					Name: "Simba",
					ImageURL:
						"https://i.pinimg.com/originals/2c/e3/c4/2ce3c44af474f6837a3890bdde17e938.jpg",
					UserID: 1,
					VetID: 1
				},
				{
					Name: "Max",
					ImageURL:
						"https://cdn.petcarerx.com/LPPE/images/articlethumbs/Facts-French-Bulldog-Small.jpg",
					UserID: 2,
					VetID: 1
				}
			]);
		});
};
