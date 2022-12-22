const createError = require("http-errors");
const express = require("express");
const path = require("path");
const pjson = require("./package.json");
const logger = require("morgan");

const indexRouter = require("./routes/index");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/bootstrap", express.static(__dirname + "/node_modules/bootstrap/dist"));
app.use("/bootstrap-icons", express.static(__dirname + "/node_modules/bootstrap-icons/font"));

// Configure globally availible values for use in templates
app.locals.title = "Egon Dashboard";
app.locals.version = pjson.version;

// catch 404 and forward to error handler
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