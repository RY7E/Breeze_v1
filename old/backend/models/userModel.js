const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    pfp: {
        type: String,
        default: "",
    },
}, {timestamps: true});

module.exports = mongoose.model("User", userSchema);