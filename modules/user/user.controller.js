const {createProfileService, getAllProfileService} = require("./user.service");

let msg = {}

exports.createProfile = async (req, res, next) => {
    try {
        const requestBody = req.body
        const response = await createProfileService(requestBody)
        msg.message = "success"
        msg.data = response
        res.status(201).json(msg);
    } catch (error) {
        msg.message = "fail"
        msg.data = error.message
        res.status(400).json(msg);
    }
};

exports.getAllProfiles = async (req, res, next) => {
    try {
        const {page, limit} = req.query
        const response = await getAllProfileService(page, limit)
        msg.message = "success"
        msg.data = response
        res.status(201).json(msg);
    } catch (error) {
        msg.message = "fail"
        msg.data = error.message
        res.status(400).json(msg);
    }
};