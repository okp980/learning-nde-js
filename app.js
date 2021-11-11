const http = require("http");
const express = require("express");
let ejs = require("ejs");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
	res.render("index", {
		title: "Homepage",
		info: "welcome to the homepage",
	});
});

app.get("/about-us", (req, res) => {
	res.render("about-us", {
		title: "Learn About Us",
		info: "here is a little bit of information about us",
	});
});

app.get("/contact-us", (req, res) => {
	res.render("contact-us", {
		title: "Contact Us",
		info: "Please send us a feedback inorder for us to serve you better",
	});
});

app.post("/contactus", (req, res) => {
	const { message } = req.body;
	res.render("message", {
		title: "Contact Us",
		info: "we received your message and will get back to you",
		message,
	});
});

const server = http.createServer(app);

server.listen(3000);
