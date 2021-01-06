const mongoose = require('mongoose');

const schema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    language: {
        type: String,
    },
    tools: {
        type: String,

    },

}, {
    versionKey: false
});


const Skills = mongoose.model('skills', schema);
module.exports.Skills = Skills;