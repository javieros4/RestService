const { Router } = require("express");
const {
  userGet,
  userDelete,
  userPut,
  userPost,
} = require("../controllers/user.controller");
const { check } = require("express-validator");

//impor rol from bd

const Rol = require("../models/rol");

const { validarCampos } = require("../middlewares/validar.campos");

const router = Router();

router.get("/", userGet);

router.post(
  "/",
  [
    check("nombre", "El nombre no obligatorio").not().isEmpty(),
    check("password", "El password debe de ser más de 6 letras").isLength({
      min: 6,
    }),
    check("correo", "El correo no es valido").isEmail(),
    //check('rol','No es un rol permitido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check("rol").custom(async (rol = '') => {
    const existRol = await Rol.findOne({rol});
      if(!existRol)
      throw new Error(`El rol ${rol} no esta registrado en la BD`);
    }),
    validarCampos,
  ],
  userPost
);

router.delete("/", userDelete);

router.put("/:id", userPut);

module.exports = router;
