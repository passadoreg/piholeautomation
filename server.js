
var express = require('express');
var app = express();
const shell = require('shelljs');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/block', function(req, res) {
  shell.exec('/home/network/blockdomains.sh');
  res.send('OK');
});

app.get('/unblock', function(req, res) {
  shell.exec('/home/network/unblockdomains.sh');
  res.send('OK');
});

app.listen(8080, function () {
  console.log('Server running in port 8080');
});


