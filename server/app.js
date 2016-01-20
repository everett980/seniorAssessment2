var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var userRouter = require('./routes/userRoutes');
var messageRouter = require('./routes/messageRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'node_modules')));
app.get('/', express.static(__dirname));
app.use('/users', userRouter);
app.use('/messages', messageRouter);

app.use(function (err, req, res, next) {
    console.error(err, err.stack);
});

module.exports = app;
