/**
 * server.js
 *
 * @author   Saneyuki Tadokoro <saneyan@mail.gfunction.com>
 * @preserve Copyright 2013, Saneyuki Tadokoro
*/

var http = require('http'),
    jade = require('jade');

var server = http.createServer();

server.on('request', function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world');
});

server.listen(80, '127.0.0.1');