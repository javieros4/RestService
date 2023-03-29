const { response } = require("express");

const userGet = (req, res = response) => {
    const {q,nombre,edad} = req.query;
  res.json({
    msg: "get API-controller",
    q,
    nombre,
    edad
  });
};

const userPost = (req, res = response) => {
    const {Nombre,Edad} = req.body;
    console.log(Nombre,Edad);
    res.json({
      msg: "Post API-controller",
      Nombre,
      Edad
    });
  };

  const userPut = (req, res = response) => {
    const id = req.params.id;
    res.json({
      msg: "put API-controller",
      id
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
  userPut
};
