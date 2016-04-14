var express = require('express');
var app = express();

var port = process.env.PORT || 3001

app.get('/', function (req, res) {
  console.log("hit it, yo!");
  res.send('Hello You handsome devil, you! ' + Date.now());
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
