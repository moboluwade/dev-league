require('dotenv').config();
const mongoose = require('mongoose');

function ConnectDB() {
    return new Promise((resolve, reject) => {
        let homeDB, adminDB;

        mongoose.connect(process.env.MONGO_URI)
            .then(connection => {
                homeDB = connection;
                console.log('Connected to homeDB database');
                return mongoose.createConnection(process.env.MONGO_ADMIN_URI);
            })
            .then(connection => {
                adminDB = connection;
                console.log('Connected to adminDB database');
                resolve({ homeDB, adminDB });
            })
            .catch(error => {
                console.error('Error connecting to databases:', error);
                reject(error);
            });
    });
}

module.exports = async function connectDBs() {
    try {
        const { homeDB, adminDB } = await ConnectDB();
        return {
            userDB: homeDB,
            qrCodeDB: adminDB
        };

    } catch (error) {
        console.error('Error connecting to databases:', error);
        throw error;
    }
};
