
const { response } = require("express");
const Usuario = require('../models/Usuario')
const bcryptjs = require("bcryptjs");
const { generarJWT } = require("../helpers/generar-jwt-js");

const login = async (req, res = response) => {
    const { email, password } = req.body;
    try {

        //verificar si existe el correo 
        const usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return res.status(400).json({
                msg: 'usuario /Password no son correctos usuario'
            })
        }


        // verificar si el usuario esta activo 
        if (!usuario.estado) {
            return res.status(400).json({
                msg: 'usuario /Password no son correctos usuario estado:false'
            })
        }

        // verificar contraseña 
        const validaPassword = bcryptjs.compareSync(password, usuario.password);
        if(!validaPassword)
        {
            return res.status(400).json({
                msg: 'usuario /Password no son correctos usuario password fail'
            });
        }


        //generar  JWT
        const token = await generarJWT(usuario.id)



        res.json({
            msg: 'login'
        })

    }
    catch (error) {
        return res.status(500).json({
            msg: 'error consulte a su adminstadors'
        })
    }




};


module.exports = { login };