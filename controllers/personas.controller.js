const { response } = require("express");
const bcryptjs = require("bcryptjs");
const Persona = require("../models/base/Persona");
const Contacto = require("../models/base/Contacto");

const personaPost = async(req,res = response) => {
    const { nombre,apellidoPaterno,apellidoMaterno,rfc,tipoContacto,telefono,email} = req.body;
    const contacto = new Contacto({tipoContacto,telefono,email})
    const persona = new Persona({nombre,apellidoPaterno,apellidoMaterno,rfc})
await contacto.save();
persona.contacto = contacto._id;
    await persona.save();
    res.json({
        persona,
        contacto
    })

}

module.exports ={
    personaPost

}


