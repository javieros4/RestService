const { Schema, model } = require("mongoose");

const ContactoSchema = model('Contacto');

const AseguradoraSchema = Schema({
    nombre:{
        type:String,
    unique:true,
    require:[true,'El nombde de la Aseguradora es requerido']
    },
contactos:{
    type:[ContactoSchema]
}
});

module.exports =  model('Aseguradora',AseguradoraSchema) ;