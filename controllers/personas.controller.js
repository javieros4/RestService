const { response } = require("express");
const Persona = require("../models/base/Persona");
const Contacto = require("../models/base/Contacto");

const personaPost = async (req, res = response) => {
    const { nombre, apellidoPaterno, apellidoMaterno, rfc, tipoContacto, telefono, email } = req.body;
    const contacto = new Contacto({ tipoContacto, telefono, email })
    const persona = new Persona({ nombre, apellidoPaterno, apellidoMaterno, rfc })
    if (!contacto)
     throw ("error Post Persona");
    persona.contacto = contacto._id;        
    persona.save();
    res.json({
        persona,
        contacto
    })
}

const personaDelete = async (req, res = response) => {
    const { id } = req.params
    const persona = await Persona.findByIdAndUpdate(id, { estado: false }, { new: true });
    res.json({
        msg: "Delete api Persona",
        persona
    });

};

const personaGet = async (req, res = response) => {
    const query = { estado: true };
    const { limite = 10, inicio = 0 } = req.query;
    const [NumRegistros, personas] = await Promise.all([
        Persona.countDocuments(query),
        Persona.find({ estado: true })
            .skip(Number(inicio))
            .limit(Number(limite))
    ]);

    res.json({
        msg: "get API persona",
        NumRegistros,
        personas
    });
};


const personaByContactoGet = async (req, res = response) => {
    const query = { estado: true };
    const { limite = 10, inicio = 0 ,tipoContacto =null} = req.query;
    const [NumRegistros, personas] = await Promise.all([
        Persona.countDocuments(query),
        Persona.find({ estado: true })
            .skip(Number(inicio))
            .limit(Number(limite))
    ]);

    res.json({
        msg: "get API persona",
        NumRegistros,
        personas
    });
};
const personaPut = async (req, res = response) => {
    const { id } = req.params;
    const resp = await Persona.findByIdAndUpdate(id, req.body, { new: true });

    res.json({
        msg: "put API persona",
        resp
    });

};

module.exports = {
    personaPost,
    personaDelete,
    personaGet,
    personaPut,
    personaByContactoGet

}


