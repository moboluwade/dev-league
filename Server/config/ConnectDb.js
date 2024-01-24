const mongoose = require('mongoose');


const connectdb = async ()=>{
    try {
                await mongoose.connect(process.env.MONGO_URI)

                console.log(`Mongo database Connected Successfully `);
    } catch (error) {
        console.error(error);
        process.exit(1);
        
    }
}

module.exports = connectdb;