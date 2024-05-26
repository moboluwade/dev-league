const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    blogContent: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    blogImage: {
        type: String,
        required: true

    },
    blogType: {
        type: [String],
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

}, { timestamps: true });

module.exports = blogSchema