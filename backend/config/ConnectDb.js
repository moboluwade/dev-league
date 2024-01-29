const mongoose = require('mongoose');


async function ConnectDB(){

try {
    mongoose.connect('mongodb://localhost:27017/dev-league');
    console.log('Db COnnected Successfully')
} catch (error) {
    res.send(error.message).status(500);
    console.log(error)
}
}

module.exports = ConnectDB