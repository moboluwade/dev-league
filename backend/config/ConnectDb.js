require('dotenv').config();
const mongoose = require('mongoose');

async function connectDB() {
    try {
        const homeDB = await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to mongoDB database');

    } catch (error) {
        console.error('Error connecting to database:', error);
        throw error;
    }
}

module.exports = connectDB;
