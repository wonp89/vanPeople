var express = require("express");
var path = require("path");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const root = require("./routes/index");
app.use(root);

app.use(express.static(path.join(__dirname, "dist")));
app.get("/", function(req, res) {
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("App is running on port " + PORT);
});
