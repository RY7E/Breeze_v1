const User = require("../models/userModel")

const register = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({error: "Passwords don't match"})
        }

        const user = await User.findOne({username});

        if (user) {
            return res.status(400).json({error: "User already exists."});
        }
        
        const newUser = new User({
            fullName,
            username,
            password,
            // pfp,
        })

        await newUser.save();
        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            // pfp:
        })
        
    } catch (error) {
        console.log("Error in signup controller", error.message);
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