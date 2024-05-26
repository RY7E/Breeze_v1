const express = require('express');

const router = express.Router();

router.get("/login", (req, res) => {
    res.send("Login Route");
})

router.get("/register", (req, res) => {
    res.send("Register Route");
})

router.get("/logout", (req, res) => {
    res.send("Logout Route");
})


module.exports = router;