const express = require('express')
const router = express.Router();
const { validarJWT } = require('../middlewares/validar-token');
const { listarTasks, crearTask, actualizarTask, eliminarTask } = require('../Controllers/Task.js');

router.use( validarJWT)

router.get('/', listarTasks)
router.post('/', crearTask)
router.put('/:taskId', actualizarTask)
router.delete('/:taskId', eliminarTask)

module.exports = router;