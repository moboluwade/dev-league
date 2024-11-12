require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const methodoverride = require("method-override");
const connectDB = require("./config/ConnectDb");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const event = require("./routes/event");
const email = require("./routes/email");
const blog = require("./routes/blog");
const authorization = require("./routes/auth");
const admin = require("./routes/admin");
const registeredAdmin = require("./routes/registerAdmin");
const MongoStore = require("connect-mongo");
const path = require("path");
const buildPath = path.join(__dirname, "../client/dist/");
connectDB();

// Serve static files from the Vite build output
app.use(express.static(path.join(__dirname, "../client/dist")));

app.use(cookieParser());
app.use(methodoverride("_method"));

// update: only activate this for admin users, we don't need regulars to have sessions.
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
    }),
  })
);
app.use(express.json({ limit: "50mb" }));

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.options(
  "*",
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use("/api/emails", email);
app.use("/api/events", event);
app.use("/api/blog", blog);
app.use("/api/admin", authorization);
app.use("/api/permissions", registeredAdmin);
// app.use("/api/permissions", admin);
// // gets the static files from the build folder
// app.get('*', (req, res) => {
//     res.sendFile(path.join(buildPath, 'index.html'))
// })

app.listen(port, () => console.log(`listening on port ${port}`));
