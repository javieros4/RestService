const { Router } = require("express");
const { check } = require("express-validator");
const { emailExist,
  } = require("../helpers/db.Validators");

const {login } = require('../controllers/auth.controller');
const { validarCampos } = require("../middlewares/validar.campos");

const router = Router();

router.post('/login',[
 check('email','El email no es valido').isEmail(),
 check('password', 'la contraseña es requerida').not().isEmpty(),
 validarCampos

],login);

module.exports = router;
