const { Router } = require("express");
const {contactoDelete,contactoPost,contactonPut,contactoIdGet} = require("../controllers/contacto.controller");
const { validarJWT } = require('../middlewares/valid-jwt')
const { validarCampos } = require("../middlewares/validar.campos");
const {        
    contactoExistById
} = require("../helpers/db.Validators");


const router = Router();


router.post('/',[
    check("tipoContacto","El identificador para el tipo de contacto no es valido"),
    check("tipoContacto").custom(ValidTipoContacto),
    validarCampos,
],contactoPost);

router.delete('/',[
    check("id", "No es un ID valido").isMongoId(),
    check("id").custom(contactoExistById),
    validarCampos,
],contactoDelete);

router.put('/id',[
    check("tipoContacto","El identificador para el tipo de contacto no es valido"),
    check("tipoContacto").custom(ValidTipoContacto),
    validarCampos,
],contactonPut);

router.get('/:id',[
    check("id","El identificador para el tipo de contacto no es valido"),
    validarCampos,
],contactoIdGet);