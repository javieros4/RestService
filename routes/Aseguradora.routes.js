const { Router } = require("express");
const {contactoDelete,contactoPost,contactonPut,contactoIdGet} = require("../controllers/Contacto.controller");
const { validarJWT } = require('../middlewares/valid-jwt')
const { validarCampos } = require("../middlewares/validar.campos");
const { check } = require("express-validator");
const {        
    contactoExistById,
    ValidTipoContacto
} = require("../helpers/db.Validators");

const router = Router();

router.post('/', [

],
)



module.exports = router;