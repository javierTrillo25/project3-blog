const express = require('express');
const db = require('./utils/database');
const postsRouter = require('./posts/posts.router');
const app = express()
app.use(express.json());
require('dotenv').config();

db.authenticate()
    .then(() => {
        console.log("The Db credential has been successfully authenticated, Good Job :)");
    })
    .catch((err) => {
        console.log(err);
    });

db.sync()
    .then(() => {
        console.log("The database has been synchronized, Good Job :)");
    })
    .catch((err) => {
        console.log(err);
    });

app.get("/", (req, res) => {
    res.json({
        message: "Server is ok",
        routes: {
            posts: "http://localhost:9000/api/v1/posts",
        },
    });
});

app.use("/api/v1", postsRouter);

app.listen(9000, () => {
    console.log("Server started at port 9000");
});

module.exports = app;
