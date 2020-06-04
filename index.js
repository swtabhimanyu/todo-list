const express=require('express');
const port=8000;
const app=express();

app.use(express.urlencoded()); // this has to be set not matter what before the routes are set, or the static files 
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('assets'));
app.use('/',require('./routes'));


app.listen(port,function(err){
    if(err){
        console.error(err);
        return;
    }
    console.log('Server up and running at port ', port);
});