const { response } = require("express");
const Direccion = require("../models/base/Direccion");

const direccionPost = async (req,res = response) => {
    try {
        const { calle, numExt, numInt, colonia, delegacion, municipio, CP, ref1, ref2 } = direccion
        const direccion = new Direccion({ calle, numExt, numInt, colonia, delegacion, municipio, CP, ref1, ref2 });
        direccion.save();
        res.json({
            msg:'post API Direccion',
            direccion
        })
    }
    catch (error) {
        return error;
    }
}

const direccionDelete = async (res, res = response) => {
    const { id } = req.params;
    const direccion = await Direccion.findById(id, { estado: false }, { new: true });
    res.json({
        msg: 'Delete Hospital',
        direccion
    });
}

const direccionPut = async (req,res = response) => {   
    const { id,calle, numExt, numInt, colonia, delegacion, municipio, CP, ref1, ref2 } = req.body;
    const direccion = new Direccion({ id,calle, numExt, numInt, colonia, delegacion, municipio, CP, ref1, ref2 });    
        const resp  = await Direccion.findByIdAndUpdate(req.id, req, {new:true});
        res.json({
            msg:'put API Direccion',
            resp
        })    
}


module.exports = {
    direccionPost,
    direccionDelete,
    direccionPut
}