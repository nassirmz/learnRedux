var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] ==='https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;


app.listen(PORT, function () {
  console.log('Listening on port ', PORT);
});
