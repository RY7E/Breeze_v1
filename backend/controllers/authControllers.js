const User = require("../models/userModel")
const bcrypt = require('bcrypt');
const generateTokenAndSetCookie = require("../utils/generateToken");
const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser");

const register = async (req, res) => {
    try {
        // Get the values from the frontend
        const { fullName, username, password, confirmPassword } = req.body;

        // Check if the passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({error: "Passwords don't match"})
        }

        // Check if user already exists
        const user = await User.findOne({username});

        if (user) {
            return res.status(400).json({error: "User already exists."});
        }

        // Hashing the user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create the user into the User schema
        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            // pfp,
        })

        if (newUser) {
            // Generate JWT Token
            // await generateTokenAndSetCookie(newUser._id, res);
            // todo: export token and cookie functionality to a funciton in utils
            let token = jwt.sign({userid: newUser._id}, process.env.JWT_SECRET, {
                expiresIn: "15d",
            });
            res.cookie("jwttoken", token, {
                maxAge: 15 * 24 * 60 * 60 * 1000,
                httpOnly: true,
                sameSite: "strict",
                secure: process.env.NODE_ENV !== "development",
            });


            await newUser.save(); // Save the user to the database
            res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            // pfp:
            })
        } else {
            res.status(400).json({error: "Invalid user data."});
        }
        
    } catch (error) {
        console.log("Error in Register controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}

const logout = (req, res) => {
    res.send("User Logged Out");
}

const login = (req, res) => {
    res.send("User Logged In");
}

module.exports = {login, logout, register};