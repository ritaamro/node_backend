exports.up = function(knex) {
	return knex.schema.createTable("Orders", table => {
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
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable("Orders");
};
