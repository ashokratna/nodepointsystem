const mongo = require("mongoose");
const dbClient = require("../db");
const schema = mongo.Schema;

const pointTableModel = new schema({
  "sr": {
    "type": "String"
  },
  "projectname": {
    "type": "String"
  },
  "deliverydate": {
    "type": "String"
  },
  "projecttype": {
    "type": "String"
  },
  "projectstatus": {
    "type": "String"
  },
  "clientfeedback": {
    "type": "String"
  },
  "retention": {
    "type": "String"
  },
  "geo": {
    "type": "String"
  },
  "division": {
    "type": "String"
  },
  "pricestd": {
    "type": "String"
  },
  "pointsdev": {
    "type": "String"
  },
  "kickoff": {
    "type": "String"
  },
  "complexity": {
    "type": "String"
  },
  "quicktat": {
    "type": "String"
  },
  "timelydelivered": {
    "type": "String"
  },
  "pdccount": {
    "type": "String"
  },
  "pointtype": {
    "type": "String"
  },
  "pc1name": {
    "type": "String"
  },
  "pc1share": {
    "type": "String"
  },
  "pc1points": {
    "type": "String"
  },
  "pc1kickoff": {
    "type": "String"
  },
  "pc1retention": {
    "type": "String"
  },
  "pc1complexity": {
    "type": "String"
  },
  "pc1quicktat": {
    "type": "String"
  },
  "pc1timelydelivery": {
    "type": "String"
  },
  "pc1pdcpoints": {
    "type": "String"
  },
  "pc1eligible": {
    "type": "String"
  },
  "pc1total": {
    "type": "String"
  },
  "pc1final": {
    "type": "String"
  },
  "pc2name": {
    "type": "String"
  },
  "pc2share": {
    "type": "String"
  },
  "pc2points": {
    "type": "String"
  },
  "pc2kickoff": {
    "type": "String"
  },
  "pc2retention": {
    "type": "String"
  },
  "pc2complexity": {
    "type": "String"
  },
  "pc2quicktat": {
    "type": "String"
  },
  "pc2timelydelivery": {
    "type": "String"
  },
  "pc2pdcpoints": {
    "type": "String"
  },
  "pc2eligible": {
    "type": "String"
  },
  "pc2total": {
    "type": "String"
  },
  "pc2final": {
    "type": "String"
  },
  "pcsharecheck": {
    "type": "String"
  },
  "expertname": {
    "type": "String"
  },
  "expertshare": {
    "type": "String"
  },
  "expertpoints": {
    "type": "String"
  },
  "expertkickoff": {
    "type": "String"
  },
  "expertretention": {
    "type": "String"
  },
  "expertcomplexity": {
    "type": "String"
  },
  "expertquicktat": {
    "type": "String"
  },
  "experttimelydelivery": {
    "type": "String"
  },
  "expertpdcpoints": {
    "type": "String"
  },
  "experteligible": {
    "type": "String"
  },
  "experttotal": {
    "type": "String"
  },
  "expertfinal": {
    "type": "String"
  },
  "dev1name": {
    "type": "String"
  },
  "dev1share": {
    "type": "String"
  },
  "dev1points": {
    "type": "String"
  },
  "dev1kickoff": {
    "type": "String"
  },
  "dev1retention": {
    "type": "String"
  },
  "dev1complexity": {
    "type": "String"
  },
  "dev1quicktat": {
    "type": "String"
  },
  "dev1timelydelivery": {
    "type": "String"
  },
  "dev1pdcpoints": {
    "type": "String"
  },
  "dev1eligible": {
    "type": "String"
  },
  "dev1total": {
    "type": "String"
  },
  "dev1final": {
    "type": "String"
  },
  "dev2name": {
    "type": "String"
  },
  "dev2share": {
    "type": "String"
  },
  "dev2points": {
    "type": "String"
  },
  "dev2kickoff": {
    "type": "String"
  },
  "dev2retention": {
    "type": "String"
  },
  "dev2complexity": {
    "type": "String"
  },
  "dev2quicktat": {
    "type": "String"
  },
  "dev2timelydelivery": {
    "type": "String"
  },
  "dev2pdcpoints": {
    "type": "String"
  },
  "dev2eligible": {
    "type": "String"
  },
  "dev2total": {
    "type": "String"
  },
  "dev2final": {
    "type": "String"
  },
  "dev3name": {
    "type": "String"
  },
  "dev3share": {
    "type": "String"
  },
  "dev3points": {
    "type": "String"
  },
  "dev3kickoff": {
    "type": "String"
  },
  "dev3retention": {
    "type": "String"
  },
  "dev3complexity": {
    "type": "String"
  },
  "dev3quicktat": {
    "type": "String"
  },
  "dev3timelydelivery": {
    "type": "String"
  },
  "dev3pdcpoints": {
    "type": "String"
  },
  "dev3eligible": {
    "type": "String"
  },
  "dev3total": {
    "type": "String"
  },
  "dev3final": {
    "type": "String"
  },
  "dev4name": {
    "type": "String"
  },
  "dev4share": {
    "type": "String"
  },
  "dev4points": {
    "type": "String"
  },
  "dev4kickoff": {
    "type": "String"
  },
  "dev4retention": {
    "type": "String"
  },
  "dev4complexity": {
    "type": "String"
  },
  "dev4quicktat": {
    "type": "String"
  },
  "dev4timelydelivery": {
    "type": "String"
  },
  "dev4pdcpoints": {
    "type": "String"
  },
  "dev4eligible": {
    "type": "String"
  },
  "dev4total": {
    "type": "String"
  },
  "dev4final": {
    "type": "String"
  },
  "dev5name": {
    "type": "String"
  },
  "dev5share": {
    "type": "String"
  },
  "dev5points": {
    "type": "String"
  },
  "dev5kickoff": {
    "type": "String"
  },
  "dev5retention": {
    "type": "String"
  },
  "dev5complexity": {
    "type": "String"
  },
  "dev5quicktat": {
    "type": "String"
  },
  "dev5timelydelivery": {
    "type": "String"
  },
  "dev5pdcpoints": {
    "type": "String"
  },
  "dev5eligible": {
    "type": "String"
  },
  "dev5total": {
    "type": "String"
  },
  "dev5final": {
    "type": "String"
  },
  "dev6name": {
    "type": "String"
  },
  "dev6share": {
    "type": "String"
  },
  "dev6points": {
    "type": "String"
  },
  "dev6kickoff": {
    "type": "String"
  },
  "dev6retention": {
    "type": "String"
  },
  "dev6complexity": {
    "type": "String"
  },
  "dev6quicktat": {
    "type": "String"
  },
  "dev6timelydelivery": {
    "type": "String"
  },
  "dev6pdcpoints": {
    "type": "String"
  },
  "dev6eligible": {
    "type": "String"
  },
  "dev6total": {
    "type": "String"
  },
  "dev6final": {
    "type": "String"
  },
  "devsharecheck": {
    "type": "String"
  },
  "devduplicatecheck": {
    "type": "String"
  },
  "feedbackform": {
    "type": "String"
  },
  "proofoffeedback": {
    "type": "String"
  }
});

const PointTable = dbClient.model("PointTable", pointTableModel);
module.exports = PointTable;