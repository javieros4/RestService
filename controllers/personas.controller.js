const { response } = require("express");
const bcryptjs = require("bcryptjs");
const Persona = require("../models/base/Persona");
const Contacto = require("../models/base/Contacto");

const personaPost = async(req,res = response) => {
    const { nombre,apellidoPaterno,apellidoMaterno,rfc} = req.body;
    const persona = new Persona({nombre,apellidoPaterno,apellidoMaterno,rfc})

    await persona.save();
    res.json({
        persona
    })

}

module.exports ={
    personaPost

}
