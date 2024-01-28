require('dotenv').config();
const express = require('express');
const app = express();
const ConnectDB = require('./config/ConnectDb');
const email = require('./routes/email');
const port = process.env.PORT || 5000


ConnectDB()


app.use(express.json())
app.use('/api/emails', email)



app.listen(port , ()=> console.log(`listening on port ${port}`))