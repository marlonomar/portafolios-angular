const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator')

let newProyect = new Schema ({
    name:{
        type: String,
        unique:true,
        required : [true,'the name to proyect is required']
    },
    description:{
        type: String,
        required : [true,'the description to proyect is required']
    },
    tecnology:{
        type:String,
        required : [true,'the tecnology to proyect is required']
    },
    year:{
        type:String,
        required : [true,'the year to proyect is required']
    },
    link:{
        type:String,
        required : [true,'the link to proyect is required']
    },
    active:{
        type: Boolean,
        default :true,
    },
    img:{
        type:String,
        default:null
    }
});

newProyect.plugin(uniqueValidator , {mensagem :'{PATH} it already exists'})
module.exports = mongoose.model('newProyect',newProyect);