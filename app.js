const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	if (req.method === "OPTIONS") {
		res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
		return res.status(200).json({});
	}
	next();
});

const userRoutes = require("./routes/user");
const petRoutes = require("./routes/pet");
const diaryRoutes = require("./routes/diaryLogs");
const orderRoutes = require("./routes/order");
const productRoutes = require("./routes/product");
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/pets", petRoutes);
app.use("/api/v1/diary", diaryRoutes);
app.use("/api/v1/orders", orderRoutes);
app.use("/api/v1/products", productRoutes);

app.get("/", (req, res) => {
	res.status(200).json({
		title: "Veveto Technical Task - NodeJS Backend"
	});
});

app.use((req, res, next) => {
	const error = new Error("Not found");
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: error.message
	});
});

module.exports = app;
