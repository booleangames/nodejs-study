var express = require('express');
var dbManager = require('./DBManager');
var app = express();

dbManager.DBConnect();

app.get('/', function(req, res) {
  res.send('Get Request');
})

app.get('/hello', function(req, res) {
  res.send('Hello World');
})

app.post('/', function(req, res) {
  res.send('Post request');
})

app.listen(3000, () => {
  console.log('start listen...');
});

dbManager.DoQuery("SELECT * FROM gb_char WHERE char_name = 'tdread1'");