const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    startDate: { type: Date, required: true },
    EndDate: { type: Date, required: true },
    title: { type: String, required: true },
    description: { type: String, require: true },
    eventType: { type: String, enum: ['virtual', 'onsite'], required: true },
    eventStatus: { type: String, enum: ['open', 'closed'], required: true, default: 'open' },
    eventBanner: { type: Buffer, required: false }
}, { timestamps: true })

module.exports = eventSchema