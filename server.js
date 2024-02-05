const express=require('express');
const app=express();
const path = require('path');


app.use(express.static(path.join(__dirname)));
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/home.html'));
});

app.listen(3000,'0.0.0.0',()=>{
    console.log('server runnig port 3000');
});