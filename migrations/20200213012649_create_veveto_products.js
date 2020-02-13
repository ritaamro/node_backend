exports.up = function(knex) {
	return knex.schema.createTable("VevetoProducts", table => {
		table.increments("ProdID").primary();
		table.string("Name").notNullable();
		table.dateTime("CreatedAt").defaultTo(knex.fn.now());
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable("VevetoProducts");
};
