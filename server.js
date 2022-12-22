const express = require("express");
const app = express();

const port = 4000;

app.get("/", (req, res) => {
    res.send("Hello Everybody, i'm here programming in this place!!!");
})

app.get("/message", (req, res) => {
    res.send({ status: 200, message: "Good, it's done!" });
})

app.listen(port, () => {
    console.log("Server on port 4000");
})
