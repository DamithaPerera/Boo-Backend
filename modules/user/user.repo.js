const user = require('../../models/user')


exports.createProfileRepo = async (requestBody) => {
    return user.create(requestBody)
};