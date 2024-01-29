require('dotenv').config();
const express = require('express');
const app = express();
const ConnectDB = require('./config/ConnectDb');
const email = require('./routes/email');
const port = process.env.PORT || 5000;
const events = require('./routes/events');
const donations = require('./routes/donation')


ConnectDB()


app.use(express.json())
app.use('/api/emails', email)
app.use('/api/events', events);
app.use('/api/donations', donations)



app.listen(port , ()=> console.log(`listening on port ${port}`))