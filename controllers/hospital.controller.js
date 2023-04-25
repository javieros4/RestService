const { response } = require("express");
const Hospital = require("../models/base/Hospital");
const Direccion = require("../models/base/Direccion");
const direccionController = require('../controllers/direccion.controller');
const Hospital = require("../models/base/Hospital");


const hospitalPost = async (req, res = response) => {
    const { nombre, direccion, UrlMaps, telefono, telefonoQuirofano, telefonoUrgencias, telefonoCaja, telefonoAdmin, contactos } = req.body;
    const hospital = new Hospital({ nombre, direccion, UrlMaps, telefono, telefonoQuirofano, telefonoUrgencias, telefonoCaja, telefonoAdmin, contactos });
    const direccionHospital = await direccionController.crearActualizaDireccion(req.body)
        .then(
            data => {
                hospital.direccion = data._id;
                hospital.save();
            })
        .catch(error => { throw (`Error al guardar Hospital: {error}`) });
    res.json({
        hospital,
        direccionHospital
    })

}

const hospitalDelete = async (res,res = response)  =>{
    const {id} = req.params;
    const hospital = await Hospital.findById(id, {estado:false}, {new:true});
    res.json({
        msg:'Delete Hospital',
        hospital
    })

}

const hospitalGet = async (req,res = response) => {

    const query = { estado: true };
    const { limite = 10, inicio = 0 } = req.query;
    const [NumRegistros, hospital] = await Promise.all([
        hospital.countDocuments(query),
        hospital.find({ estado: true })
            .skip(Number(inicio))
            .limit(Number(limite))
    ]);

    res.json({
        msg: "get API hospital",
        NumRegistros,
        hospital
    });
}

module.exports = {
    hospitalPost,
    hospitalDelete,
    hospitalGet
}