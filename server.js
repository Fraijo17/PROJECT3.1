const apiKey = process.env.API_KEY;
const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static("express"));

require("dotenv").config();

app.get("/", function(_req, res) {
    res.json(path.join(__dirname, "./express/index.html"));
  });
// default URL for website
app.use('/', function(_req,res){
    res.sendFile(path.join(__dirname+'/express/index.html'));
    //__dirname : It will resolve to your project folder.
  });
  var server = app.listen(process.env.PORT || 5000, function () {
    var port = server.address().port;
    console.log("Express is working on port " + port);
  });