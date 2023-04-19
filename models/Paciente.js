const { Schema, model } = require("mongoose");

const PacienteSchema = Schema({
    persona:{
        type:Schema.ObjectId, 
        ref:'Persona',
        require:[true,'Los datos personales son necesarios']        
    },
    contacto:{
        type:Schema.ObjectId, 
        ref:'Contacto',
        require:[true,'Los datos de contacto son necesarios']        
    },
    estado:{
        type:Boolean,
        default:true
      } 
});