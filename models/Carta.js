const { Schema, model } = require('mongoose');
const EstadoCartaSchema = mongoose.model('EstadoCarta');
const AseguradoraSchema = mongoose.model('Aseguradora');

const CartaSchema = Schema({

    numeroCarta: {
        type: String,
        require:[true,'El numero de carta es requerido'],
        unique:true
    },
    aseguradora: {
        type: Schema.ObjectId,
        ref:'Aseguradora',
        require:[true,'La aseguradora es requerida'],
    },
    estadoCarta: {
        type: Schema.ObjectId,
        ref:'EstadoCarta',
        require:[true,'El estado de la carta es obligatori'],
    },
    facturaRelacionada: {
        type: String,
        unique:true
    },
    fechaCreacion: {
        type: Date,
        require:[true,'La fecha de creacion es requerida'],
    },
    fechaIngreso: {
        type: Date
    },
    fechaPago: {
        type: Date
    },
    monto: {
        type: Number
    },
    estado:{
        type:Boolean,
        default:true
      }


});

module.exports = model('Carta', CartaSchema)