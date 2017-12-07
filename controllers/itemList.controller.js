var express = require('express');
var router = express.Router();
var itemListService = require('../services/itemList.service');

// routes
router.post('/create', create);
router.get('/', getAll);
router.get('/current/:_id', getById);
router.put('/:_id', update);
router.delete('/:_id', _delete);

module.exports = router;

function create(req,res) {
    itemListService.create(req.body)
        .then(function() {
            res.sendStatus(200);
        }).catch(function() {
            res.status(400).sendStatus(err);
        });
}

function getAll(req,res) {
    itemListService.getAll()
        .then(function(itemlists) {
            res.send(itemlists);
        }).catch(function(err) {
            res.status(400).send(err);
        });
}

function getById(req, res) {
    itemListService.getById(req.params._id)
        .then(function (itemlist) {
            if (itemlist) {
                res.send(itemlist);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function update(req, res) {
    itemListService.update(req.params._id, req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function _delete(req, res) {
    itemListService.delete(req.params._id)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}