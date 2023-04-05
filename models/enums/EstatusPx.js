const { Schema, model } = require('mongoose');

estatusPx: [
    ingreso = "ingreso",
    alta = "alta",
    interconsulta = "interconsulta",
    deceso = "deceso",
]

const EstatusPxSchema = Schema({
    value:{
        type:String, 
        enum:estatusPx,
        default:estatusPx.ingreso
    }, 
})

module.exports = model('EstatusPx',EstatusPxSchema);