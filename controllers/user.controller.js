const { response } = require("express");
const bcryptjs = require("bcryptjs");
const Usuario = require("../models/usuario");
const DataHash =require('../helpers/data.Hash');
const usuario = require("../models/usuario");

const userGet = async(req, res = response) => {
  //const { q, nombre, edad } = req.query;
  const { limit =5 , begin=0} = req.query;
  const usuarios = await Usuario.find()
  .skip(Number(begin))
  .limit(Number(limit));

  res.json({
    msg: "get API-controller",
    usuarios
  });
};

const userPost = async (req, res = response) => {
  //const {googel ... resto}= req.body;

  const { nombre, email, password, rol } = req.body;
  const usuario = new Usuario({ nombre, email, password, rol });

  usuario.password =DataHash(password);

  //guardar en bd
  await usuario.save();
  res.json({
    msg: "Post API-controller",
    usuario,
  });
};

const userPut = async(req, res = response) => {
  const { id } = req.params;
  const { _id,password, google,email,...resto } = req.body;

  
  //Validar contra BD
  if(password){
    resto.password =DataHash(password);
  }
  const usuario = await Usuario.findByIdAndUpdate(id,resto);

  res.json({
    msg: "put API-controller",
    usuario
  });
};

const userDelete = (req, res = response) => {
  res.json({
    msg: "Delete API-controller",
  });
};

module.exports = {
  userGet,
  userDelete,
  userPost,
  userPut,
};
