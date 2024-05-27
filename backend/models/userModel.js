const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        requried: true,
    },
    username: {
        type: String,
        requried: true,
        unique: true,
    },
    password: {
        type: String,
        requried: true,
        minlength: 6,
    },
    pfp: {
        type: String,
        default: "",
    },
});

module.exports = mongoose.model("User", userSchema);