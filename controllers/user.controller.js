const { response } = require("express");
const bcryptjs = require("bcryptjs");
const Usuario = require("../models/usuario");
const DataHash =require('../helpers/data.Hash');
const usuario = require("../models/usuario");

const userGet = async(req, res = response) => {
  //const { q, nombre, edad } = req.query;
  const query ={estado:true}
  const { limit =5 , begin=0} = req.query;
  // const usuarios = await Usuario.find({estado:true})
  // .skip(Number(begin))
  // .limit(Number(limit));

  // const NumRegistros = await Usuario.countDocuments(query);

  const [NumRegistros,usuarios] = await Promise.all([
    Usuario.countDocuments(query),
    Usuario.find({estado:true})
  .skip(Number(begin))
  .limit(Number(limit))
  ]);

  res.json({
    msg: "get API-controller",
    NumRegistros,
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

  const resp = await Usuario.findByIdAndUpdate(id,resto,{new: true}  );

  res.json({
    msg: "put API-controller",
    resp
  });
};

const userDelete =async (req, res = response) => {
  const { id } = req.params;
  const { _id,password, google,email,...resto } = req.body;

  //borrado fisico 
  //const usuario = await Usuario.findByIdAndDelete(id);

  //borrado logico
  const usuario = await Usuario.findByIdAndUpdate(id,{estado:false},{new:true});

  res.json({
    msg: "Delete API-controller",
    usuario
  });
};

module.exports = {
  userGet,
  userDelete,
  userPost,
  userPut,
};
