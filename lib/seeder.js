const pointTable = require('./models/pointTable');
const cutOffTable = require('./models/cuttOffModel');
const google = require('./google');
class Seeder {

  checkPointTableContainsDoc() {
    return new Promise((resolve, reject) => {
      try {
        const pointTableData = pointTable.find();
        pointTableData.countDocuments(async (err, count) => {
          if (err) {
            throw new Error(err)
          } else {
            const projectdData = await google.fetchRows(1);
            const cutOffData = await google.fetchRows(2);
            if (count === 0) {
              projectdData.forEach(async rec => {
                const point = new pointTable(rec);
                await point.save()
              });
              cutOffData.forEach(async rec => {
                const cutoff = new cutOffTable(rec);
                await cutoff.save()
              });
              resolve(true)
            } else {
              projectdData.forEach(async rec => {
                await pointTable.updateOne({
                  sr: rec.sr
                }, rec);
              });
              cutOffData.forEach(async rec => {
                await cutOffTable.updateOne({
                  sr: rec.sr
                }, rec);
              });
              resolve(true)
            }
          }
        })

      } catch (error) {
        reject(error);
      }
    })
  }
}

module.exports = new Seeder();