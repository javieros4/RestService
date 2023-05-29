const { Router } = require("express");
const {
    direccionDelete,
    direccionPost,
    direccionPut ,
    direccionIdGet,
} = require("../controllers/Direccion.controller");
const { validarJWT } = require('../middlewares/valid-jwt')
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar.campos");
const {
  
    direccionExistById
} = require("../helpers/db.Validators");


const router = Router();


router.post('/',[
    check("calle", "La calle es requerida").not().isEmpty(),
    check("numExt", "El numExt es requerido").not().isEmpty(),
    validarCampos
],direccionPost);

router.delete('/id',[
    check("id", "No es un ID valido").isMongoId(),
    check("id").custom(direccionExistById),
    validarCampos,
],direccionDelete);

router.get('/id',[
    check("id", "No es un ID valido").isMongoId(),
    check("id").custom(direccionExistById),
    validarCampos,
],direccionIdGet);

router.put('/',[
    check("calle", "La calle es requerida").not().isEmpty(),
    check("numExt", "El numExt es requerido").not().isEmpty(),
    validarCampos
],direccionPut);


module.exports = router;