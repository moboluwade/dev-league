const mongoose = require('mongoose');
const router = require('../routes/events');
const Schema = mongoose.Schema;





const ArticleSchema = new Schema({
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
    blogimage : {
        type: String,
        required: true
    },
    blogtype : {
        type: String,
        enum : ['Article' , 'Job' , 'News' ], 
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

}, {timestamps : true});





module.exports = mongoose.model('articles', ArticleSchema);