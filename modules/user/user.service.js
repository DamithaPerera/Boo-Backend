const {v4: uuidv4} = require('uuid');
const {createProfileRepo, getAllProfileRepo} = require("./user.repo");


exports.createProfileService = async (requestBody) => {
    requestBody.id = uuidv4();
    return createProfileRepo(requestBody)
};

exports.getAllProfileService = async (page, limit) => {
    const pageNo = Math.max(0, page)
    const pageLimit = limit || 10
    return getAllProfileRepo(pageNo, pageLimit)
};
