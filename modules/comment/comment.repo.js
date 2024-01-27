const comment = require("../../models/comment");


exports.createCommentRepo = async (requestBody) => {
    return comment.create(requestBody)
};

exports.getAllCommentsRepo = async (pageNo, pageLimit, profileId) => {
    return comment.find({
        profileIdForComment: profileId
    }).limit(pageLimit).skip(pageNo)
};