const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        id: {
            type: String
        },
        name: {
            type: String,
            maxlength: [50],
            trim: false,
        },
        image: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            maxlength: [300],
            trim: false,
        },
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    }
);

userSchema.set("autoIndex", true);
module.exports = mongoose.model("User", userSchema);
