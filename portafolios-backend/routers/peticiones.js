//EXPRESS

const express = require('express');
const app = express();


//Model Schema
const Proyect = require('../models/proyects');

//Multiparty
const multipart = require('connect-multiparty');
const multipartMiddelware = multipart({uploadDir: './uploads'});


//path
const path = require('path');
//FS

const fs = require('fs');

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
        res.setHeader('Access-Control-Allow-Origin', '[SCHEME]://[HOST]:[PORT_OPTIONAL]');
        
        res.json({
            success:true,
            proyect : proyect
        });
    })
});

app.post('/uploadImage/:id',multipartMiddelware,(req,res)=>{
    let id = req.params.id;
    let fileName = 'imagen no subida...';

    if(req.files){

        let filePath = req.files.img.path;
        let fileSplit = filePath.split('\\');
        let fileName = fileSplit[1];
        let fileExtSplit = filePath.split('\.');
        let fileExt = fileExtSplit[1];

        if(fileExt == 'jpg' || fileExt == 'png' || fileExt == 'jpeg' || fileExt == 'gif' || fileExt == 'JPG' || fileExt == 'PNG' || fileExt == 'JPEG' || fileExt == 'GIF'){
            Proyect.findByIdAndUpdate(id,{img : fileName},{new :true} , (err,proyectUpdate)=>{
                if(err) return res.status(500).send({mensaje:'la imagen no se ha subido'});
    
                if(!proyectUpdate) return res.status(404).send({mensaje:'el proyecto no existe'});
    
                return res.status(200).send({
                    files : proyectUpdate
                });
        
            })
        }else{

            fs.unlink(filePath,(err)=>{
                return res.status(200).send({
                    mensaje : 'formato no permitido'
                });
            })
        }

    }else{
        return res.status(200).send({
            mensaje : fileName
        });
    }
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
 
    
    Proyect.find({active : true} ,'name description tecnology year link img')
           .limit(limite)
           .skip(desde)
           .exec((err,proyects)=>{
                if(err){
                    return res.status(400).json({
                        success: false,
                        err
                    })
                }
                
                res.setHeader('Access-Control-Allow-Origin', '[SCHEME]://[HOST]:[PORT_OPTIONAL]');

                Proyect.count({active : true},(err,cont)=>{
                    res.json({
                        success:true,
                        proyects,
                        resgistros : cont
                    })
                })

                
           })
});

app.get('/imagen/:img',(req,res)=>{
    var file = req.params.img;
    var path_file = './uploads/'+file;
    
    fs.exists(path_file , (exists)=>{
        if(exists){
            return res.sendFile(path.resolve(path_file));
        }else{
            return res.status(200).send({
                mensaje:'imagen no encontrada'
            });
        }
    });

})

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
