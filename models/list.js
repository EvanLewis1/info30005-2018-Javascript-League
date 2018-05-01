var mongoose = require('mongoose');
var listSchema = mongoose.Schema(
    {
        "name": String,
        "address": String,
        "phone": String,
    }
);

mongoose.model('list',listSchema);