require('dotenv').config();
const express = require('express');
const app = express();
const ConnectDB = require('./config/ConnectDb');
const cors = require('cors');
const port = process.env.PORT || 5000;
const methodoverride = require('method-override')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const events = require('./routes/events');
const email = require('./routes/email');
const articles = require('./routes/articles');
const authorization   = require('./routes/auth');
const MongoStore = require('connect-mongo');


ConnectDB();


app.use(cookieParser());
app.use(methodoverride('_method'));

app.use(session({
    secret : 'keyboard cat',
    resave : false,
    saveUninitialized : true,
    store : MongoStore.create({
        mongoUrl : process.env.MONGO_URI
    }),
}));
app.use(express.json());

app.use(cors())
app.use('/api/emails', email)
app.use('/api/events', events);
app.use('/api/articles', articles);
app.use('/api/admin', authorization)



app.listen(port , ()=> console.log(`listening on port ${port}`))