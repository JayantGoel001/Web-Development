var createError = require('http-errors');
var express = require('express');
var methodOverride = require('method-override');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('./api/models/db');
var indexRouter = require('./mvc/routes/index');
var apiRouter = require('./api/routes/index');
var countryRouter = require('./mvc/routes/countries');

var app = express();
app.use(methodOverride("_method"));

// view engine setup
app.set('views', path.join(__dirname, 'mvc', 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req,res,next) {
    res.statusJson = function(statusCode,data) {
        let obj = {
            ...data,
            statusCode :statusCode
        }
        res.status(statusCode).json(obj);
    }
    next();
});
app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/countries', countryRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
