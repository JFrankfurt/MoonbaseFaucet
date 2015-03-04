var restful = require('node-restful'),
    mongoose = require('mongoose');

//User schema
var userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: /*buffer or binary something */'',
        required: true
    },
    email: {
        type: String,
        required: true
    },
    wallet: {
        type: Object,
        required: true
    }
    });

module.exports = restful.model('Users', userSchema);