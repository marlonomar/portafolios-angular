/**
 * SERVIDOR 
 */
require('./config/config');

 //EXPRESS

 const express = require('express');
 const app = express();

//MONGOOSE
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/proyect-mean-stack',(err,res)=>{
    if(err){
        throw err
    }else{
        console.log("Data Base in MongoDB Online")
    }
});

 //BODY PARSER
 const bodyParser = require('body-parser');
 app.use(bodyParser.urlencoded({extended:false}));
 app.use(bodyParser.json());


//SETTINGS
app.set('json spaces 2',2)
app.use(express.json());
app.use(require('./routers/peticiones'));


 //server listen port 3000

 app.listen(process.env.PORT,()=>{
     console.log(`servidor funcioando en el puerto ${process.env.PORT}`);
 });