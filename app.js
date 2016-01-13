require('babel-register');
var server = require('./server').default;
var port = 3000;

server.listen(port, function () {
    console.log('Server listening on: ' + port);
});