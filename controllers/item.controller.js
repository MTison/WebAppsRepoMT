import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';
var express = require('express');
var router = express.Router();
var itemService = require('../services/item.service');

// routes
router.post('/create', create);
router.get('/', getAll);
router.get('/current/:_id', getById);
router.put('/:_id', update);
router.delete('/:_id', _delete);

module.exports = router;

function create(req,res) {
    itemService.create(req.body)
        .then(function() {
            res.sendStatus(200);
        }).catch(function() {
            res.status(400).sendStatus(err);
        });
}

function getAll(req,res) {
    itemService.getAll()
        .then(function(items) {
            res.send(items);
        }).catch(function() {
            
        });
}

function getById(req, res) {
    itemService.getById(req.params._id)
        .then(function (item) {
            if (item) {
                res.send(item);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function update(req, res) {
    itemService.update(req.params._id, req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function _delete(req, res) {
    itemService.delete(req.params._id)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}