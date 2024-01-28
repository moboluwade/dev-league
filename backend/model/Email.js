const mongoose = require('mongoose');
const Schema = new mongoose.Schema;


const EmailSchema = new Schema({
    Email : {
        type  : String 
    }
    
})


module.exports = mongoose.model('Email',Schema )