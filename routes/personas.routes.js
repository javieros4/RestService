const  { Router} = require('express');
const { personaPost} = require('../controllers/personas.controller')
const { check } = require("express-validator");

const { validarCampos } = require("../middlewares/validar.campos");
const {
    ValidRol,
    emailExist,
    userExistById,
    ValidTipoContacto
  } = require("../helpers/db.Validators");
const { isObjectIdOrHexString } = require('mongoose');

const router = Router();

router.post('/',
[
check("nombre", "El nombre es requerido").not().isEmpty(),
check("apellidoPaterno", "El nombre es requerido").not().isEmpty(),
check("apellidoMaterno", "El nombre es requerido").not().isEmpty(),
//check("tipoContacto").custom(ValidTipoContacto),
check("telefono","El numero telefonico tiene que tener 10 digitos").isNumeric().isLength({max:10}),
check("email").isEmail(),
check("tipoContacto", "El identificador para el tipo de contacto no es valido").isMongoId(),
check("tipoContacto").custom(ValidTipoContacto),
    validarCampos,
],
personaPost
);

// router.delete('/id',[],personaDelete)

module.exports = router;
