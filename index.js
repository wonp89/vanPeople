var express = require("express");
var path = require("path");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var app = express();
const session = require("express-session");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    name: "_van_people",
    secret: "supersecret",
    cookie: {
      maxAge: 1000 * 60 * 60 * 24
    },
    resave: true,
    saveUninitialized: false,
    store: new KnexSessionStore({ knex: kx })
  })
);
app.use(async function setCurrentUser(req, res, next) {
  const { userId } = req.session;
  let user;
  req.currentUser = false;
  res.locals.currentUser = false;
  if (userId) {
    user = await kx
      .first()
      .from("users")
      .where({ id: userId });
    req.currentUser = user;
    res.locals.currentUser = user;
  }
  next();
});

const root = require("./routes/index");
app.use(root);

app.use(express.static(path.join(__dirname, "dist")));
app.get("/", function(req, res) {
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("App is running on port " + port);
});
