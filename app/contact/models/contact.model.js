const mongoose = require('mongoose');

const schema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    subject: {
        type: String,
    },
    message: {
        type: String,
    },

}, {
    versionKey: false
});

const Contact = mongoose.model('contact', schema);
module.exports.Contact = Contact;