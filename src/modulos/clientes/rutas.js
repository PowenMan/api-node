const express = require('express');

const respuesta = require('../../red/respuestas');
const controlador = require('./controlador');

const router = express.Router();

router.get('/', todos);
router.get('/:id', uno);

async function todos(req, res) {
    try{
        const item = await controlador.todos();
        respuesta.success(req, res, item, 200);
    }catch(err){
        respuesta.error(req, res, err, 500);
    }
}

async function uno(req, res) {
    try{
        const item = await controlador.uno();
        respuesta.success(req, res, item, 200);
    }catch(err){
        respuesta.error(req, res, err, 500);
    }
}

module.exports = router;