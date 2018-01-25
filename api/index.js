const path = require("path");
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

/* app configurations */
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../client/dist")));
mongoose.connect(process.env.MONGO_DB);

require("./routes")(app);

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

app.listen(process.env.CONTRACTS_PORT, () => {
	console.log(process.env.CONTRACTS_PORT);
});
