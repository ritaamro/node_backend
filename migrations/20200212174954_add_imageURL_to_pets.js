exports.up = function(knex) {
	return knex.schema.table("Pets", table => {
		table.string("ImageURL");
	});
};

exports.down = function(knex) {
	return knex.schema.table("Pets", table => {
		table.dropColumn("ImageURL");
	});
};
