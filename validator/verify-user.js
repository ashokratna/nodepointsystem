const respGenerator = require('../response/json-response');
const jwt = require('jsonwebtoken');
const config = require('../config/index');
class UserValidation {
  /**
   * verifyUser method is used to validate user token and set user
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  verifyUser(req, res, next) {
    try {
      const token = req.headers['x-access-token'];
      if (!token) {
        throw new Error('106');
      }
      const user = jwt.verify(token, config.jwtConfig.secretKey);
      req.user = user;
      next();
    } catch (error) {
      respGenerator.sendError(res, error);
    }
  }
}
module.exports = new UserValidation();