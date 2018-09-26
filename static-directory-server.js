const express = require('express');

var app = express();
//__dirname stands for the parent directory
app.use(express.static(__dirname + '/public'));
//use() is a middleware that is used to create a
//static directory to incorporate not only the url but the
//satic directories that hold the various html,css,js images files of your
//website.
//whereas app.get() and the res.send() can be used to redirect the
//client.
app.get('/',(req,res)=>{
  res.send('<h1>hello everyone<h1>');
  res.send('hello world!');
});
//2nd argument of the app.listen() can be used for debugging purposes
//to show messages in the terminal console.
app.listen(3000,() =>{
  console.log("The server is up and running");
});
