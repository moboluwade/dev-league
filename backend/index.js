require('dotenv').config();
const express = require('express');
const app = express();
const ConnectDBs = require('./config/ConnectDb');
const cors = require('cors');
const port = process.env.PORT || 5000;
const methodoverride = require('method-override')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const events = require('./routes/events');
const email = require('./routes/email');
const articles = require('./routes/articles');
const authorization = require('./routes/auth');
const MongoStore = require('connect-mongo');
const path = require('path')

const buildPath = path.join(__dirname, '../client/dist')

ConnectDBs();


app.use(cookieParser());
app.use(methodoverride('_method'));

// update: only activate this for admin users, we don't need regulars to have sessions.
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI
    }),
}));
app.use(express.json());


app.use(cors())
app.use('/api/emails', email)
app.use('/api/events', events);
app.use('/api/articles', articles);
app.use('/api/admin', authorization)


// // gets the static files from the build folder
// app.get('*', (req, res) => {
//     res.sendFile(path.join(buildPath, 'index.html'))
// })


app.listen(port, () => console.log(`listening on port ${port}`))