// src/routes/user.js
const express = require('express');
const router = express.Router();
const {createUser, updateUser, deleteUser} = require('./crear.controller');
const upload = require('../config/multer');


// Ruta para crear un nuevo usuario
router.post('/', upload.single('foto'), createUser);
router.put('/:nroDocumento', updateUser);
router.delete('/:nroDocumento', deleteUser);

module.exports = router;
