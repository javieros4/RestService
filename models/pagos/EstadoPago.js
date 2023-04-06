const { Schema, model } = require('mongoose');

const EstadoPagoSchema = Schema({
    estado:{
        type:String,
        require:[true,'Estado de pago requerido']
    },
    color:{
        type:String,        
    }
});

module.exports = model('EstadoPago',EstadoPagoSchema);