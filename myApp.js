var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();

console.log("Hello World")


app.get("/", function(req, res) {
  res.send("Hello Express");
});































 module.exports = app;
