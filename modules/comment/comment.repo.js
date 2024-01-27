const comment = require("../../models/comment");


exports.createCommentRepo = async (requestBody) => {
    return comment.create(requestBody)
};