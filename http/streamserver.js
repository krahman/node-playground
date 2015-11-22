var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
   res.writeHead(200, {'Content-Type' : 'text/html'});
   // Read synchronousely
   fs.createReadStream(__dirname + '/stream-index.html').pipe(res);
}).listen(3000, '127.0.0.1');
