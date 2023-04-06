const { Schema, model } = require("mongoose");
const TipoContacto = mongoose.model('TipoContacto');


const ContactoSchema = Schema({
    tipoContacto: {
        type: Schema.ObjectId,
        ref: "TipoContacto"
    },
    telefono: {
        type: Number,
        unique: true
    },
    email: {
        type: String,
        unique: true
    }

});

module.exports = model('Contacto', ContactoSchema)