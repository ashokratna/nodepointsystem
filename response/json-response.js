const constants = require('./constants');

class ResponseGenerator {

    /**
     * sendResponse method is used to send success response
     * @param {*} res 
     * @param {*} data 
     */
    sendResponse(res, data) {
        const resData = {
            isError: false,
            data: data
        }
        res.send(resData);
    }

    /**
     * sendError method is used to send response
     * @param {*} res 
     * @param {*} err 
     */
    sendError(res, err) {
        if (constants.ERRORCODES[err.message]) {
            res.status(constants.ERRORCODES[err.message].status);
            res.send({
                isError: true,
                message: constants.ERRORCODES[err.message].message
            })
        } else {
            res.status(500);
            res.send({
                isError: true,
                message: err.message
            })
        }
    }
}

module.exports = new ResponseGenerator();