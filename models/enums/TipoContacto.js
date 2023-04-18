const { Schema, model } = require("mongoose");

 tipoContacto :   [
    paciente="paciente",
    cirujano="cirujano",
    aseguradora="aseguradora",
    hospital ="hospital"
]


const TipoContactoSchema = Schema ({
         value:{
       type:String,
         enum:tipoContacto,
         default:tipoContacto.paciente
     },
 })

// const TipoContactoSchema = Schema ({
//     value:{
//         type:String,
//         require:[true, 'El valor es obligatorio']
//     },
// })
    
module.exports = model('TipoContacto',TipoContactoSchema)