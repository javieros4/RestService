const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
  nombre: {
    type: String,
    require: [true, "El nombre es requerido"],
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
  rol: {
    type: String,
    require: [true],
    enum: ["ADMIN_ROLE", "USER_ROLE"],
  },
  google: {
    type: Boolean,
    default: false,
  },
});

UsuarioSchema.methods.toJSON = function () {
  const { __v, password, ...usuario } = this.toObject();
  return usuario;
};

module.exports = model("Usuario", UsuarioSchema);
