const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const EmailSchema = new Schema({
    Email : {
        type  : String ,
       unique : true
    }
    
})


module.exports = mongoose.model('Email', EmailSchema )