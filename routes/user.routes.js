const { Router } = require("express");
const {
  userGet,
  userDelete,
  userPut,
  userPost,
} = require("../controllers/user.controller");
const { check } = require("express-validator");

const { validarCampos } = require("../middlewares/validar.campos");
const {
  ValidRol,
  emailExist,
  userExistById,
} = require("../helpers/db.Validators");

const router = Router();

router.get("/", userGet);

router.post(
  "/",
  [
    check("nombre", "El nombre no obligatorio").not().isEmpty(),
    check("password", "El password debe de ser más de 6 letras").isLength({
      min: 6,
    }),
    // check("email", "El email no es valido").isEmail(),
    check("email").custom(emailExist),
    //check('rol','No es un rol permitido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check("rol").custom(ValidRol),
    validarCampos,
  ],
  userPost
);

router.delete("/:id", 
check("id", "No es un ID valido").isMongoId(),
check("id").custom(userExistById),
validarCampos,
userDelete);

router.put(
  "/:id",
  [
    check("id", "No es un ID valido").isMongoId(),
    check("id").custom(userExistById),
    check("rol").custom(ValidRol),
    validarCampos,
  ],
  userPut
);

module.exports = router;
