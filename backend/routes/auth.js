const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../Controllers/auth');
const {validarCampos} = require('../middlewares/validar-campos');


// router.post('/new', [

//     check('name', 'El nombre es obligatorio').not().isEmpty(),
//     check('email', 'El email es obligatorio').isEmail(),
//     check('password').isLength({min: 6}),
//     validarCampos
// ],crearUsuario);

router.post('/register', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password').isLength({ min: 6 }),
    validarCampos,
  ], crearUsuario);

  router.post('/login', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos,
  ], loginUsuario);
  
  router.get('/renew', validarCampos, revalidarToken);

module.exports = router;