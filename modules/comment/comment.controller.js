const {createCommentService, getAllCommentsService} = require("./comment.service");


let msg = {}

exports.createComment = async (req, res, next) => {
    try {
        const requestBody = req.body
        const response = await createCommentService(requestBody)
        msg.message = "success"
        msg.data = response
        res.status(201).json(msg);
    } catch (error) {
        msg.message = "fail"
        msg.data = error.message
        res.status(400).json(msg);
    }
};

exports.getAllComments = async (req, res, next) => {
    try {
        const {page, limit} = req.query
        const {profileId} = req.params
        const response = await getAllCommentsService(page, limit, profileId)
        msg.message = "success"
        msg.data = response
        res.status(201).json(msg);
    } catch (error) {
        msg.message = "fail"
        msg.data = error.message
        res.status(400).json(msg);
    }
};