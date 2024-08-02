const conversationModel = require('../models/conversationModel');
const messageModel = require('../models/messageModel');

const sendMessage = async (req, res) => {
    try {
        const {message} = req.body;
        const {id: recId} = req.params;
        const senderId = req.user._id

        let conversation = await conversationModel.findOne({
            participants: { $all: [senderId, recId] },
        })
        if (!conversation) {
            conversation = await conversationModel.create({
                participants: [senderId, recId]
            })
        }

        const newMessage = new messageModel({
            senderId: senderId,
            receiverId: recId,
            message: message,
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        // SOCKET.IO functionality will be added here

        // await conversation.save();
        // await newMessage.save();

        await Promise.all([conversation.save(), newMessage.save()]); // runs in parallel making it faster

        res.status(201).json({newMessage});

    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message);
        res.status(500).json({error: "Internal server error."});
    }
}

const getMessage = async (req, res) => {
    try {
        const {id: userToChat} = req.params;
        const senderId = req.user._id;

        const conversation = await conversationModel.findOne({
            participants: { $all: [senderId, userToChat]},
        }).populate("messages");

        if (!conversation) {return res.status(200).json([])};

        const messages = conversation.messages;
        res.status(200).json(messages);
        
    } catch (error) {
        console.log("Error in getMessages controller.");
        res.status(500).json({error: "Internal server error."})
    }
}

module.exports = { sendMessage, getMessage };