const { response } = require("express");
const Hospital = require("../models/base/Hospital");
const DireccionHospital = require("../models/base/Direccion");
const Hospital = require("../models/base/Hospital");

const hospitalPost = async (res, res = response) => {

    const { nombre, direccion, UrlMaps, telefono, telefonoQuirofano, telefonoUrgencias, telefonoCaja, telefonoAdmin, contactos } = req.body;
const {calle,numExt,numInt,colonia,delegacion,municipio,CP,ref1,ref2} = req.body;

const hospital = new Hospital({nombre, direccion, UrlMaps, telefono, telefonoQuirofano, telefonoUrgencias, telefonoCaja, telefonoAdmin, contactos});
const DireccionHospital = new  DireccionHospital({calle,numExt,numInt,colonia,delegacion,municipio,CP,ref1,ref2});





}