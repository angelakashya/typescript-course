"use strict";
exports.__esModule = true;
var http = require("http");
var server = http.createServer();
server.listen(3000, function () { return console.log('Server está rodando na porta 3000'); });
