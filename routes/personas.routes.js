const  { Router} = require('express');
const { personaPost} = require('../controllers/personas.controller')
const { check } = require("express-validator");

const { validarCampos } = require("../middlewares/validar.campos");
const {
    ValidRol,
    emailExist,
    userExistById,
  } = require("../helpers/db.Validators");

const router = Router();

router.post('/',
[
check("nombre", "El nombre es requerido").not().isEmpty(),
check("apellidoPaterno", "El nombre es requerido").not().isEmpty(),
check("apellidoMaterno", "El nombre es requerido").not().isEmpty(),
//check("tipoContacto").custom(ValidTipoContacto),
check("telefono","El numero telefonico tiene que tener 10 digitos").isNumeric().isLatLong({min:10}),
check("email").isEmail(),
    validarCampos,
],
personaPost
);

module.exports = router;
