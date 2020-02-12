exports.up = function(knex) {
	return knex.schema.createTable("Users", table => {
		table.increments("UserID").primary();
		table.string("Name").notNullable();
		table.dateTime("CreatedAt").defaultTo(knex.fn.now());
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable("Users");
};
