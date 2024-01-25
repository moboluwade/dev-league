require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT;
const admin = require('./routes/client');
const client = require("./routes/client");
const ConnectDB = require('./config/ConnectDb');


ConnectDB();
app.use(express.json());

app.use(admin);
app.use(client);



app.listen(port, ()=>console.log(`Listening on sever ${port}`))