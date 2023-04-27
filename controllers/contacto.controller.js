const { response } = require("express");
const Contacto = require('../models/base/Contacto')

const contactoPost = async (req, res = response) => {
    const { calle, numExt, numInt, colonia, delegacion, municipio, CP, ref1, ref2 } = req.body;
    const contacto = new Contacto({ calle, numExt, numInt, colonia, delegacion, municipio, CP, ref1, ref2 });
    contacto.save();
    res.json({
        msg: 'post API contacto ',
        contacto
    });
}

const contactoIdGet = async (req, res = response) => {
    const { id } = req.params;
    const contacto = await Contacto.findById(id);
    res.json({
        msg: 'get API contacto',
        contacto
    });
}

const contactoDelete = async (res, res = response) => {
    const { id } = req.params;
    const contacto = await Contacto.findById(id, { estado: false }, { new: true });
    res.json({
        msg: 'Delete API  contacto',
        contacto
    });
}


const contactonPut = async (req, res = response) => {
    const { id } = req.params;
    const { calle, numExt, numInt, colonia, delegacion, municipio, CP, ref1, ref2 } = req.body;
    const contacto = new Contacto({ calle, numExt, numInt, colonia, delegacion, municipio, CP, ref1, ref2 });
    const resp = await Direccion.findByIdAndUpdate(id, contacto, { new: true });
    res.json({
        msg: 'put API Direccion',
        resp
    })
}

module.exports = {
    contactoPost,
    contactoIdGet,
    contactoDelete,
    contactonPut,
}