const express = require("express");
const router = express.Router();
const validation = require("express-validation");
const validator = require("../validator/validation");
const verifyUser = require("../validator/verify-user");
const userController = require("../controller/user");

// router.get("/users", userController.getUsers);
// router.post("/login", validation(validator.login), userController.login);
// router.post("/user", validation(validator.addUser), userController.addUser);
router.get("/updateRecords", userController.fetchRecords);
router.get("/fetchEmployeePoints", userController.fetchPoints);
// router.get("/own-detail", verifyUser.verifyUser, userController.getOwnDetail);
module.exports = router;