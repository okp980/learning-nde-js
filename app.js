const http = require("http");
const path = require("path");

const express = require("express");

const userRoute = require("./route/userRoute");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(userRoute);
const server = http.createServer(app);

server.listen(3000);
