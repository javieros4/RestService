const { response } = require("express");
const Aseguradora = require("../models/Aseguradora");
const Contacto = require("../models/base/Contacto")
const contactoController = require("./Contacto.controller");
const Persona = require("../models/base/Persona");

const aseguradoraPost = async (req, res = response) => {
    const { nombre,  estado } = req.body;
    const aseguradora = new Aseguradora({ nombre,  estado });

    // const { msg, ...resto } = await contactoController.contactoPost(req.body)
    //     .then(
    //         data => {
    //             aseguradora.Contacto.data._id;
    //             aseguradora.save();

    //         })
    //     .catch(error => { throw (`Error al guardar Aseguradora: {error}`) });
    res.json({
        aseguradora,
        
    })
};

const aseguradoraDelete = async (req, res = response) => {
    const { id } = req.params;
    const aseguradora = await Aseguradora.findByIdAndUpdate(id, { estado: false }, { new: true });
   // const { constacto } = await contactoController.contactoDelete(aseguradora.contacto);
    res.json({
        msg: 'Aseguradora Borrada',
        aseguradora,
    })
}

const aseguradorasGet = async (req, res = response) => {
    const query = { estado: true };
    const { limite = 10, inicio = 0 } = req.query;
    const [NumRegistros, aseguradoras] = await Promise.all([
        Aseguradora.countDocuments(query),
        Aseguradora.find({ estado: true })
            .skip(Number(inicio))
            .limit(Number(limite))
    ]);
    res.json({
        msg: " Obtener Aseguradoras",
        NumRegistros,
        aseguradoras
    })
}

const aseguradoraByIdGet = async (req, res = response) => {
    const { id } = req.params
    const resp = await Aseguradora.findById([id]);
    res.json({
        msg: "Obtiene Aseguradora",
        resp,
    });

}

const aseguradoraPut = async (req, res = response) => {
const {id} = req.params;
const { nombre } = req.body;
const aseguradora = new Aseguradora({nombre});
const resp = await Aseguradora.findByIdAndUpdate(id, aseguradora,{new:true});
res.json({
    msg:'put Api Aseguradora',
    resp
})


}

module.exports = {
    aseguradoraPost,
    aseguradoraDelete,
    aseguradorasGet,
    aseguradoraByIdGet,
    aseguradoraPut,
}