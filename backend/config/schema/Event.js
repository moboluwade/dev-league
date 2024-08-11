const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    startDate: { type: Date },
    endDate: { type: Date },
    title: { type: String },
    description: { type: String },
    eventType: { type: String, enum: ['virtual', 'onsite'] },
    regLink: {type: String},
    imageUrl: { type: String },
}, { timestamps: true })

module.exports = eventSchema