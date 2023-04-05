const { Schema, model } = require('mongoose');

estadoCarta :[
    alta = "alta",
    pagada = "pagada",
    cambio = "cambio",
    baja = "baja"
]


const EstadoCartaSchema = Schema({
value:{
    type:String, 
    enum:estadoCarta,
    default:estadoCarta.baja
},

})

module.exports = model('EstadoCarta',EstadoCartaSchema);