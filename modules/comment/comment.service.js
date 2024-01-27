const {v4: uuidv4} = require("uuid");
const {createCommentRepo} = require("./comment.repo");


exports.createCommentService = async (requestBody) => {
    requestBody.id = uuidv4();
    return createCommentRepo(requestBody)
};