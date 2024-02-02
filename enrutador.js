const express = require('express');
const router = express.Router();
const manejador = require('./manejador.js');

router.get('/', (req, res) => {
    manejador.root(res, '/index.html');
});

router.get('/index', (req, res) => {
    manejador.root(res, '/index.html');
});

router.get('/desarrollo', (req, res) => {
    manejador.root(res, '/desarrollo.html');
});

router.get('/portfolio', (req, res) => {
    manejador.root(res, '/portfolio.html');
});

router.get('/contacto', (req, res) => {
    manejador.root(res, '/contacto.html');
});

router.get('*', (req, res) => {
    manejador.root(res, '/404.html');
});

module.exports = router;