const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const EmailSchema = new Schema({
    email : {
        type  : String ,
       unique : true
    }
    
})


module.exports = mongoose.model('emails', EmailSchema )