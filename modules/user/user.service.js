const { v4: uuidv4 } = require('uuid');
const {createProfileRepo} = require("./user.repo");


exports.createProfileService = async (requestBody) => {
    requestBody.id = uuidv4();
    return createProfileRepo(requestBody)
};