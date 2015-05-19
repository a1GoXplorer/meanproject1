var express = require('express');
var app = express();


app.get('/', function(req, res){
  res.send('Hey Mark');
});

app.get("/greet/:name/:lastname", function(req, res) {
  res.send("Hello " + req.params.name + " " + req.params.lastname)
});

app.get("/multiply/:x/:y", function(req, res) {
  res.send("The answer is: " + (req.params.y * req.params.x));
})

app.get("/add/:x/:y", function(req, res) {
  res.send("The answer is: " + (parseInt(req.params.x) + parseInt(req.params.y)));
})

app.get("/subtract/:x/:y", function(req, res) {
  res.send("The answer is: " + (parseInt(req.params.x) - (req.params.y)));
})

app.get("/divide/:x/:y", function(req, res) {
  res.send("The answer is: " + (req.params.x / req.params.y));
})

app.listen(3000);
