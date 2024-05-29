const jwt = require('jsonwebtoken');

const generateTokenAndSetCookie = (userid, res) => {
    const token = jwt.sign({userid: userid}, process.env.JWT_SECRET, {
        expiresIn: '15d'
    })

    res.cookie("jwttoken", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // time in miliseconds
        httpOnly: true,
        sameSite: "strict"
    })
}

module.exports = generateTokenAndSetCookie;