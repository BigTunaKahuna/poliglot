require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const PORT = process.env.PORT;
const SESSION_SECRET = process.env.SESSION_SECRET;
const app = express();

// Middleware
app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

//Passport
app.use(passport.initialize());
app.use(passport.session());

// Database connection
const dbCon = process.env.MONGOURI;
mongoose
  .connect(dbCon, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then()
  .catch(err => console.log(err));

// Routes
app.use("/api/register", require("./routes/register"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/profile", require("./routes/profile"));
app.use("/api/message", require("./routes/message"));

// Open Server
app.listen(PORT, () => {});
