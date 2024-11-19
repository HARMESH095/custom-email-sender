import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!123");
})

app.listen(3000, () => {
    console.log("Server is running in port 3000")
})