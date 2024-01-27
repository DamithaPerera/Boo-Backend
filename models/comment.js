const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
    {
        id: {
            type: String
        },
        commentedUserId: {
            type: String,
            required: true,
        },
        profileIdForComment: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            maxlength: [1000],
            trim: false,
            required: true
        },
        likeCount: {
            type: Number,
            default: 0,
            min: 0
        },
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    }
);

commentSchema.set("autoIndex", true);
module.exports = mongoose.model("Comment", commentSchema);
