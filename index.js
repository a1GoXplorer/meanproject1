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

// app.get("/add/:x/:y", function(req, res) {
//   res.send("The answer is: " + (parseInt(req.params.x) + parseInt(req.params.y)));
// })

// app.get("/subtract/:x/:y", function(req, res) {
//   res.send("The answer is: " + (parseInt(req.params.x) - (req.params.y)));
// })

app.get("/divide/:x/:y", function(req, res) {
  res.send("The answer is: " + (req.params.x / req.params.y));
})

app.get("/add/*", function(req, res) {
  var myParams = req.params[0].split("/")
  var result = myParams.reduce(function(total, num) {return total + parseInt(num)}, 0)
  res.send("The answer is: " + result);
})

app.get("/subtract/*", function(req, res) {
  var myParams = req.params[0].split("/")
  var result = myParams.reduce(function(total, num) {return total - parseInt(num)}, 0)
  res.send("The answer is: " + result);
})

app.get("/multiply/*", function(req, res) {
  var myParams = req.params[0].split("/")
  var result = myParams.reduce(function(total, num) {return total * parseInt(num)}, 0)
  res.send("The answer is: " + result);
})

app.get("/divide/*", function(req, res) {
  var myParams = req.params[0].split("/")
  var result = myParams.reduce(function(total, num) {return total / parseInt(num)}, 0)
  res.send("The answer is: " + result);
})

app.listen(3000);
