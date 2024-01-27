const comment = require("../../models/comment");


exports.createCommentRepo = async (requestBody) => {
    return comment.create(requestBody)
};

exports.getAllCommentsRepo = async (pageNo, pageLimit, profileId) => {
    return comment.aggregate([
        {
            $match: {
                profileIdForComment: profileId // Filter by profileIdForComment
            }
        },
        {
            $lookup: {
                from: "users", // the name of the collection in MongoDB
                localField: "commentedUserId", // field in the comments collection
                foreignField: "id", // field in the users collection to match on
                as: "commentedUserDetails" // output array field
            }
        },
        {
            $unwind: "$commentedUserDetails"
        },
        {$skip: pageNo},
        {$limit: pageLimit},
        {
            $project: {
                _id: 1,
                id: 1,
                commentedUserId: 1,
                profileIdForComment: 1,
                description: 1,
                created_at: 1,
                updated_at: 1,
                userDetailProfile: {
                    name: "$commentedUserDetails.name",
                    image: "$commentedUserDetails.image",
                    userId: "$commentedUserDetails.id"
                }
            }
        }
    ])
};

exports.updateCommentRepo = async (commentId, commentMessage) => {
    return comment.findOneAndUpdate({
        id: commentId
    }, {description: commentMessage})
};