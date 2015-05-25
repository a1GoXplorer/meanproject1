var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var request = require('request');
// var MongoClient = require('mongodb').MongoClient
//  , assert = require('assert');

// var url = 'mongodb://localhost:27017/meanproject1/data';

// //connect to the db
// MongoClient.connect('mongodb://localhost:27017/data', function(err, db) {
//   assert.equal(null, err);
//   console.log("Connected correctly to server");

//   db.close();
// });

// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/data/db", function(err, db) {
  if(!err) {
    console.log("**CONNECTED TO MONGO!!**");
  }
});




var app = express();

app.use(bodyParser.urlencoded( {extended: true}))

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index.ejs', {name: "Sarah Schuerhoff"});
});

app.get("/greet/:name/:lastname", function(req, res) {
  res.send("Hello " + req.params.name + " " + req.params.lastname + "!")
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


app.listen(3000);
