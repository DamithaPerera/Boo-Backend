const comment = require("../../models/comment");
const like = require("../../models/like");


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
                id: 1,
                profileIdForComment: 1,
                description: 1,
                created_at: 1,
                updated_at: 1,
                likeCount: 1,
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

exports.checkLikeRepo = async (responseBody) => {
    const results = await like.aggregate([
        {$match: {commentId: responseBody.commentId, userId: responseBody.userId}},
        {
            $project: {
                statusChanged: {$ne: ['$status', responseBody.status]}
            }
        }
    ]);

    const statusChanged = results.length > 0 && results[0].statusChanged;

    if (statusChanged) {
        // Update or create the like document
        await like.findOneAndUpdate({
            commentId: responseBody.commentId,
            userId: responseBody.userId
        }, {
            $set: {status: responseBody.status}
        }, {
            new: true,
            upsert: true
        });

        // Update like count in the comment
        const likeIncrement = responseBody.status ? 1 : -1;
        await comment.updateOne({
            id: responseBody.commentId
        }, {
            $inc: {likeCount: likeIncrement}
        });
    }
};