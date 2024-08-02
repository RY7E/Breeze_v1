const userModel = require("../models/userModel");

const getUserForSidebar = async (req, res) => {
    try {
        const loggedUserId = req.user._id;
        const filteredUsers = await userModel.find({
            _id: { $ne: loggedUserId } // Find every user except the logged in user.
        }).select("-password");

        res.status(200).json(filteredUsers);
        
    } catch (error) {
        console.log("Error in userController - getUsersForSidebar", error.message);
        res.status(500).json({error: "Internal server error."})
    }
}

module.exports = getUserForSidebar;