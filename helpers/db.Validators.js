const Rol = require("../models/rol");
const Usuario = require("../models/usuario"); 

const ValidRol = async (rol = '') => {
  const existRol = await Rol.findOne({ rol });
  if (!existRol) {
    throw new Error(`El rol ${rol} no esta registrado en la BD`);
  }
};

const emailExist = async (email = '') => {
  const exist = await Usuario.findOne({ email });
  if (exist) {
    throw new Error(`El email ${email} ya esta registrado  en la BD`);
  }
};

module.exports = {
  ValidRol,
  emailExist
};
