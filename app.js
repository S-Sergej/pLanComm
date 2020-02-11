require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

// WHEN INTRODUCING USERS DO THIS:
// INSTALL THESE DEPENDENCIES: passport-local, passport, bcrypt, express-session, connect-mongo
// AND UN-COMMENT OUT FOLLOWING LINES:

const session = require("express-session");
const passport = require("passport");

require("./configs/passport");

// IF YOU STILL DIDN'T, GO TO 'configs/passport.js' AND UN-COMMENT OUT THE WHOLE FILE

mongoose
  .connect(process.env.MONGOLAB_URI, {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true
  })
);

//app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "client/build")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// ADD SESSION SETTINGS HERE:

const MongoStore = require("connect-mongo")(session);


/*
var createToken = function(auth) {
  return jwt.sign({
          id: auth.id
      }, 'my-secret',
      {
          expiresIn: 60 * 120
      });
};

module.exports = {
  generateToken: function(req, res, next) {
      req.token = createToken(req.auth);
      return next();
  },
  sendToken: function(req, res) {
      res.setHeader('x-auth-token', req.token);
      return res.status(200).send(JSON.stringify(req.user));
  }
};*/

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: (2 * 60 * 60 * 1000) },
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection
    })
  })
);

// USE passport.initialize() and passport.session() HERE:

app.use(passport.initialize());
app.use(passport.session());

// default value for title local
app.locals.title = "Express - Generated with IronGenerator";

// ROUTES MIDDLEWARE STARTS HERE:

const index = require("./routes/index");
app.use("/", index);

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

const players = require("./routes/players");
app.use("/api/players" , players)

const guestbook = require("./routes/guestbook");
app.use("/api/guestbook", guestbook);

const usereditor = require("./routes/usereditor");
app.use("/api/usereditor", usereditor);

const game = require("./routes/game");
app.use("/api/game", game);

const event = require("./routes/event");
app.use("/api/event", event);

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});




module.exports = app;
