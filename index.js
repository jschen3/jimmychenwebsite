var express = require('express');
var app = express();
var createUser = require('./controllers/createUser');
var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/test';
var bodyParser = require('body-parser')
app.use(bodyParser.json())

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/hello', function (req, res) {
  res.send('Hello World!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.post('/createUser', function (req, res) {
  console.log(req.body);
  createUser.create(req, res);
});
