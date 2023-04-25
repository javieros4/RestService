const { response } = require("express");
const Direccion = require("../models/base/Direccion");

const crearActualizaDireccion = async (direccion) => {
    try {
        const { calle, numExt, numInt, colonia, delegacion, municipio, CP, ref1, ref2 } = direccion
        const direccion = new Direccion({ calle, numExt, numInt, colonia, delegacion, municipio, CP, ref1, ref2 });
        direccion.save();     
        return direccion;
    }
    catch(error)
    {
        return error;
    }
}


module.exports ={crearActualizaDireccion }