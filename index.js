var express = require('express');
var app = express();
var createUser = require('./controllers/createUser');
var createItem = require('./controllers/createItem');
var getItemsByVoucherExpiry = require('./controllers/getItemsByExpiry');
var getItemById = require('./controllers/getItem');
var getAllItems = require('./controllers/getAllItems');

var mongoose = require('mongoose');
var mongoDB = 'mongodb://10.65.98.238:27017/powervouch';
var bodyParser = require('body-parser')
app.use(bodyParser.json())

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.post('/createUser', function (req, res) {
  console.log(req.body);
  createUser.create(req, res);
});

app.post('/createItem', function (req, res) {
    console.log(req.body);
    createItem.create(req, res);
});

app.get('/getItemsByVoucherExpiry', function (req, res) {
    getItemsByVoucherExpiry.find(req, res);
 });

app.post('/getItemById', function (req, res) {
    console.log(req.body);
    getItemById.findItem(req, res);
});

app.get('/getAllItems', function (req, res) {
    getAllItems.findAllItems(req, res);
});
