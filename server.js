
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

app.get('/blockgroup/:id', function(req, res) {
  var groupID = req.params.id;
  var sql = "update 'group' set 'enabled'=1 where id=" + groupID + ";";
  console.log(sql);
  var commandText = 'sudo sqlite3 /etc/pihole/gravity.db "' + sql + '"';
  console.log(commandText);
  shell.exec(commandText);
  res.send('OK');
});

app.get('/unblockgroup/:id', function(req, res) {
  var groupID = req.params.id;
  var sql = "update 'group' set 'enabled'=0 where id=" + groupID + ";";
  console.log(sql);
  var commandText = 'sudo sqlite3 /etc/pihole/gravity.db "' + sql + '"';
  console.log(commandText);
  shell.exec(commandText);
  res.send('OK');
});

app.listen(8080, function () {
  console.log('Server running in port 8080');
});


