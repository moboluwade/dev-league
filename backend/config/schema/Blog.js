const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    blogimage: {
        type: String,
        required: true

    },
    blogtype: {
        type: String,
        enum: ['Article', 'Job', 'News'],
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

}, { timestamps: true });

module.exports = blogSchema