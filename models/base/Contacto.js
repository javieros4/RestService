const { Schema, model } = require("mongoose");
//const TipoContacto = mongoose.model('TipoContacto');


const ContactoSchema = Schema({
    tipoContacto: {
        type: Schema.ObjectId,
        ref: "TipoContacto"
    },
    telefono: {
        type: Number,
    },
    email: {
        type: String,
       
    }

});

ContactoSchema.methods.toJSON = function () {
    const { __v, ...contacto } = this.toObject();
    return contacto;
  };

module.exports = model('Contacto', ContactoSchema)