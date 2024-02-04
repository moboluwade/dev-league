require('dotenv').config();
const express = require('express');
const app = express();
const ConnectDB = require('./config/ConnectDb');
const cors = require('cors');
const email = require('./routes/email');
const port = process.env.PORT || 5000;
const events = require('./routes/events');
const donations = require('./routes/donation');
const articles = require('./routes/articles');


ConnectDB()


app.use(express.json());
app.use(cors())
app.use('/api/emails', email)
app.use('/api/events', events);
app.use('/api/donations', donations);
app.use('/api/articles', articles);



app.listen(port , ()=> console.log(`listening on port ${port}`))