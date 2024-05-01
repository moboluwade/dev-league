require('dotenv').config();
const mongoose = require('mongoose');


async function ConnectDB() {

    try {
        mongoose.connect(process.env.MONGO_URI,

        );
        console.log('Db COnnected Successfully')
    } catch (error) {
        res.send(error.message).status(500);
        console.log(error)
    }
}

module.exports = ConnectDB