const mongoose = require('mongoose');

const schema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
    },
    bio: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String,
    },
    social: {
        icon: { type: String },
        url: { type: String }
    },
    thumbnails: {
        type: String
    }
}, {
    versionKey: false
});


const Users = mongoose.model('users', schema);
module.exports.Users = Users;