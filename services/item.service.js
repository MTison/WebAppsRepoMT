var config = require('../config/database');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionStringItems, { native_parser: true });

db.bind('items');

var service = {};

service.getAll = getAll;
service.getById = getById;
service.create = create;
service.update = update;
service.delete = _delete;

module.exports = service;

function create(itemParam) {
    console.log(itemParam);
    var deferred = Q.defer();

    // validation
    db.items.findOne(
        { productname: itemParam.productName, inShop: itemParam.inShop },
        function (err, item) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            if (item) {
                // item already exists
                deferred.reject('Item "' + itemParam.productName + '" already exists, within shop "' + itemParam.inShop + '"');
            } else {
                createItem(itemParam);
            }
        });

    function createItem(itemParam) {
        console.log(itemParam);
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

        if (item.productName !== itemParam.productName) {
            // username has changed so check if the new username is already taken
            db.items.findOne(
                { productName: itemParam.productName },
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
            productName: itemParam.productName,
            mark: itemParam.mark,
            productKind: itemParam.productKind,
            inShop: itemParam.inShop,
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