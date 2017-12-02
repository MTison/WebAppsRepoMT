var express = require('express');
var path = require('path');
var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require("cors");
var passport = require("passport");
var config = require("./config/database")

var users = require('./controllers/user.controller');

var app = express();
var server = require('http').Server(app);

//importing the mongoose library and connect to db through right url
var mongoose = require('mongoose');
mongoose.connect(config.database, {
  useMongoClient: true
});

// // to register schemas, making them accessible 
// require('./models/User');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

require("./config/passport")(passport);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', users);

// Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

//Start server
//const port = 4000;
const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log(__dirname);
  console.log('Server started on port '+port);
});
