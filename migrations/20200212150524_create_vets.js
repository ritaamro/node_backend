exports.up = function(knex) {
	return knex.schema.createTable("Vets", table => {
		table.increments("VetID").primary();
		table.string("Name").notNullable();
		table.string("PhoneNumber").notNullable();
		table.dateTime("CreatedAt").defaultTo(knex.fn.now());
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable("Vets");
};
