exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("Orders")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("Orders").insert([
				{ Status: 1, ProdID: 1, PetID: 1, UserID: 1 },
				{ Status: 0, ProdID: 1, PetID: 2, UserID: 2 }
			]);
		});
};

/*
table.increments("orderID").primary();
		table.enu("Status", [0, 1, 2], {
			useNative: true,
			enumName: "status_type"
		});
		table.dateTime("OrderedAt").defaultTo(knex.fn.now());
		table
			.integer("ProdID")
			.references("ProdID")
			.inTable("VevetoProducts")
			.notNull()
			.onDelete("SET NULL");
		table
			.integer("PetID")
			.references("PetID")
			.inTable("Pets")
			.notNull()
			.onDelete("SET NULL");
		table
			.integer("UserID")
			.references("UserID")
			.inTable("Users")
			.notNull()
			.onDelete("cascade");
*/
