

var createError = require('http-errors');
var express = require('express');

const path = require('path');
//var cookieParser = require('cookie-parser');
//var logger = require('morgan');
var bodyParser = require('body-parser')
 const cors = require('cors');


 var loginRouter = require('./Routes/oner');//login





var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());

//  cors method implimented by sadasivan
//sadasivan's code started here
app.use(cors({
  origin: '*',
    optionsSuccessStatus: 200,
    methods: ['GET,POST,PUT,PATCH,DELETE,OPTIONS']
}))
//sadasivan's code ended here


//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

  app.use(loginRouter)





 
/* Function to serve all static files inside public directory.*/
//file uploading for public
app.use('/uploads', express.static('uploads'))
//sadasivan's code ended here

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
  res.json({msg:'error'});
  
  


});


module.exports = app;

//functions ends here
