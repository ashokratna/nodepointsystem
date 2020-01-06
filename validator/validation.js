const joi = require('joi');

module.exports = {
    addUser: {
        body: {
            name: joi.string().required().trim(),
            surname: joi.string().required().trim(),
            email: joi.string().required().trim().email(),
            mobile: joi.string().required().trim().max(10).min(10).regex(/([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/),
            designation: joi.string().required().trim(),
            password: joi.string().required().trim(),
        }
    },
    login: {
        body: {
            email: joi.string().required().trim().email(),
            password: joi.string().required().trim()
        }
    }
}