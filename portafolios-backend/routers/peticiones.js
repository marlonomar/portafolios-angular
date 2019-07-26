//EXPRESS

const express = require('express');
const app = express();

//Model Schema
const Proyect = require('../models/proyects');

 //PETICIONES

app.post('/proyects',(req,res)=>{
    let body = req.body;

    let newProyect = new Proyect({
        name: body.name,
        description: body.description,
        tecnology: body.tecnology,
        year: body.year,
        link : body.link,
        active :body.active
    });

    newProyect.save((err,proyect)=>{
        if(err){
            return res.status(400).json({
                success:false,
                err
            })
        }
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.json({
            success:true,
            proyect : proyect
        });
    })
});

app.put('/proyects/:id',(req,res)=>{
 let id = req.params.id;
 let body = req.body;

 Proyect.findByIdAndUpdate(id,body,(err,proyect)=>{

        if(err){
            return res.status(400).json({
                success: false,
                err
            })
        }

        res.json({
            success:true,
            proyect: proyect
        })

    });
 
});

app.get('/proyects',(req,res)=>{
    let desde = req.query.desde || 0;
    desde= Number(desde);
    let limite = req.query.limite || 5;
    limite = Number(limite);
 
    
    Proyect.find({active : true} ,'name description tecnology year link')
           .limit(limite)
           .skip(desde)
           .exec((err,proyects)=>{
                if(err){
                    return res.status(400).json({
                        success: false,
                        err
                    })
                }
                
                res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

                Proyect.count({active : true},(err,cont)=>{
                    res.json({
                        success:true,
                        proyects,
                        resgistros : cont
                    })
                })

                
           })
});

app.delete('/proyects/:id',(req,res)=>{

   let id = req.params.id;

   let active = {
    active : false
   }

   Proyect.findByIdAndUpdate(id,active,{new : true},(err,remove)=>{

    if(err){
        return res.status(400).json({
            success: false,
            err
        })
    }

    if(!remove){
        return res.status(400).json({
            success: false,
            err : {
                mensaje : 'registro no encontrado'
            }
        })
    }

    res.json({
        delete: true,
        registro: remove
    })

   })

});

//exportar modulo
module.exports = app;
