const express = require('express');
const port = process.env.PORT || 3000;
//express is a npm package that is used to create http
//web server request handlers or request routers

//in order to initiate the express app just call the
// express() onto a variable.
var app = express();
//assigning the http web server request handler to the
//different route pages like root route page ,about ,bad route
//page.
//we use the app.get() method for that which takes in argument
//1.url 2. callback function to show / send the data response
//this call back function takes in argument the (req,res)
//that stores the info about the requests and generated responses.

//here we are sending the text/html content-type html
//ontent data.
app.get('/',(req,res)=>{
  res.send('<h1>hello everyone<h1>');
  res.send('hello world!');
});
//here we are sending the data of content type-application/json
//which is a json object.
//here we sent the object but the express auto converted
//it to the json.
app.get('/about',(req,res)=>{
  res.send({
    name:'Akhilesh',
    age : 24
  });
});
//application/json
  app.get('/bad',(req,res)=>{
    res.send({
      errorMessage : 'Unable to resolve the request'
    });
  });
  app.listen(port);
