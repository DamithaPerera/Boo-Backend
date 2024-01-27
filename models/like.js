const mongoose = require("mongoose");
const {v4: uuidv4} = require("uuid");

const likeSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            default: uuidv4(),
        },
        commentId: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        },
        status: {
            type: Boolean,
            required: true,
        },
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    }
);

likeSchema.set("autoIndex", true);
module.exports = mongoose.model("Like", likeSchema);
