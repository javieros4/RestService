const  { Router} = require('express');
const { personaPost} = require('../controllers/personas.controller')
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar.campos");
const router = Router();

router.post('/',[

],
personaPost
);

