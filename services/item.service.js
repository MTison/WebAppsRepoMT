var config = require('../config/database');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.database, { native_parser: true });

db.bind('items');

var service = {};

service.getAll = getAll;
service.getById = getById;
service.create = create;
service.update = update;
service.delete = _delete;

module.exports = service;

function create(itemParam) {
    var deferred = Q.defer();

    // validation
    db.items.findOne(
        { productName: itemParam._productName },
        function (err, item) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            if (item) {
                // item already exists
                deferred.reject('Item "' + itemParam._productName + '" already exists');
            } else {
                createItem(itemParam);
            }
        });

    function createItem(itemParam) {
        db.items.insert(
            itemParam,
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }

    return deferred.promise;
}

function getAll() {
    var deferred = Q.defer();

    db.items.find().toArray(function (err, items) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        deferred.resolve(items);
    });

    return deferred.promise;
}

function getById(_id) {
    var deferred = Q.defer();

    db.items.findById(_id, function (err, item) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (item) {
            // return item
            deferred.resolve(item);
        } else {
            // item not found
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function update(_id, itemParam) {
    var deferred = Q.defer();

    // validation
    db.items.findById(_id, function (err, item) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (item._productName !== itemParam._productName) {
            // username has changed so check if the new username is already taken
            db.items.findOne(
                { productName: itemParam._productName },
                function (err, item) {
                    if (err) deferred.reject(err.name + ': ' + err.message);
        
                    if (item) {
                        // item already exists
                        deferred.reject('Item "' + itemParam._productName + '" already exists');
                    } else {
                        updateItem();
                    }
                });
        } else {
            updateItem();
        }
    });

    function updateItem() {
        //fields to update
        var set = {
            _productName: itemParam._productName,
            _mark: itemParam._mark,
            _productKind: itemParam._productKind,
            _inShops: itemParam._inShops,
        };

        db.items.update(
            { _id: mongo.helper.toObjectID(_id) }, //transforms the _id into objectId
            { $set: set },
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            }
        );
    }

    return deferred.promise;
}

function _delete(_id) {
    var deferred = Q.defer();

    db.items.remove(
        { _id: mongo.helper.toObjectID(_id) },
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        }
    );

    return deferred.promise;
}