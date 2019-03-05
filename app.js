const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const multer = require('multer');
const request = require('request');
const colors = require('colors');
const cors_sec = require('./routes/corsheaders')
// const mongoose = require('mongoose');
// mongoose.Promise = Promise;
// mongoose.connect('mongodb://localhost/trucking');
// var userModel = require('./api/models/userModel');

const http = require('http').Server(app);


// Middlewares for HTTP Request and cors handlers
app.use('/', cors_sec.CrossOriginHeaders);


app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.bodyParser({ keepExtensions: true, uploadDir: '/uploads' }));
app.use(bodyParser.json({ 
 	limit: '10mb'
    })); 
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(router);
require('./routes')(router);
process.on('uncaughtException', function(err,req,res) {
  console.log('Caught unhandled exception: ' + err);
  //process.exit(1);
  });

const server = http.listen(5000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s'.underline.red, host, port);
});
