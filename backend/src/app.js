/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable block-spacing */
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
const loginRouter = require("./controllers/login");
const usersRouter = require("./controllers/users");
const postsRouter = require("./controllers/posts");
const middlewares = require("./middlewares");
const logger = require("./utils/logger");
const config = require("./utils/config");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

logger.info("connecting to", config.MONGODB_URI);

mongoose
    .connect(config.MONGODB_URI)
    .then(() => {
        logger.info("connected to MongoDB");
    })
    .catch((error) => {
        logger.error("error connecting to MongoDB", error);
    });

app.use(morgan("dev"));
app.use(helmet());

app.use(middlewares.requestLogger);

app.get('/', (req, res) => {
    res.json({ Saying: 'wakawaka' });
});

app.use('/api/login', loginRouter);
app.use("/api/users", usersRouter);
app.use("/api/posts", postsRouter);

module.exports = app;
