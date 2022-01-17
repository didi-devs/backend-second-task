var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();

console.log("Hello World")

app.get("/", (req, res) => {
    res.send('Hello Express');
  });

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
  });

app.use("/public", express.static())


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/style.css");
  });
































 module.exports = app;
