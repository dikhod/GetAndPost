const express = require('express');
const app = express();
const path = require('path');


app.set('view engine','ejs'); //to configuring ejs 
app.set('views',path.join(__dirname,'/views'));//for views folder path 
// app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({ extended: true })); //for post request form data

//end points for request 
app.get('/',(req,res)=>{
    res.render('index');
})


app.get('/user',(req,res)=>{
    const query=req.query;
    console.log('data of request',query);
    res.send('Get request work');
})

app.post('/user',(req,res)=>{
   console.log(req.body);
    res.send('Post request work')
})

app.listen(3000,()=>{
    console.log('server starting at port 3000...');
})