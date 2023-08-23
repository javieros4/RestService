const Rol = require("../models/rol");
const TipoContacto = require("../models/enums/TipoContacto");
const Usuario = require("../models/Usuario");
const Persona = require('../models/base/Persona');
const Hospital = require("../models/base/Hospital");
const Direccion = require("../models/base/Direccion");
const Contacto = require("../models/base/Contacto");
const Aseguradora = require("../models/Aseguradora");

const ValidRol = async (rol = "") => {
  const existRol = await Rol.findOne({ rol });
  if (!existRol) {
    throw new Error(`El rol ${rol} no esta registrado en la BD`);
  }
};

const ValidTipoContacto = async (tipoContacto = "") => {
  const id = tipoContacto;
  const existTipoContacto = await TipoContacto.findById({ _id: id });
  if (!existTipoContacto) {
    throw new Error(`El tipo de contacto no esta registrado en la BD`);
  }
};

const emailExist = async (email = "") => {
  const exist = await Usuario.findOne({ email });
  if (exist) {
    throw new Error(`El email ${email} ya esta registrado  en la BD`);
  }
};

const userExistById = async (id) => {
  const exist = await Usuario.findById(id);
  if (!exist) {
    throw new Error(`El ID de usuario ${id} no existe en la BD`);
  }
};
const personaExistById = async (id) => {
  const exist = await Persona.findById(id);
  if (!exist) {
    throw new Error(`El ID de persona  ${id} no existe en la BD`);
  }
};


const hospitalExistById = async (id) => {
  const exist = await Hospital.findById(id);
  if (!exist) {
    throw new Error(`El ID de Hospital ${id} no existe en la BD`);
  }
};

const direccionExistById = async (id) => {
  const exist = await Direccion.findById(id);
  if (!exist) {
    throw new Error(`El ID de direccion  ${id} no existe en la BD`);
  }
};

const contactoExistById = async (id) => {
  const exist = await Contacto.findById(id);
  if (!exist) {
    throw new Error(`El ID de contacto  ${id} no existe en la BD`);
  }
};


const aseguradoraExistById = async (id) =>{
  const exist = await Aseguradora.findById(id);
  if(!exist){
    throw new Error(`El ID de aseguradora ${id} no existe en la BD`);
  }
};


module.exports = {
  ValidRol,
  emailExist,
  userExistById,
  ValidTipoContacto,
  personaExistById,
  hospitalExistById,
  direccionExistById,
  contactoExistById,
  aseguradoraExistById
};
