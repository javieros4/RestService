const { Router } = require("express");

const { 
     hospitalDelete,
     hospitalGet, 
     hospitalPost, 
     hospitalPut
} = require("../controllers/hospital.controller");
const { check } = require("express-validator");
//const { validarJWT } = require('../middlewares/valid-jwt')
const { validarCampos } = require("../middlewares/validar.campos");
const {
    personaExistById
} = require("../helpers/db.Validators");


const router = Router();

router.post('/',
    [
        check("nombre", "El nombre es requerido").not().isEmpty(),
        check("direccion", "El identificador para el tipo de contacto no es valido").isMongoId(),
        //check("direccion", "El identificador para el tipo de contacto no es valido").isMongoId(),
        validarCampos
    ],
    hospitalPost);

router.get('/', hospitalGet);

router.delete('/', [
    check("id", "No es un ID valido").isMongoId(),
    check("id").custom(personaExistById),
    validarCampos,]
    , hospitalPut);

router.put('/id', [
    check("nombre", "El nombre es requerido").not().isEmpty(),
    check("direccion", "El identificador para el tipo de contacto no es valido").isMongoId(),
    //check("direccion", "El identificador para el tipo de contacto no es valido").isMongoId(),
    validarCampos
], hospitalDelete);

module.exports = router;