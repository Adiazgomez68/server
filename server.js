const express = require("express");
const app = express()

const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello Everybody, i'm here programming in this place!!!");
}) 

app.get("/message", (req, res) => {
    res.send("This a message sent for first users");
}) 

app.listen(port, () => {
    console.log("Server on port 3000");
})
