const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    persona:{
        type:Schema.ObjectId, 
        ref:'Persona',
        require:[true,'Los datos personales son necesarios']        

    },
    roles:{
        type:Schema.ObjectId, 
        ref:'Role',
        require:[true,'Es requerido al menos un rol ']
    },
    email: {
        type: String,
        require: [true, "El email es requerido"],
        unique: true,
      },
      password: {
        type: String,
        require: [true, "La contraseña es requerida"],
      },
      img: {
        type: String,
      },
      google: {
        type: Boolean,
        default: false,
      },
      estado:{
        type:Boolean,
        default:true
      }

});

module.exports = model('Usuario',UsuarioSchema)