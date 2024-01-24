const mongoose = require('mongoose')
const Schema = mongoose.Schema


const articleschema = new Schema({
        title : {
            type : String,
            required : true
        },

        description : {
            type : String,
            required : true
        }
    
}, { timestamps: true })


module.exports = mongoose.model('Article' , articleschema)