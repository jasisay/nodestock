const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const exphbs = require('express-handlebars');
const path = require('path');


app.engine('handlebars',exphbs.engine());
app.set('view engine','handlebars');

app.get('/',function(req,res){
    res.render('home',{
     stuff:"This is stuff"
    })
});

app.use(express.static(path.join(__dirname,'public')));

app.listen(PORT,()=>{
    console.log(`Lisening on port ${PORT}`)
});