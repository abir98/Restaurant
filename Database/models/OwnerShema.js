const mongoose = require("mongoose")
var crypto = require('crypto'); 

let OwnerSchema = mongoose.Schema({
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    adresse: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },


});


module.exports = mongoose.model('Owner', OwnerSchema)