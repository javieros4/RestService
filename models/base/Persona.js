const { Schema, model } = require("mongoose");
const TipoContacto = mongoose.model('TipoContacto');

const PersonaSchema = Schema({
    tipoContacto: {
        type: Schema.ObjectId,
        ref: 'TipoContacto'
    },
    telefono: {
        type: Number
    },
    email: {
        type: String
    }
});

module.exports = model('Persona',PersonaSchema);