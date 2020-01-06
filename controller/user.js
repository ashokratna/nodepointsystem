const jwt = require("jsonwebtoken");

const userModel = require("../lib//models/user");
const seeder = require('../lib/seeder');
const pointModel = require('../lib/models/pointTable');
const cutOffModel = require('../lib/models/cuttOffModel');
const responseGenerator = require("../response/json-response");
const {
  jwtConfig
} = require('../config/index')

class UserController {
  /**
   * getUsers method is used to get list of users
   * @param {*} req
   * @param {*} res
   */
  async getUsers(req, res) {
    try {
      const users = await userModel.find();
      responseGenerator.sendResponse(res, {
        users: users
      });
    } catch (error) {
      responseGenerator.sendError(res, error);
    }
  }


  async fetchRecords(req, res) {
    try {
      await seeder.checkPointTableContainsDoc();
      const data = await pointModel.find();
      responseGenerator.sendResponse(res, {
        projects: data,
        cutOff: await cutOffModel.find()
      });
    } catch (error) {
      responseGenerator.sendError(res, error)
    }
  }

  async fetchPoints(req, res) {
    try {
      const points = await pointModel.find();
      const cutOff = await cutOffModel.find();
      responseGenerator.sendResponse(res, {
        projects: points,
        cutOff: cutOff
      })
    } catch (error) {
      responseGenerator.sendError(res, error);
    }
  }

  /**
   * addUser method is  used to add user
   * @param {*} req
   * @param {*} res
   */
  async addUser(req, res) {
    try {
      const {
        name,
        surname,
        email,
        designation,
        mobile,
        password
      } = req.body;
      const registeredUser = await userModel.findOne({
        email: email
      });
      if (registeredUser) {
        throw new Error("103");
      }
      const userBody = new userModel({
        name,
        surname,
        email,
        password,
        designation,
        mobile
      });
      await userBody.save();
      responseGenerator.sendResponse(res, {
        message: "user is succedfully created"
      });
    } catch (error) {
      responseGenerator.sendError(res, error);
    }
  }

  /**
   * Login method is used to login
   * @param {*} req
   * @param {*} res
   */
  async login(req, res) {
    try {
      const {
        email,
        password
      } = req.body;

      const user = await userModel.findOne({
        email: email
      });

      /**
       * it will check that email is valid or not 
       */
      if (!user) {
        throw new Error("104");
      }

      /**
       * it will check that user database password and login body password are same or not
       */
      if (user.toJSON().password !== password) {
        throw new Error("105");
      }

      /**
       * it will generate token and send that token
       */
      const userToken = jwt.sign(
        JSON.stringify({
          user: user.toJSON().name,
          email: user.toJSON().email,
          id: user.toJSON()._id
        }),
        jwtConfig.secretKey
      );
      responseGenerator.sendResponse(res, {
        message: 'user is successfully logged in',
        token: userToken
      })
    } catch (error) {
      responseGenerator.sendError(res, error);
    }
  }

  /**
   * getOwnDetail method is used to getOwn detail
   * @param {*} req 
   * @param {*} res 
   */
  async getOwnDetail(req, res) {
    try {
      const user = await userModel.findById(req.user.id);
      if (!user) {
        throw new Error('107')
      }
      responseGenerator.sendResponse(res, {
        userDetail: user
      })
    } catch (error) {
      responseGenerator.sendError(res, error);
    }
  }
}

module.exports = new UserController();