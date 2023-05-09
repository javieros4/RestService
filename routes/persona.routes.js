const { Router } = require('express');
const { personaPost, personaGet, personaDelete, personaPut,personaByContactoGet } = require('../controllers/persona.controller')
const { check } = require("express-validator");

const {validarJWT} = require('../middlewares/valid-jwt')
const { validarCampos } = require("../middlewares/validar.campos");
const {
  ValidRol,
  emailExist,
  userExistById,
  ValidTipoContacto,
  personaExistById
} = require("../helpers/db.Validators");

const router = Router();

router.post('/',
  [
    check("nombre", "El nombre es requerido").not().isEmpty(),
    check("apellidoPaterno", "El nombre es requerido").not().isEmpty(),
    check("apellidoMaterno", "El nombre es requerido").not().isEmpty(),
    check("telefono", "El numero telefonico tiene que tener 10 digitos").isNumeric().isLength({ max: 10 }),
    check("email").isEmail(),
    check("tipoContacto", "El identificador para el tipo de contacto no es valido").isMongoId(),
    check("tipoContacto").custom(ValidTipoContacto),
    validarCampos,
  ],
  personaPost);

router.get("/",personaGet);

router.get("/:id",[
  check("tipoContacto", "El identificador para el tipo de contacto no es valido").isMongoId(),
    check("tipoContacto").custom(ValidTipoContacto),
    validarCampos,
],personaExistById);

router.delete("/:id",
[
  check("id","No es un ID valido").isMongoId(),
  check("id").custom(personaExistById),
  validarCampos,
],
personaDelete);


router.put('/',
  [
    check("nombre", "El nombre es requerido").not().isEmpty(),
    check("apellidoPaterno", "El nombre es requerido").not().isEmpty(),
    check("apellidoMaterno", "El nombre es requerido").not().isEmpty(),
    check("telefono", "El numero telefonico tiene que tener 10 digitos").isNumeric().isLength({ max: 10 }),
    check("email").isEmail(),
    check("tipoContacto", "El identificador para el tipo de contacto no es valido").isMongoId(),
    check("tipoContacto").custom(ValidTipoContacto),
    validarCampos,
  ],
  personaPut
);

module.exports = router;
