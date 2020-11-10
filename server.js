require('./db/User');
const mongoose = require('mongoose');
const express = require('express'),
    app = express();
const cors = require('cors');
app.use(cors());
const http = require('http').Server(app);



const port = process.env.PORT || 8080,
ip = process.env.IP || '0.0.0.0';

http.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app;