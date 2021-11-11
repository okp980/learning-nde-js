const express = require("express");

const route = express.Router();

route.get("/", (req, res) => {
	res.render("index", {
		title: "Homepage",
		info: "welcome to the homepage",
		path: "/",
	});
});

route.get("/about-us", (req, res) => {
	res.render("about-us", {
		title: "Learn About Us",
		info: "here is a little bit of information about us",
		path: "/about-us",
	});
});

route.get("/contact-us", (req, res) => {
	res.render("contact-us", {
		title: "Contact Us",
		info: "Please send us a feedback inorder for us to serve you better",
		path: "/contact-us",
	});
});

route.post("/contactus", (req, res) => {
	const { message } = req.body;
	res.render("message", {
		title: "Contact Us",
		info: "we received your message and will get back to you!!!",
		path: "/contact-us",
		message,
	});
});

module.exports = route;
