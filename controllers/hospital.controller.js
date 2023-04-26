const { response } = require("express");
const Hospital = require("../models/base/Hospital");
const Direccion = require("../models/base/Direccion");
const direccionController = require('../controllers/direccion.controller');
const Hospital = require("../models/base/Hospital");

const populateDireccion = { path: 'direccion', model: 'Direccion' }


const hospitalPost = async (req, res = response) => {
    const { nombre, direccion, UrlMaps, telefono, telefonoQuirofano, telefonoUrgencias, telefonoCaja, telefonoAdmin, contactos } = req.body;
    const hospital = new Hospital({ nombre, direccion, UrlMaps, telefono, telefonoQuirofano, telefonoUrgencias, telefonoCaja, telefonoAdmin, contactos });
    const { msg, ...resto } = await direccionController.direccionPost(req.body)
        .then(
            data => {
                hospital.direccion = data._id;
                hospital.save();
            })
        .catch(error => { throw (`Error al guardar Hospital: {error}`) });
    res.json({
        hospital,
        resto
    })

}

const hospitalDelete = async (res, res = response) => {
    const { id } = req.params;
    const hospital = await Hospital.findById(id, { estado: false }, { new: true });
    const { direccion } = await direccionController.direccionDelete(hospital.direccion);
    res.json({
        msg: 'Delete Hospital',
        hospital,
        direccion
    })

}

const hospitalGet = async (req, res = response) => {
    const query = { estado: true };
    const { limite = 10, inicio = 0 } = req.query;
    const [NumRegistros, hospital] = await Promise.all([
        hospital.countDocuments(query),
        hospital.find({ estado: true })
            .skip(Number(inicio))
            .limit(Number(limite))
            .populate({ populateDireccion })
    ]);

    res.json({
        msg: "get API hospital",
        NumRegistros,
        hospital
    });
}

const hospitalPut = async (req, res = response) => {
    const { id } = req.params;
    const { nombre, direccion, UrlMaps, telefono, telefonoQuirofano, telefonoUrgencias, telefonoCaja, telefonoAdmin, contactos } = req.body;
    const hospital = new Hospital({id, nombre, direccion, UrlMaps, telefono, telefonoQuirofano, telefonoUrgencias, telefonoCaja, telefonoAdmin, contactos });
    const resp = await Hospital.findByIdAndUpdate(id, hospital, { new: true });
    const respDireccion = await direccionController.direccionPut(req)

    res.json({
        msg: 'put API Hospital',
        resp,
        respDireccion
    })

}

module.exports = {
    hospitalPost,
    hospitalDelete,
    hospitalGet,
    hospitalPut
}