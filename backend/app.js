var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const passport = require("passport");
const session = require("express-session");

var indexRouter = require("./routes/index");
let foodItemRouter = require("./routes/foodItems.js");
let business_hoursRouter = require("./routes/business_hours.js");
let favoriteRouter = require("./routes/favorites.js");
let userRouter = require("./routes/user.js");
let sessionRouter = require("./routes/sessions.js");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "client/build")));

app.use(
  session({
    secret: "save_a_plate",
    resave: false,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);
app.use("/api/users", userRouter);
app.use("/api/fooditems", foodItemRouter);
app.use("/api/business_hours", business_hoursRouter);
app.use("/api/favorites", favoriteRouter);
app.use("/api/sessions", sessionRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../frontend/build/index.html"));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json("error");
});

module.exports = app;
