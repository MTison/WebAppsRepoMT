var mongoose = require('mongoose');

var UserSchema = new mongoose.schema({
    username: String,
    firstname: String,
    lastname: String,
    email: String
})

mongoose.model('User',UserSchema);