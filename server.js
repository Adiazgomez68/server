const express = require("express");
const app = express()

const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello Everybody, i'm here programming in this place!!!")
}) 

app.listen(port, () => {
    console.log("Server on port 3000")
})
