const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");

const pjson = require("./package.json");
const indexRouter = require("./routes/index");

const app = express();

// Configure application logging
app.use(logger("dev"));

// Setup view engine for rendering templates
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// Configure global values for use in templates
app.locals.title = "Egon Dashboard";
app.locals.version = pjson.version;

// Expose assets and static files
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/bootstrap", express.static(__dirname + "/node_modules/bootstrap/dist"));
app.use("/bootstrap-icons", express.static(__dirname + "/node_modules/bootstrap-icons/font"));
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"));

// Set up routing to application pages
app.use("/", indexRouter);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
