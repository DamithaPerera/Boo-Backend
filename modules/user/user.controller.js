const {createProfileService} = require("./user.service");

let msg = {}

exports.createProfile = async (req, res, next) => {
    try {
        const requestBody = req.body
        const response = await createProfileService(requestBody)
        msg.message = "success"
        msg.data = response
        res.status(201).json(msg);
    } catch (error) {
        console.log('re', error)
    }
};