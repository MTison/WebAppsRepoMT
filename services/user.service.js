var config = require('../config/database');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.database, { native_parser: true });

db.bind('users');

var service = {};

service.authenticate = authenticate;
service.getAll = getAll;
service.getById = getById;
service.create = create;
service.update = update;
service.delete = _delete;
service.getByUsername = getByUsername;

module.exports = service;

function authenticate(username, password) {
    var deferred = Q.defer();

    db.users.findOne({ username: username }, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (user && bcrypt.compareSync(password, user.hash)/*verifying if the given password is correct for the current user*/) {
            //authentication successful
            deferred.resolve({
                _id: user._id,
                _username: user._username,
                _firstName: user._firstName,
                _lastName: user._lastName,
                _email: user._email,
                token: 'JWT'+ jwt.sign(user, config.secret, {
                    expiresIn: 604800}) // 1 week {expiresIn:'20s'}) //error in de klassen jsonwebtoken/index.js:155:18
            });
        } else {
            //authentication failed
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function getAll() {
    var deferred = Q.defer();

    db.users.find().toArray(function (err, users) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        //return users (without hashed passwords)
        users = _.map(users, function (user) {
            return _.omit(user, 'hash');
        });

        deferred.resolve(users);
    });

    return deferred.promise;
}

function getById(_id) {
    var deferred = Q.defer();

    db.users.findById(_id, function (err, user) {
        if (err) { deferred.reject(err.name + ': ' + err.message); }

        if (user) {
            //return user (without hashed password)
            deferred.resolve(_.omit(user, 'hash'));
        } else {
            //user not found
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function getByUsername(username) {
    var deferred = Q.defer();

    db.users.findOne({ username: username }, function (err, user) {
        if (err) { deferred.reject(err.name + ': ' + err.message); }

        if (user) {
            // return user (without hashed password)
            deferred.resolve(_.omit(user, 'hash'));
        } else {
            // user not found
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function create(userParam) {
    var deferred = Q.defer();

    // validation
    db.users.findOne(
        { username: userParam.username },
        function (err, user) {
            if (err) { deferred.reject(err.name + ': ' + err.message); }

            if (user) {
                //username already exists
                deferred.reject('Username "' + userParam.username + '" is already taken');
            } else {
                createUser();
            }
        });

    function createUser() {
        // set user object to userParam without the cleartext password
        var user = _.omit(userParam, 'password','confirmPassword');
        // add hashed password to user object
        user.hash = bcrypt.hashSync(userParam.password, 10);

        db.users.insert(
            user,
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }

    return deferred.promise;
}

function update(_id, userParam) {
    var deferred = Q.defer();

    // validation
    db.users.findById(_id, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (user.username !== userParam.username) {
            //username has changed so check if the new username is already taken
            db.users.findOne(
                { username: userParam.username },
                function (err, user) {
                    if (err) { deferred.reject(err.name + ': ' + err.message); }

                    if (user) {
                        //username already exists
                        deferred.reject('Username "' + req.body.username + '" is already taken')
                    } else {
                        updateUser();
                    }
                });
        } else {
            updateUser();
        }
    });

    function updateUser() {
        //fields to update
        var set = {
            _username: userParam._username,
            _firstName: userParam._firstName,
            _lastName: userParam._lastName,
            _email: userParam._email,
        };

        //update password if it was entered and hash it
        if (userParam.password) {
            set.hash = bcrypt.hashSync(userParam.password, 10);
        }

        db.users.update(
            { _id: mongo.helper.toObjectID(_id) },
            { $set: set },
            function (err, doc) {
                if (err) { deferred.reject(err.name + ': ' + err.message); }
                deferred.resolve();
            });
    }

    return deferred.promise;
}

function _delete(_id) {
    var deferred = Q.defer();

    db.users.remove(
        { _id: mongo.helper.toObjectID(_id) },
        function (err) {
            if (err) { deferred.reject(err.name + ': ' + err.message); }
            deferred.resolve();
        }
    );

    return deferred.promise;
}