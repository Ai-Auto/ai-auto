var express  = require('express')
var apiai = require('apiai')
var bodyParser = require('body-parser')
var ex = express()



var app = apiai("4549f09cedf448a8877677781cb392ee ", "3a7e4b65-cb47-4491-886e-b233d03911d0");

var request = app.textRequest('hello');

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end()


ex.listen(8000 , function(){
  console.log("test");
})
