

var http = require('http');

http.createServer(function (req,res) {
	res.write(200, {'Content-Type' : 'text/plain'});
	res.end('hello world');
}).listen(8888, '127.0.0.1');

/*
var http = require('http');
//var fs = require('fs');

http.createServer(function(req, res) {

    res.writeHead(200, { 'Contect-Type': 'text/plain'});
    //var html = fs.readFileSync(__dirname + 'index.html');
    res.end();

}).listen(8888,);*/