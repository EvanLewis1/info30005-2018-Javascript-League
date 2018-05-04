var mongoose = require('mongoose');

var listSchema = mongoose.Schema(
    {
        "name": String,
        "address": String,
        "phone": String,
        "email": String,
        "passwordHash": String
    }
);

module.exports = mongoose.model('lists',listSchema);