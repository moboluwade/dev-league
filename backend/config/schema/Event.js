const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    date : { type : Date,  required : true },
    title : { type : String, required : true},
    description: { type: String, require : true },
    eventType: { type: String, enum: ['virtual', 'onsite'], required: true },
    eventStatus: { type: String, enum: ['open', 'closed'], required: true , default : 'open'}

}, {timestamps : true})

module.exports = eventSchema