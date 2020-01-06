const mongo = require("mongoose");
const dbClient = require("../db");
const schema = mongo.Schema;

const cutOffSchema = new schema({
  "sr": {
    type: String
  },
  "developer": {
    type: String
  },
  "cutoff": {
    type: String
  }
});

const CutOffTable = dbClient.model("CutOffTable", cutOffSchema);
module.exports = CutOffTable;