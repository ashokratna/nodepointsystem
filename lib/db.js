const mongoose = require('mongoose');
const {
    database
} = require('../config/index');
mongoose.connect(database.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log(err, 'err in connection')
    } else {
        console.log('Database is successfully connected');

    }
});

const dbClient = mongoose.connection;

dbClient.on('error', (err) => {
    console.log('MongoDB Connection error', err);
});

module.exports = dbClient;