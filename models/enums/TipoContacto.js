const { Schema, model } = require("mongoose");

 const tipoContactoSchema = Schema ({
     value:{
         type:String,
         require:[true, 'El valor es obligatorio']
     },
 });
    
module.exports = model('TipoContacto',tipoContactoSchema)