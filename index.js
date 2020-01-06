const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const config = require('./config/index');
const indexRouter = require('./routes/index');
const ev = require('express-validation');
const responseGenerator = require('./response/json-response');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

app.use('/', indexRouter);

app.use(express.static(path.join(__dirname, 'react', 'build')))


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'react', 'build', 'index.html'))
})

app.use((err, req, res, next) => {
    // specific for validation errors
    if (err instanceof ev.ValidationError) {
        // @ts-ignore
        responseGenerator.sendError(res, {
            message: err.errors[0].messages[0]
        });
    }

    // other type of errors, it *might* also be a Runtime Error
    // example handling
    if (process.env.NODE_ENV !== 'production') {
        return res.status(500).send(err.stack);
    } else {
        return responseGenerator.sendError(res, err);
    }
});
app.listen(config.port, () => {
    console.log('Server is listening on port:', config.port);
});