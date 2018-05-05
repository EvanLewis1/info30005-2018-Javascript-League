var mongoose = require('mongoose');

var listSchema = mongoose.Schema(
    {
        "name": String,
        "firstname": {
            type: String,
            required: false
        },
        "lastname": {
            type: String,
            required: false
        },
        "address": String,
        "phone": String,
        "email": {
                type: String,
                required: true
        },
        "passwordHash": {
                type: String,
                required: true
        }
    }
);


//Bin Schema

var binsSchema = mongoose.Schema(
    {
        "location": Object,
    }
);


module.exports = mongoose.model('lists',listSchema);
module.exports = mongoose.model('bins',binsSchema);