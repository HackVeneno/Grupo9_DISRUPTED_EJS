const express = require('express');
const productosController = require('../controller/productos.controller');
const router = express.Router();

router.get('/', productosController.productos);

module.exports = router;