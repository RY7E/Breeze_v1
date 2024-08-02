const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser");

const generateTokenAndSetCookie = (userid, res) => {
    let token = jwt.sign({userid: userid}, process.env.JWT_SECRET, {
        expiresIn: "15d",
    });

    res.cookie("jwttoken", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        hhtpOnly: true,
        sameSite: "strict",
        secure: proecess.env.NODE_ENV !== "development"
    })
}

module.exports = generateTokenAndSetCookie;