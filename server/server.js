"use strict";
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const DB_URL = "mongodb://localhost:27017/react-chat";
mongoose.connect(DB_URL);
mongoose.connection.on("connected", function () {
    console.log("mongodb connect success");
});

const User = mongoose.model("user", new mongoose.Schema({
    user: {type: String, require: true},
    age: {type: Number, require: true}
}));

User.create({
    user: "react-chat",
    age: 25
}, function (err, doc) {
    if (!err) {
        console.log(doc);
    } else {
        console.log(err);
    }
});

app.get("/", function (req, res) {
    res.send("<h1>Hello World</h1>");
});

app.get("/data", function (req, res) {
    User.find({}, function (err, doc) {
        res.json(doc);
    });
})
app.listen(8081, function () {
    console.log("node app start at 8081");
});