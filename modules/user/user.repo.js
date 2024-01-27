const user = require('../../models/user')


exports.createProfileRepo = async (requestBody) => {
    return user.create(requestBody)
};

exports.getAllProfileRepo = async (pageNo, pageLimit) => {
    return user.find({}).limit(pageLimit).skip(pageNo)
};

exports.getProfileRepo = async (userId) => {
    return user.findOne({
        id: userId
    })
};