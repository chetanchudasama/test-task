var path = require("path");

if (process.env.NODE_ENV) {
  require("dotenv").config({
    path: path.join(__dirname, `./env/.env.${process.env.NODE_ENV}`),
  });
} else {
  require("dotenv").config({ path: path.join(__dirname, `./env/.env.local`) });
}

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const port = process.env.PORT;
const app = express();
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.set("view engine", "ejs");

app.use(cors({}));

require("./lib/db")();
const logger = require("./lib/logger");
const routes = require("./routers/v1");

app.use("/api/v1", routes);

app.listen(port, () => {
  logger.info(`Server running at ${port}`);
});
