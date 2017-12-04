var config = require('../config/database');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.database, { native_parser: true });

db.bind('itemlists');

var service = {};

service.getAll = getAll;
service.getById = getById;
service.create = create;
service.update = update;
service.delete = _delete;

module.exports = service;

function create(itemListParam) {
    var deferred = Q.defer();

    // validation
    db.itemlists.findOne(
        { listName : itemListParam._listName },
        function (err, itemList) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            if (itemList) {
                //itemlist already exists
                deferred.reject('Itemlist "' + itemListParam._listName + '" already exists');
            } else {
                createItem(itemListParam);
            }
        });

    function createItem(itemListParam) {
        db.itemlists.insert(
            itemListParam,
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }

    return deferred.promise;
}

function getAll() {
    var deferred = Q.defer();

    db.itemlists.find().toArray(function (err, itemlists) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        deferred.resolve(itemlists);
    });

    return deferred.promise;
}

function getById(_id) {
    var deferred = Q.defer();

    db.itemlists.findById(_id, function (err, itemlists) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (item) {
            //return itemlist
            deferred.resolve(itemlists);
        } else {
            //itemlist not found
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function update(_id, itemlistParam) {
    var deferred = Q.defer();

    // validation
    db.itemlists.findById(_id, function (err, itemlist) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (itemlist._listName !== itemlistParam._listName) {
            //listname has changed so check if the new listname is already taken
            db.itemlists.findOne(
                { _listName: itemlistParam._listName },
                function (err, itemlist) {
                    if (err) deferred.reject(err.name + ': ' + err.message);
        
                    if (itemlist) {
                        //itemlist already exists
                        deferred.reject('Itemlist "' + itemlistParam._listName + '" already exists');
                    } else {
                        updateItemList();
                    }
                });
        } else {
            updateItemList();
        }
    });

    function updateItemList() {
        //fields to update
        var set = {
            _listName: itemlistParam._listName,
            _items: itemlistParam._items,
            _user: itemlistParam._user,
            _itemIds: itemlistParam._itemIds,
            _userId: itemlistParam._userId
        };

        db.itemlists.update(
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

    db.itemlists.remove(
        { _id: mongo.helper.toObjectID(_id) },
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        }
    );

    return deferred.promise;
}