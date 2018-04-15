var express = require('express');
var app = express();
var createUser = require('./controllers/createUser');
var createItem = require('./controllers/createItem');

var mongoose = require('mongoose');
var mongoDB = 'mongodb://10.65.98.238:27017/powervouch';
var bodyParser = require('body-parser')
app.use(bodyParser.json())

const path = require('path');
const cors = require('cors');

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/*app.get('/hello', function (req, res) {
  res.send('Hello World!');
});*/

app.use(cors({ origin: 'http://localhost:4200' }));

app.use(express.static(__dirname + '/public'));


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.post('/api/createUser', function (req, res) {
  console.log(req.body);
  createUser.create(req, res);
});

app.post('/api/createItem', function (req, res) {
    console.log(req.body)
    createItem.create(req, res);
});

app.post('/api/createVoucher', function (req, res) {
    console.log(req.body);
    createVoucher.create(req, res);
});

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/public/index.html'))
// });
