require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const methodoverride = require('method-override')
const connectDB = require('./config/ConnectDb')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const event = require('./routes/event');
const email = require('./routes/email');
const blog = require('./routes/blog');
const authorization = require('./routes/auth');
const MongoStore = require('connect-mongo');
const path = require('path')
// const buildPath = path.join(__dirname, '../client/dist')

connectDB()

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
app.use(express.json({ limit: '50mb' }));


app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true
    }
))

app.use('/api/emails', email)
app.use('/api/events', event);
app.use('/api/blog', blog);
app.use('/api/admin', authorization)

// // gets the static files from the build folder
// app.get('*', (req, res) => {
//     res.sendFile(path.join(buildPath, 'index.html'))
// })


app.listen(port, () => console.log(`listening on port ${port}`))