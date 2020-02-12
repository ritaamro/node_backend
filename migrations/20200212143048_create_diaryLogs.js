exports.up = function(knex) {
	return knex.schema.createTable("DiaryLogs", table => {
		table.increments("LogID").primary();
		table.string("Type").notNullable();
		table.string("LogMessage").notNullable();
		table.dateTime("CreatedAt").defaultTo(knex.fn.now());
		table
			.integer("UserID")
			.references("UserID")
			.inTable("Users")
			.notNull()
			.onDelete("cascade");
		table
			.integer("PetID")
			.references("PetID")
			.inTable("Pets")
			.notNull()
			.onDelete("cascade");
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable("DiaryLogs");
};
