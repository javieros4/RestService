const { Router } = require("express");
const {aseguradoraByIdGet,aseguradoraDelete,aseguradoraPut, aseguradoraPost, aseguradorasGet} = require("../controllers/Aseguradora.controller");
const { validarJWT } = require('../middlewares/valid-jwt')
const { validarCampos } = require("../middlewares/validar.campos");
const { check } = require("express-validator");
const {        
    aseguradoraExistById,
} = require("../helpers/db.Validators");
const { route } = require("./personas.routes");

const router = Router();

router.post('/', [
    validarCampos,  
], aseguradoraPost);

router.delete('/',[
check("id", "No es un Id valida").isMongoId(),
check("id").custom(aseguradoraExistById),
validarCampos,
], aseguradoraDelete);

router.put('/id',[
    validarCampos,
], aseguradoraPut);

router.get('/:id',[
    check("id", "El identificador para la aseguradora no es valido "),
    validarCampos
], aseguradoraByIdGet);


router.get('/',[    
], aseguradorasGet);

module.exports = router;