const {v4: uuidv4} = require("uuid");
const {createCommentRepo, getAllCommentsRepo} = require("./comment.repo");


exports.createCommentService = async (requestBody) => {
    requestBody.id = uuidv4();
    return createCommentRepo(requestBody)
};

exports.getAllCommentsService = async (page, limit, profileId) => {
    const pageNo = Math.max(0, page)
    const pageLimit = limit || 10
    return getAllCommentsRepo(pageNo, pageLimit, profileId)
};