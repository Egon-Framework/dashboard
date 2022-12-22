const createError = require("http-errors");
const express = require("express");
const path = require("path");
const pjson = require("./package.json");
const logger = require("morgan");

const indexRouter = require("./routes/index");

const app = express();

// Configure application logging
app.use(logger("dev"));

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// Set up routing to application pages
app.use("/", indexRouter);

// Expose assets and static files
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/bootstrap", express.static(__dirname + "/node_modules/bootstrap/dist"));
app.use("/bootstrap-icons", express.static(__dirname + "/node_modules/bootstrap-icons/font"));
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"));

// Configure globally availible values for use in templates
app.locals.title = "Egon Dashboard";
app.locals.version = pjson.version;

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
