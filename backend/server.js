const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require("./routes/authRoutes.js");
const connectDB = require("./database/connect.js");
const cookieParser = require('cookie-parser');
dotenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Home Page");
})

app.use("/auth", authRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server started on port ${PORT}`);
});