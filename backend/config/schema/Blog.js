const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// const authorSchema = new Schema({
//     authorID: {
//         type: mongoose.Schema.Types.ObjectId, // Assuming it's a reference to another document
//         required: true
//     },
//     authorProfile: {
//         type: String, // Assuming this is a link or description
//         required: true
//     },
//     authorUsername: {
//         type: String,
//         required: true
//     },
//     authorName: {
//         type: String,
//         required: true
//     },
//     authorRole: {
//         type: String,
//         required: true
//     },
//     authorSudoRole: {
//         type: String, // Assuming this is a special role or title
//         required: true
//     }
// }, { _id: false }); // _id: false prevents creating a separate ID for the subdocument


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