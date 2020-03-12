const express = require('express');
var app = express();

var port = process.env.port;

app.get('/',function (req, res) {
	res.send('hola');
});

app.listen(process.env.port, '0.0.0.0');