const mongo = require("mongoose");
const dbClient = require("../db");
const schema = mongo.Schema;

const userModel = new schema({
  name: {
    type: String,
    default: ""
  },
  surname: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
    required: true
  },
  designation: {
    type: String,
    default: "",
    required: true
  },
  mobile: {
    type: String,
    default: "",
    required: true
  },
  password: {
    type: String,
    default: "",
    required: true
  }
});

const User = dbClient.model("User", userModel);
module.exports = User;