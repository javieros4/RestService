const { Router } = require("express");
const {
  userGet,
  userDelete,
  userPut,
  userPost,
} = require("../controllers/user.controller");

const router = Router();

router.get('/', userGet);

router.post('/', userPost);

router.delete('/', userDelete);

router.put('/:id', userPut);

module.exports = router;
