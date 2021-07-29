const express = require('express');
const { verifySignUp } = require("../app/middlewares");
const router = express.Router();

const AuthController = require('../app/controllers/AuthController');

//newsController.index
router.post( '/signup',
[
  verifySignUp.checkDuplicateUsernameOrEmail,
  verifySignUp.checkRolesExisted
],
AuthController.signup);
router.post("/signin", AuthController.signin);

//router.get('/', coursesController.index);
module.exports = router;