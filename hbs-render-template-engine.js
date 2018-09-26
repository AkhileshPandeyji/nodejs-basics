const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;
//nodemon filename.js -e js,hbs is necessary
var app = express();
//registering the partials that is the partial code of your
//website to a particular directory which repeats itself on your
//pages.
hbs.registerPartials(__dirname+'/views/partials');
//registering the hbs helper
hbs.registerHelper('getCurrentYear',()=>{
return  new Date().getFullYear();
});
//we can also pass the arguments to the helper functions of hbs
hbs.registerHelper('screamIt',(text)=>{
  return text.toUpperCase();
});
//setting the wrapper on the default view engine to the
//hbs template render engine.
app.set('view engine', 'hbs');
app.get('/',(req,res)=>{
  res.render('home.hbs',{
    pagetitle: 'Home Page',
    welcomemsg: 'welcome to the website'
  });
  });
app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    pagetitle: 'About Page',
    });
});
app.listen(port,()=>{
  console.log('Server is up and running at port 3000');
})
