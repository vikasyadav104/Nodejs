const express = require("express");
const fs = require("fs");

const Port = 8000;

const userRouter = require("./routes/user");

const { logReqRes } = require("./middlewares");
const {connectMongoDb} = require("./connection.js/connection");
const app = express();

connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("Mongo Error", err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(logReqRes("log.txt"));

app.use("api/user", userRouter);

app.listen(Port, () => console.log(`Server Connected at ${Port}`));