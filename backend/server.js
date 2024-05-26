const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require("./routes/authRoutes.js");
const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hello World! hfhdhdh");
})

app.use("/auth", authRoutes);

app.listen(PORT);