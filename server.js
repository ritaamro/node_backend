const app = require("./app");
const http = require("http");

const port = process.env.PORT || 3000;

const onError = error => {
	console.log(error);
	process.exit(1);
};

const onListening = () =>
	console.log(
		`Backend server listening on port ${port} on ${process.env.HOST ||
			"localhost"}`
	);

app.set("port", port);
const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
process.env.HOST ? server.listen(port, process.env.HOST) : server.listen(port);
