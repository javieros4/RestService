const { Schema, model } = require("mongoose");

const PersonaSchema = Schema({
    nombre: {
        type:String,
        require:[true,'El nombre es requerido']
    },
    apellidoPaterno: {
        type:String,
        require:[true,'El apellido Paterno es requerido']
    },
    apellidoMaterno: {
        type:String,
        require:[true,'El apellido Materno es requerido']
    },
    rfc:{
        type:String,
    },
     contacto: {
         type: Schema.ObjectId,
         ref: 'Contacto'
     },
     estado:{
        type:Boolean,
        default:true
      }
    
});

PersonaSchema.methods.toJSON = function () {
    const { __v,...persona } = this.toObject();
    persona.uid = _id;
    return persona;
  };

module.exports = model('Persona',PersonaSchema); 