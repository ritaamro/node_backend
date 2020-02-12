exports.up = function(knex) {
	return knex.schema.createTable("Pets", table => {
		table.increments("PetID").primary();
		table.string("Name").notNullable();
		table.dateTime("CreatedAt").defaultTo(knex.fn.now());
		table
			.integer("UserID")
			.references("UserID")
			.inTable("Users")
			.notNull()
			.onDelete("cascade");
		table
			.integer("VetID")
			.references("VetID")
			.inTable("Vets")
			.onDelete("SET NULL");
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable("Pets");
};
