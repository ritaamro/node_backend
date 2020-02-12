module.exports = {
	development: {
		client: "sqlite3",
		connection: {
			filename: "./vevetoDB.sqlite"
		},
		useNullAsDefault: true
	}
};
