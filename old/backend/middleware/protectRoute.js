const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel.js');

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({error: "Unauthorized: No Token Provided."})
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) {return res.status(401).json({error: "Unauthroized: Invalid Token."})}

        const user = await userModel.findById(decoded.userid).select("-password");

        if (!user) {return res.status(401).json({error: "User Not Found."})}

        req.user = user;

        next();

    } catch (error) {
        console.log("Error in protectRoute middleware: ", error.message);
        res.status(500).json({error: "Internal server error."})
    }
}

module.exports = protectRoute;