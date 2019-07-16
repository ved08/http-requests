const http = require('http');
const fs = require('fs');

var server = http.createServer(function(req,res){

 if (req.url==='/') {
   fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
 }
 if (req.url==='/about') {
   fs.readFile('about.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
 }
 if (req.url==='/contact-me') {
   fs.readFile('contact-me.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
 }

 if (req.url !=='/contact-me' || '/about' ) {
   fs.readFile('404.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
 }

}).listen(8080,console.log('server running...'))
