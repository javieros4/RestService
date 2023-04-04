const { response } = require("express");
const bcryptjs = require("bcryptjs");
const Usuario = require("../models/usuario");




const userGet = (req, res = response) => {
  const { q, nombre, edad } = req.query;
  res.json({
    msg: "get API-controller",
    q,
    nombre,
    edad,
  });
};

const userPost = async (req, res = response) => {
  //const {googel ... resto}= req.body;

  const { nombre, correo, password, rol } = req.body;
  const usuario = new Usuario({ nombre, correo, password, rol });


  //Vericiar si el correo existe
    const exist =  await Usuario.findOne({correo});
    if(exist)
    {return res.status(400).json({msg:"El correo ya esta registrado"});}

  //escriptar password
  const salt = bcryptjs.genSaltSync(11);
  usuario.password= bcryptjs.hashSync(password,salt);

  //guardar en bd
  await usuario.save();

  res.json({
    msg: "Post API-controller",
    usuario,
  });
};

const userPut = (req, res = response) => {
  const id = req.params.id;
  res.json({
    msg: "put API-controller",
    id,
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