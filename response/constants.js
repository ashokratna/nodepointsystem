module.exports = {
    ERRORCODES: {
        102: {
            status: 422,
            message: 'Please provide valid data'
        },
        103: {
            status: 422,
            message: 'This email already exist'
        },
        104: {
            status: 422,
            message: 'User does not exist or invalid email'
        },
        105: {
            status: 422,
            message: 'Please provide valid password'
        },
        106: {
            status: 422,
            message: 'Please provide x-access-token in headers'
        },
        107: {
            status: 422,
            message: 'User is not authorized'
        }
    }
}