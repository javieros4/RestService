const { Schema, model } = require("mongoose");
const ContactoSchema = mongoose.model('Contacto');

const HospitalSchema = Schema({

    nombre: {
        type: String,
        require: [true, 'El nombre es requerido'],
    },
    direccion: {
        type: Schema.ObjectId,
        ref: 'Direccion',        
    },
    UrlMaps: {
        type: String
    },
    telefono: {
        type: Number
    },
    telefonoQuirofano: {
        type: Number
    },
    telefonoUrgencias: {
        type: Number
    },
    telefonoCaja: {
        type: Number
    },
    telefonoAdmin: {
        type: Number
    },
    contactos:
    {
        type: [ContactoSchema]
    },
    estado:{
        type:Boolean,
        default:true
      }

});

module.exports = model('Hospital',HospitalSchema);