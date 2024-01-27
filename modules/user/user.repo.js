const user = require('../../models/user')


exports.createProfileRepo = async (requestBody) => {
    return user.create(requestBody)
};

exports.getAllProfileRepo = async (pageNo, pageLimit) => {
    return user.find({}).limit(pageLimit).skip(pageNo)
};