const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
	res.render("index");
});

app.post("/", function (req, res) {
	if (req.body.trafficAStar !== undefined) {
		res.redirect("/trafficAStar");
	} else if (req.body.railRoadAStar !== undefined) {
		res.redirect("/railAStar");
	} else {
		res.redirect("/");
	}
});

app.get("/trafficAStar", function (req, res) {
	res.render("trafficAStar");
});

app.get("/railAStar", function (req, res) {
	res.render("railAStar");
});

app.listen(process.env.PORT || 3000, function () {
	console.log("BANZAI");
});
