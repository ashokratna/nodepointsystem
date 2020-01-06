const GoogleSpreadsheet = require("google-spreadsheet");
const respGenerator = require("../response/json-response");
// spreadsheet key is the long id in the sheets URL
const doc = new GoogleSpreadsheet("1LiWlQHawZaLkaN7S_YMTlvg-CEQfBQ-EaO4nVDHda3Y");

let sheets = [];
// @ts-ignore
const cred = require("../config/cred.json");
class GooglSheet {
  constructor() {
    doc.useServiceAccountAuth(cred, (err, res) => {
      if (err) {
        console.log(err, "Error in service account");
      } else {
        doc.getInfo((error, info) => {
          if (error) {
            console.log(error, 'info error')
          } else {
            sheets = info.worksheets;
          }
        });
      }
    });
  }

  async fetchRows(index) {
    return new Promise(async (resolve, reject) => {
      await sheets[index].getRows(sheets[index].id, (err, rows) => {
        if (err) {
          reject(err)
        } else {
          resolve(rows)
        }
      });
    })
  }
}

module.exports = new GooglSheet();